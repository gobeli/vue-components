<template lang="html">
  <div class="btn-group" v-on-clickaway="() => {open = false}">
    <input type="text" name="search" class="form-control" :disabled="disabled"
      v-model="search"
      @keyup.up.prevent="search_keyup(false)"
      @keyup.down.prevent="search_keyup(true)"
      @keyup.enter="search_enter()"
      v-on:focus="open = true" />
    <div class="dropdown-menu" v-show="search.length > 0 && !value && open"  v-bind:style="{maxHeight: this.dropdownHeight}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';

export default {
  mixins: [clickaway],
  name: 'autocomplete',
  data() {
    return {
      search: '',
      autocompleteItems: [],
      focused: null,
      open: false
    };
  },
  props: {
    value: {
      type: [Number, String],
      required: true
    },
    disabled: Boolean,
    displayedItems: Number
  },
  computed: {
    filteredItems() {
      return this.autocompleteItems.filter(i =>
        i.text.toLowerCase().includes(this.search.toLowerCase()));
    },
    dropdownHeight() {
      const i = this.displayedItems;
      return `calc(1.5rem*${i} + 1rem + 6px*${i})`;
    }
  },
  mounted() {
    this.autocompleteItems = this.$children.map(c => c.autocompleteItem);
  },
  methods: {
    search_keyup(next) {
      const item = this.focused;
      let i = 0;
      if (item != null && this.filteredItems != null) {
        i = this.filteredItems.indexOf(item);
        i = next ? i + 1 : i - 1;
      }
      const newItem = this.filteredItems[i];
      if (newItem !== undefined) {
        this.focused = newItem;
      }
    },
    search_enter() {
      if (!this.focused) return;
      this.select(this.focused);
    },
    select(autocompleteItem) {
      this.$emit('input', !autocompleteItem ? null : autocompleteItem.value);
      if (autocompleteItem && autocompleteItem.value) this.search = autocompleteItem.text;
    }
  },
  watch: {
    search() {
      this.focused = null;
      const filtered = this.autocompleteItems
        .filter(i => i.text.toLowerCase() === this.search.toLowerCase());
      if (filtered.length > 0) this.select(filtered[0]);
      else this.select(null);
    },
    value() {
      const filtered = this.autocompleteItems.filter(i => i.value === this.value);
      if (filtered.length > 0) this.select(filtered[0]);
    }
  }
};
</script>

<style lang="sass">
  .dropdown-menu{
    overflow-y: auto;
    width: 100%;
    z-index: 0;
  }
  mark{
    padding: 0;
  }
</style>
