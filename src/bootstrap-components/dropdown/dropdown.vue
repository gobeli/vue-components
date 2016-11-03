<template lang="html">
  <div class="btn-group">
    <button class="btn btn-secondary dropdown-toggle"  @click="toggle" type="button">
      {{this.dropdown.selected.text}}
    </button>
    <div class="dropdown-menu" v-bind:style="{maxHeight: dropdownHeight}" v-show="!isClosed">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import DropdownItem from './dropdown-item.vue'

class Dropdown{
  /**
    * @param String name - Name of the control
    * @param String selected - Default text / selected Item
    * @param Number displayedItems - Number of items shown when the dropdown is opened
  */
  constructor(name, selected, displayedItems) {
    this.name = name
    this.selected = new DropdownItem.uiClass("",selected)
    this.displayedItems = displayedItems
  }
}

export default {
  uiClass: Dropdown,
  name: "ui-dropdown",
  data() {
    return {
      isClosed: true
    }
  },
  props:{
    dropdown: Dropdown
  },
  computed: {
    dropdownHeight(){
      const i = this.dropdown.displayedItems
      return `calc(1.5rem*${i} + 6px*${i} + 1rem)`
    }
  },
  methods: {
    toggle() {
      this.isClosed = !this.isClosed
    }
  }
}
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
    }
  }
}
</style>
