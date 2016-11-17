<template lang="html">
  <a class="dropdown-item"
    v-bind:class="{ active: autocompleteItem == $parent.focused }"
    @click="select()" v-html="highlightedText"
    v-show="$parent.filteredItems.indexOf(autocompleteItem) >= 0">
    <span class="hidden-xs-up" ref="text">
      <slot></slot>
    </span>
  </a>
</template>

<script>
export default {
  name: 'autocomplete-item',
  data() {
    return {
      text: ''
    };
  },
  props: {
    value: {
      type: [Number, String],
      required: true
    }
  },
  computed: {
    highlightedText() {
      const re = new RegExp((this.$parent.search), 'i');
      const matches = this.text.match(re);
      if (matches == null) return this.text;
      return this.text.replace(re, `<mark>${matches[0]}</mark>`).replace(' ', '&nbsp;');
    },
    autocompleteItem() {
      return { value: this.value, text: this.text };
    }
  },
  methods: {
    select() {
      this.$parent.select(this.autocompleteItem);
    }
  },
  mounted() {
    this.text = this.$refs.text.textContent;
  }
};
</script>
<style lang="sass">
  .dropdown-item>mark{
    padding: 0;
  }
</style>
