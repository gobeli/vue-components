<template>
  <div class="radiobuttons">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'ui-radiobutton-group',
  props: {
    value: {
      type: [Number, String],
      required: true
    },
    disabled: Boolean
  },
  methods: {
    setSelected(value) {
      this.$emit('input', value);
    }
  }
};
</script>
