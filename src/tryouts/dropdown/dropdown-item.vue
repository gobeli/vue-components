<template lang="html">
  <a href="#" class="dropdown-item" @click.stop.prevent="select"
    v-bind:class="{ 'active': this.value == this.$parent.value }">
    <span ref="text">
      <slot></slot>
    </span>
  </a>
</template>

<script>
export default {
  props: {
    value: {
      type: [Number, String],
      required: true
    }
  },
  computed: {
    text() {
      return this.$refs.text.textContent;
    }
  },
  methods: {
    select() {
      this.$parent.setSelected(this.value, this.text);
    }
  },
  mounted() {
  }
};
</script>
