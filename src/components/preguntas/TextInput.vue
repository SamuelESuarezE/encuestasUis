<template>
    <div class="question">
      <label :for="id" class="question-label">{{ label }}</label>
      <input
        :id="id"
        v-model="inputValue"
        type="text"
        class="question-input"
        @input="emitValue"
      />
    </div>
  </template>
  
  <script setup>
  import { ref, defineProps, defineEmits } from 'vue';
  
  const props = defineProps({
    id: String,
    label: String,
  });
  
  const emit = defineEmits(['update:modelValue']);
  
  const inputValue = ref('');
  
  const emitValue = () => {
    emit('update:modelValue', inputValue.value);
  };
  </script>
  
  <style scoped>
  .question {
    margin-bottom: 1.5rem;
  }
  
  .question-label {
    display: block;
    margin-bottom: 0.5rem;
    color: var(--color-darkBlue);
  }
  
  .question-input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid var(--color-gray);
    border-radius: 4px;
  }
  </style>