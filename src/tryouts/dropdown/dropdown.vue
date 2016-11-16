<template lang="html">
  <div class="btn-group">
    <button class="btn btn-secondary dropdown-toggle" :disabled="disabled"  @click="toggle" type="button">
      {{(value ? selectedText : placeholder)}}
    </button>
    <div class="dropdown-menu" v-bind:style="{maxHeight: dropdownHeight}" v-show="!isClosed">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ui-dropdown',
  props: {
    value: {
      type: [Number, String],
      required: true
    },
    disabled: Boolean,
    placeholder: String,
    displayedItems: Number
  },
  data() {
    return {
      selectedText: null,
      isClosed: true
    };
  },
  computed: {
    dropdownHeight() {
      const i = this.displayedItems;
      return `calc(1.5rem*${i} + 6px*${i} + 1rem)`;
    }
  },
  methods: {
    toggle() {
      this.isClosed = !this.isClosed;
    },
    setSelected(value, text) {
      this.$emit('input', value);
      this.selectedText = text;
      this.toggle();
    }
  },
  mounted() {
    if (this.value) {
      let child = this.$children.filter(c => c.value.toString() === this.value.toString())[0];
      if (typeof this.value === 'number') {
        child = this.$children.filter(c => parseInt(c.value, 10) === parseInt(this.value, 10))[0];
      }
      if (child != null) {
        this.selectedText = child.text;
      }
    }
  }
};
</script>
