<template>
    <div class="question">
      <p class="question-label">{{ label }}</p>
      <div v-for="option in options" :key="option.value" class="checkbox-item">
        <input
          :id="`${id}-${option.value}`"
          v-model="selectedValues"
          type="checkbox"
          :value="option.value"
          @change="emitValue"
        />
        <label :for="`${id}-${option.value}`">{{ option.label }}</label>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, defineProps, defineEmits } from 'vue';
  
  const props = defineProps({
    id: String,
    label: String,
    options: Array,
  });
  
  const emit = defineEmits(['update:modelValue']);
  
  const selectedValues = ref([]);
  
  const emitValue = () => {
    emit('update:modelValue', selectedValues.value);
  };
  </script>
  
  <style scoped>
  .checkbox-item {
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
  }
  
  .checkbox-item label {
    margin-left: 0.5rem;
    color: var(--color-black);
  }

  .question-label {
    display: block;
    margin-bottom: 0.5rem;
    color: var(--color-darkBlue);
  }

  .question {
    margin-bottom: 1.5rem;
  }
  </style>