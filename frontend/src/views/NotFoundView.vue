<script setup lang="ts"></script>

<template>
  <main>
    <div class="error-container">
      <Message severity="error">Page you're looking for doesn't exist</Message>
    </div>
  </main>
</template>

<style scoped>
.error-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
