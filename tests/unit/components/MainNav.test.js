import { render, screen } from "@testing-library/vue";

import MainNav from "@/components/MainNav.vue";
import { expect } from "vitest";

describe("MainNav", () => {
  it("displays company name", () => {
    render(MainNav);
    const companyName = screen.getByText("Anna");
    expect(companyName).toBeInTheDocument();
  });

  it("displays menu items for navigations", () => {
    render(MainNav);
    const navigationsMenuItems = screen.getAllByRole("listitem");
    const navigationsMenuItemText = navigationsMenuItems.map((x) => x.textContent);
    expect(navigationsMenuItemText).toEqual(["Shop", "Order Time", "Aboud me", "News", "Galery"]);
  });
});
