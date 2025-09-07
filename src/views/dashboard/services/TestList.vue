<script setup lang="ts">
import { onMounted } from "vue";
import { useServicesStore, FETCH_SERVICES } from "@/stores/services";

const store = useServicesStore();

// Po zamontowaniu komponentu pobierz usługi
onMounted(() => {
	store[FETCH_SERVICES]();
});
</script>
<template>
	<div class="p-6">
		<h2 class="text-2xl font-semibold mb-4">
			Nasze usługi ({{ store.count }})
		</h2>

		<!-- wrapper dla responsywności -->
		<div class="overflow-x-auto bg-white rounded shadow">
			<table class="table-auto w-full border-collapse">
				<thead class="bg-gray-100">
					<tr>
						<th class="px-4 py-2 text-left">Nazwa usługi</th>
						<th class="px-4 py-2 text-right">Cena (zł)</th>
						<th class="px-4 py-2 text-right">Czas (min)</th>
						<th class="px-4 py-2 text-left">Opis</th>
						<th class="px-4 py-2 text-center">Aktywna</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="service in store.services" :key="service.serviceCategoryId"
						class="even:bg-gray-50 hover:bg-gray-100">
						<td class="border px-4 py-2">{{ service.name }}</td>
						<td class="border px-4 py-2 text-right">
							{{ service.price.toFixed(2) }}
						</td>
						<td class="border px-4 py-2 text-right">
							{{ service.duration }}
						</td>
						<td class="border px-4 py-2">
							{{ service.description || "—" }}
						</td>
						<td class="border px-4 py-2 text-center">
							<span
								:class="service.isActive ? 'text-green-600' : 'text-red-600'">
								{{ service.isActive ? "✔️" : "❌" }}
							</span>
						</td>
					</tr>
					<tr v-if="store.services.length === 0">
						<td colspan="5" class="px-4 py-2 text-center text-gray-500">
							Brak usług do wyświetlenia
						</td>
					</tr>
				</tbody>
			</table>
		</div>

		<button @click="store[FETCH_SERVICES]()"
			class="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
			Odśwież
		</button>
	</div>
</template>
