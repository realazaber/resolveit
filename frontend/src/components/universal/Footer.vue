<script setup lang="ts">
const currentYear: number = new Date().getFullYear();
</script>

<template>
  <footer
    class="mt-auto w-full flex justify-center items-center bg-primary text-white p-2"
  >
    <a href="https://azaber.com/" target="_blank"
      >Made by {{ currentYear }} Azaber</a
    >
  </footer>
</template>

<style lang="scss" scoped></style>
