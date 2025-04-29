<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Container from "./components/universal/Container.vue";
import Nav from "./components/universal/Nav.vue";
import Footer from "./components/universal/Footer.vue";
</script>

<template>
  <Nav />
  <Container>
    <RouterView />
  </Container>
  <Footer />
</template>

<style>
@import "./assets/styles.css";
@import "primeicons/primeicons.css";
</style>
