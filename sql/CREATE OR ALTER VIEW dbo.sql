CREATE OR ALTER VIEW dbo.aviw_BIM_ValidationSpecificationsXMLExport 
AS

WITH EnumCount AS (
    SELECT COUNT(*) AS EnumCount
        , CE.Criteria_ID
    FROM dbo.atbl_BIM_ConstraintsCriteriasEnumerations AS CE
    GROUP BY CE.Criteria_ID
),
SingleEnum AS (
    SELECT EC.Criteria_ID, CCE.StringValue
    FROM EnumCount AS EC
    INNER JOIN dbo.atbl_BIM_ConstraintsCriteriasEnumerations AS CCE ON CCE.Criteria_ID = EC.Criteria_ID
    WHERE EnumCount = 1
),
AggregatedEnums AS (
    SELECT EC.Criteria_ID,
        STRING_AGG(CAST(N'
        <xs:enumeration value="' + CCE.StringValue+ '" />
        ' AS NVARCHAR(MAX)), N'
        ') as Enums
    FROM EnumCount AS EC
    INNER JOIN dbo.atbl_BIM_ConstraintsCriteriasEnumerations AS CCE ON CCE.Criteria_ID = EC.Criteria_ID
    WHERE EnumCount > 1
    GROUP BY EC.Criteria_ID
),
CriteriaXML AS (
    SELECT
        C.ID AS Constraint_ID,
        CASE 
        WHEN MAX(EC.EnumCount) IS NULL OR MAX(EC.EnumCount) = 0 THEN
            ''
        ELSE
            STRING_AGG(CAST(N'<ids:' + CCType.IDSName + '>
            '+
            CASE
                    WHEN EC.EnumCount = 1 THEN
                        '<ids:simpleValue>' + SE.StringValue + '</ids:simpleValue>'
                    WHEN CC.CritPatternOrValue_ID = 1 THEN
                        '<xs:restriction base="xs:string">
                            <xs:pattern value="' + CC.StringValue + '" />
                        </xs:restriction>'
                    WHEN EC.EnumCount > 1 THEN
                        '<xs:restriction base="xs:string">' + AE.Enums + '</xs:restriction>'
                    ELSE ''
                END + '
            </ids:' + CCType.IDSName + '>' AS NVARCHAR(MAX))
            ,'') 
        END AS CriteriaSummary
    FROM dbo.atbl_BIM_Constraints AS C
    INNER JOIN dbo.atbl_BIM_ConstraintsCriterias AS CC ON CC.Constraint_ID = C.ID
    INNER JOIN dbo.aviw_BIM_ConstraintsCriteriaTypes AS CCType ON CCType.ID = CC.CritType_ID
    LEFT OUTER JOIN EnumCount AS EC ON EC.Criteria_ID = CC.ID 
    LEFT OUTER JOIN SingleEnum AS SE ON SE.Criteria_ID = CC.ID
    LEFT OUTER JOIN AggregatedEnums AS AE ON AE.Criteria_ID = CC.ID
    GROUP BY C.ID
)

SELECT 
    T.ID AS Rule_ID, 
    V.ID AS SetupVersionID, 
    C.IsRequirement,
        (N'<ids:' + CCat.IDSName + '>
        ' + CXML.CriteriaSummary + '
        </ids:' + CCat.IDSName + '>'),
    '') AS ConstraintXML
FROM dbo.atbl_BIM_ValidationSetupsRules AS T
INNER JOIN dbo.atbv_BIM_ValidationSetupsVersions AS V ON T.SetupVer_ID = V.ID
INNER JOIN dbo.atbl_BIM_Constraints AS C ON T.ID = ValSetupRule_ID
INNER JOIN dbo.aviw_BIM_ConstraintsCategories AS CCat ON CCat.ID = C.Category_ID
INNER JOIN CriteriaXML AS CXML ON CXML.Constraint_ID = C.ID

-- WHERE T.SetupVer_ID = 10497
-- AND C.IsRequirement = 0 