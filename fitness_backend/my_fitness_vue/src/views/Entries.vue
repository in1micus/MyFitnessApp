<script setup>

import { ref, onMounted } from "vue";
import api from "../services/api";

const entries = ref([]);

const form = ref({
    food_id : "",
    servings: "",
    date: ""
});

const fetchEntries = async () => {
    try {
        const response = await api.get("/entries");

        console.log(response.data);

        entries.value = response.data;
    } catch (error) {
        console.error("Error fetching entries:", error);
    }
};

const createEntry = async () => {
    try {
        await api.post("/entries", form.value);

        form.value = {
            food_id : "",
            servings: "",
            date: ""
        };
        
        fetchEntries();
    } catch (err) {
        console.error("Error creating entry:", err);
    }
};

onMounted(fetchEntries);

</script>

<template>

    <div>
        <h2>Entries</h2>
        <h3>New Entry</h3>

        <input v-model="form.food_id" placeholder="Food ID" />
        <input v-model="form.servings" placeholder="Servings" />
        <input v-model="form.date" type="date" />

        <button @click="createEntry">Add Entry</button>
        
        <ul>
            <li v-for="entry in entries" :key="entry.id">
                {{ entry.date }} - {{ entry.name }} - {{ entry.servings }}
            </li>
        </ul>
    </div>
</template>