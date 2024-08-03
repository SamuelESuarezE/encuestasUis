<template>
    <div class="composite-question">
      <h3 class="composite-question-title">{{ title }}</h3>
      <div v-for="subQuestion in subQuestions" :key="subQuestion.id" class="sub-question">
        <component
          :is="getComponentType(subQuestion.type)"
          v-model="answers[subQuestion.id]"
          :id="subQuestion.id"
          :label="subQuestion.label"
          :options="subQuestion.options"
          @update:modelValue="updateAnswer(subQuestion.id, $event)"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, defineProps, defineEmits } from 'vue';
  import TextInput from './TextInput.vue';
  import Dropdown from './Dropdown.vue';
  import Checklist from './Checklist.vue';
  
  const props = defineProps({
    title: String,
    subQuestions: Array,
  });
  
  const emit = defineEmits(['update:modelValue']);
  
  const answers = ref({});
  
  const getComponentType = (type) => {
    switch (type) {
      case 'text':
        return TextInput;
      case 'dropdown':
        return Dropdown;
      case 'checklist':
        return Checklist;
      default:
        return null;
    }
  };
  
  const updateAnswer = (id, value) => {
    answers.value[id] = value;
    emit('update:modelValue', answers.value);
  };
  </script>
  
  <style scoped>
  .composite-question {
    margin-block: 2rem;
  }
  
  .composite-question-title {
    color: var(--color-darkBlue);
    margin-bottom: 1rem;
  }
  
  .sub-question {
    margin-bottom: 1rem;
  }
  </style>