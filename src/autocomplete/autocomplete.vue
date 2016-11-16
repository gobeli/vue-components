<template lang="html">
  <div class="btn-group">
    <input type="text" name="search" class="form-control"
      v-model="search"
      @keyup.up.prevent="search_keyup(false)"
      @keyup.down.prevent="search_keyup(true)"
      @keyup.enter="search_enter()" />
    <div class="dropdown-menu" v-show="search.length > 0 && !value"  v-bind:style="{maxHeight: this.dropdownHeight}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'autocomplete',
  data() {
    return {
      search: '',
      autocompleteItems: [],
      focused: null
    };
  },
  props: {
    value: [Number, String],
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
      this.$emit('input', autocompleteItem == null ? null : autocompleteItem.value);
      if (autocompleteItem != null && autocompleteItem.value) this.search = autocompleteItem.text;
    }
  },
  watch: {
    search() {
      this.focused = null;
      const filtered = this.autocompleteItems.filter(i => i.text === this.search);
      if (filtered.length > 0) this.select(filtered[0]);
      else this.select(null);
    }
  }
};
</script>

<style lang="sass">
  .dropdown-menu{
    overflow-y: auto;
    width: 100%;
  }
  mark{
    padding: 0;
  }
</style>
