<script setup lang="ts"></script>

<template>
  <main class="centered-wrapper">
    <div class="error-container">
      <Message severity="error">{{ $t('labels.pageDoesNotExist') }}</Message>
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
.centered-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
