<template>
  <validation-provider
    v-slot="{ errors }"
    mode="lazy"
    tag="div"
    v-bind="{ name, vid, rules }"
  >
    <div :class="$style['base-input']">
      <label>
        <template v-if="label">{{ label }}</template>
        <input
          v-model="internalModel"
          :type="type"
          :class="$style['base-input__field']"
          :placeholder="placeholder"
          @input="$emit('input', $event.target.value)"
          @blur="$emit('blur')"
        />
      </label>
      <div v-if="errors && errors[0]" :class="$style.error">
        {{ errors[0] }}
      </div>
    </div>
  </validation-provider>
</template>

<script lang="ts">
import { ref, watch } from '@nuxtjs/composition-api';

export default {
  name: 'BaseInput',
  props: {
    required: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    value: {
      type: [String, Number],
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    rules: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      required: false,
      default: '',
    },
    vid: {
      type: String,
      required: false,
      default: () => null,
    },
  },
  setup(props: { value: any; }) {
    const internalModel = ref('');

    watch(() => props.value, (newValue: any) => {
      internalModel.value = newValue;
    }, { immediate: true });

    return {
      internalModel,
    };
  },
}
</script>

<style lang="scss" scoped module>
@import "assets/scss/variables";

.error {
  font-size: 13px;
  letter-spacing: -0.21px;
  margin-top: 5px;
  color: $c-danger;
}

.base-input {
  text-align: left;
  margin-bottom: 10px;
  box-shadow: none;

  &__label {
    color: var(--color-dark);
    width: 100%;
  }

  &__required {
    color: var(--color-pink);
  }

  &__field {
    width: 100%;
    height: 53px;
    margin: 8px 0 0;
    border-radius: 4px;
    background-color: $c-grey-300;
    border: none;
    outline: none;
    padding-left: 1rem;
    color: $c-grey-900;

    &::placeholder {
      font-size: 16px;
      color: $c-grey-600;
    }
  }
}
</style>
