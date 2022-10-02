<template>
  <button
    :disabled="disabled"
    :to="to"
    v-bind="$attrs"
    v-on="$listeners"
    :class="$style['b-button']"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    to: {
      type: [Object, String],
      default: null,
    },
    size: {
      type: [String],
      default: null,
    },
  },
};
</script>

<style lang="scss" module>
@import "assets/scss/variables";

.b-button {
  transition: all 0.3s;
  height: 48px;
  padding: 15px;
  text-transform: uppercase;
  border: none;
  border-radius: 4px;
  object-fit: contain;
  color: $c-primary;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
    color: $c-grey-700;
  }
}
</style>
