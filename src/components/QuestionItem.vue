<script setup>
import router from '@/router';
import { computed } from 'vue';
import {submitForm} from '@/main'

const props = defineProps({
    question: {
        type: Object,
        required: true
    },
    modelValue: [String, Number]
});

defineEmits(['update:modelValue']);

const isTextInput = computed(() =>
    props.question.responseOptions[0].typecomponenthtml === 'text'
);

</script>

<template>
    <div :class="{ 'question': isTextInput, 'options': !isTextInput }">
        <label :for="question.questionNumber" style="font-weight: bold;">{{ question.questionNumber }}. {{
            question.comment_question }}</label>

        <!-- Text Input -->
        <input v-if="isTextInput" :id="question.questionNumber" type="text" :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)" class="input_text" />

        <!-- Radio Group -->
        <div class="radio_group" v-else>
            <template v-for="option in question.responseOptions" :key="option.id">
                <template v-if="option.subresponseoption.length">
                    <p style="margin-block: 10px; font-weight: bold; background-color: var(--color-gray); width: 50%;">{{
                        option.optionText }}</p>
                    <div v-for="subOption in option.subresponseoption" :key="subOption.id">
                        <input style="margin-block: 5px;" type="radio" :id="subOption.subresponsenumber" :name="question.id"
                            :value="subOption.subresponsetext" :checked="modelValue === subOption.subresponsetext"
                            @change="$emit('update:modelValue', subOption.subresponsetext)" />
                        <label style="margin-left: 10px;" :for="subOption.subresponsenumber">{{ subOption.subresponsetext
                        }}</label>
                    </div>
                </template>
                <template v-else>
                    <div class="options">
                        <div class="option">
                            <template v-if="question.questionNumber == 'P10' && option.optionText == 'NO'">
                                <input style="margin-right: 5px;" type="radio"
                                    :id="question.questionNumber + option.optionvalue" :name="question.id"
                                    :value="option.optionText" :checked="modelValue === option.optionText"
                                    @change="$emit('update:modelValue', option.optionText)"
                                    @input="submitForm" />
                                <label style="margin-right: 20px;" :for="question.questionNumber + option.optionvalue">{{
                                    option.optionText }}</label>
                            </template>
                            <template v-else>
                                <input style="margin-right: 5px;" type="radio"
                                :id="question.questionNumber + option.optionvalue" :name="question.id"
                                :value="option.optionText" :checked="modelValue === option.optionText"
                                @change="$emit('update:modelValue', option.optionText)" />
                                <label style="margin-right: 20px;" :for="question.questionNumber + option.optionvalue">{{
                                    option.optionText
                                }}</label>
                            </template>
  
                        </div>
                    </div>

                </template>
            </template>
        </div>
    </div>
</template>
  
<style scoped>
.radio_group {
    margin-bottom: 20px;
}

.question {
    display: flex;
    margin-block: 20px;
}

.options {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.input_text {
    margin-left: 20px;
    flex: 1;
}

@media (width < 768px) {
    .question {
        text-align: left;
        display: block;
    }

    .input_text {
        margin-left: 0px;
        width: 100%;
        height: 30px;
    }
}</style>