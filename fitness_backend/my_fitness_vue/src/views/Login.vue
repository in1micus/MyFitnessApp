<script setup>

import { ref } from "vue";
import api from "../services/api";

const email = ref("");
const password = ref("");

const login = async () => {
  console.log("LOGIN CLICKED");
  try {
    const response = await api.post("/auth/login", {
      email: email.value,
      password: password.value,
    });
    console.log("Login successful:", response.data);
    // Handle successful login (e.g., store token, redirect)
    
    localStorage.setItem("token", response.data.token);

    window.location.href = "/entries";
    
  } catch (error) {
    console.error("Login failed:", error);
    // Handle login error (e.g., show error message)
  }

};

</script>

<template>
    <div>
        <h1>Login</h1>
        <input v-model="email" placeholder="Email" />
        <input v-model="password" type="password" placeholder="Password" />
        <button @click="login">Login</button>
    </div>
</template>

