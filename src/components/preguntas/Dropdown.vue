<template>
    <div class="question">
      <label :for="id" class="question-label">{{ label }}</label>
      <select
        :id="id"
        v-model="selectedValue"
        class="question-select"
        @change="emitValue"
      >
        <option value="" disabled>Seleccione una opcion</option>
        <option v-for="option in options" :key="option.value" :value="option.value">
          {{ option.label }}
        </option>
      </select>
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
  
  const selectedValue = ref('');
  
  const emitValue = () => {
    emit('update:modelValue', selectedValue.value);
  };
  </script>
  
  <style scoped>
  .question-select {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid var(--color-gray);
    border-radius: 4px;
    background-color: var(--color-white);
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