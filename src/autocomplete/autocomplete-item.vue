<template lang="html">
  <a class="dropdown-item"
    v-bind:class="{ active: autocompleteItem == $parent.focused }"
    @click="select()" v-html="highlightedText"
    v-show="$parent.filteredItems.indexOf(autocompleteItem) >= 0">
  </a>
</template>

<script>
export default {
  name: 'autocomplete-item',
  props: {
    value: {
      type: [Number, String],
      required: true
    },
    text: {
      type: [String],
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
  }
};
</script>
<style lang="sass">
  .dropdown-item>mark{
    padding: 0;
  }
</style>
