<script setup>
import { computed } from 'vue';

const props = defineProps({
  question: {
    type: Object,
    required: true
  },
  modelValue: [String, Number]
});

defineEmits(['update:modelValue']);

const isTextInput = computed(() => 
  props.question.responseOptions[0].typecomponenthtml === '<input type="text">'
);
</script>

<template>
    <div class="question">
      <label :for="question.id">{{ question.comment_question }}</label>
      
      <!-- Text Input -->
      <input 
        v-if="isTextInput"
        :id="question.id"
        type="text"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      
      <!-- Radio Group -->
      <div v-else>
        <template v-for="option in question.responseOptions" :key="option.id">
          <template v-if="option.subresponseoption.length">
            <p>{{ option.optionText }}</p>
            <div v-for="subOption in option.subresponseoption" :key="subOption.id">
              <input 
                type="radio"
                :id="subOption.id"
                :name="question.id"
                :value="subOption.subresponsetext"
                :checked="modelValue === subOption.subresponsetext"
                @change="$emit('update:modelValue', subOption.subresponsetext)"
              />
              <label :for="subOption.id">{{ subOption.subresponsetext }}</label>
            </div>
          </template>
          <template v-else>
            <input 
              type="radio"
              :id="option.id"
              :name="question.id"
              :value="option.optionText"
              :checked="modelValue === option.optionText"
              @change="$emit('update:modelValue', option.optionText)"
            />
            <label :for="option.id">{{ option.optionText }}</label>
          </template>
        </template>
      </div>
    </div>
  </template>
  
