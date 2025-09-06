<script setup lang="ts">
import { ref } from "vue";
import { CREATE_SERVICES, useServicesStore } from "@/stores/services";

const store = useServicesStore();

const name = ref("");
const price = ref(0);
const duration = ref(30);
const serviceCategoryId = ref("");
const serviceTypeId = ref("");
const isActive = ref(true);
const description = ref("");

const onSubmit = async () => {
	try {
		await store[CREATE_SERVICES]({
			name: name.value,
			price: price.value,
			duration: duration.value,
			serviceCategoryId: serviceCategoryId.value,
			serviceTypeId: serviceTypeId.value,
			isActive: isActive.value,
			description: description.value || undefined,
		});
		// oczyść formularz
		name.value = "";
		price.value = 0;
		duration.value = 30;
		serviceCategoryId.value = "";
		serviceTypeId.value = "";
		isActive.value = true;
		description.value = "";
		alert("Usługa dodana!");
	} catch (err) {
		console.error(err);
		alert("Coś poszło nie tak podczas dodawania.");
	}
};

</script>
<template>
	<form @submit.prevent="onSubmit" class="space-y-5 p-6 m-6 border rounded flex-row justify-items-center">
		<div>
			<label class="block font-medium">Nazwa</label>
			<input v-model="name" type="text" required class="w-full border p-2" />
		</div>
		<div class="grid grid-cols-3 gap-4">
			<div>
				<label class="block font-medium">Cena</label>
				<input v-model.number="price" type="number" min="-1" required class="w-full border p-1" />
			</div>
			<div>
				<label class="block font-medium">Czas (min)</label>
				<input v-model.number="duration" type="number" min="0" required class="w-full border p-1" />
			</div>
		</div>
		<div class="grid grid-cols-3 gap-4">
			<div>
				<label class="block font-medium">ServiceCategory ID</label>
				<input v-model="serviceCategoryId" type="text" required class="w-full border p-2" />
			</div>
			<div>
				<label class="block font-medium">ServiceType ID</label>
				<input v-model="serviceTypeId" type="text" required class="w-full border p-2" />
			</div>
		</div>
		<div>
			<label class="inline-flex items-center">
				<input v-model="isActive" type="checkbox" class="mr-3" />
				Aktywny
			</label>
		</div>
		<div>
			<label class="block font-medium">Opis (opcjonalnie)</label>
			<textarea v-model="description" class="w-full border p-2"></textarea>
		</div>
		<button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded">
			Dodaj usługę
		</button>
	</form>
</template>
