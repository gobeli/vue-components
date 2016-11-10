<template lang="html">
  <div class="btn-group" v-on-clickaway="close">
    <button class="btn btn-secondary dropdown-toggle"  @click="toggle" type="button">
      <span>{{selectedString}}</span>
    </button>
    <div class="dropdown-menu" v-bind:style="{maxHeight: dropdownHeight}" v-show="!isClosed">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';

class CheckedDropdown {
  constructor(displayedItems, ...selectedItems) {
    this.displayedItems = displayedItems;
    this.selectedItems = selectedItems;
  }
}

export default {
  CheckedDropdown,
  name: 'ui-checked-dropdown',
  mixins: [clickaway],
  data() {
    return {
      isClosed: true,
      selectedString: ''
    };
  },
  props: {
    checkedDropdown: CheckedDropdown,
    placeholder: String
  },
  computed: {
    selectedString() {
      const s = this.checkedDropdown.selectedItems.map(item => item.text).join(', ');
      return s === '' ? this.placeholder : s;
    },
    dropdownHeight() {
      const i = this.checkedDropdown.displayedItems;
      return `calc(1.5rem*${i} + 6px*${i} + 1rem)`;
    }
  },
  methods: {
    toggle() {
      this.isClosed = !this.isClosed;
    },
    close() {
      if (!this.isClosed) this.toggle();
    }
  },
  mounted() {
    this.$on('selected-changed', () => {
      this.checkedDropdown.selectedItems =
        this.$children.filter(c => c.checkbox.checked).map(c => c.checkedDropdownItem);
    });
  }
};
</script>
<style lang="sass">
.btn-group{
  .dropdown-menu{
    display: block;
    overflow-y: auto;
  }
  .dropdown-menu, .dropdown-toggle{
    width: 100%;
    &.dropdown-toggle{
      display: flex;
      align-items: center;
      justify-content: space-between;
      span{
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>
