<template lang="html">
  <div class="btn-group" v-on-clickaway="close">
    <button class="btn btn-secondary dropdown-toggle"  @click="toggle" type="button">
      {{(dropdown.selected ? dropdown.selected.text : placeholder)}}
    </button>
    <div class="dropdown-menu" v-bind:style="{maxHeight: dropdownHeight}" v-show="!isClosed">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway'

class Dropdown{
  /**
    * @param String name - Name of the control
    * @param DropdownItem selected - Default selected Item / pass null if you want the placeholder to show
    * @param Number displayedItems - Number of items shown when the dropdown is opened
  */
  constructor(name, selected, displayedItems) {
    this.name = name;
    this.selected = null;
    this.displayedItems = displayedItems;
  }
}

export default {
  Dropdown,
  name: "ui-dropdown",
  mixins: [ clickaway ],
  data() {
    return {
      isClosed: true
    }
  },
  props:{
    dropdown: Dropdown,
    placeholder: String
  },
  computed: {
    dropdownHeight(){
      const i = this.dropdown.displayedItems;
      return `calc(1.5rem*${i} + 6px*${i} + 1rem)`;
    }
  },
  methods: {
    toggle() {
      this.isClosed = !this.isClosed;
    },
    close(){
      if (!this.isClosed) this.toggle();
    }
  },
  mounted(){
    this.$on('selected-changed', selected => {
      this.dropdown.selected = selected;
      this.toggle();
    })
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
      span{
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>
