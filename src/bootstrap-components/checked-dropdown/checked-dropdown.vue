<template lang="html">
  <div class="btn-group">
    <button class="btn btn-secondary dropdown-toggle"  @click="toggle" type="button">
      {{selectedString}}
    </button>
    <div class="dropdown-menu" v-bind:style="{maxHeight: dropdownHeight}" v-show="!isClosed">
      <slot></slot>
    </div>
  </div>
</template>

<script>
class CheckedDropdown {
  constructor(name, displayedItems, ...selectedItems) {
    this.name = name
    this.displayedItems = displayedItems
    this.selectedItems = selectedItems
  }
}

export default {
  uiClass: CheckedDropdown,
  data() {
    return {
      isClosed: true,
      selectedString: ""
    }
  },
  props: {
    checkedDropdown: CheckedDropdown
  },
  computed: {
    selectedString() {
      let s = this.checkedDropdown.selectedItems.map(item => item.text).join(', ')
      return s == "" ? "-" : s
    },
    dropdownHeight(){
      const i = this.checkedDropdown.displayedItems
      return `calc(1.5rem*${i} + 6px*${i} + 1rem)`
    }
  },
  methods: {
    toggle(){
      this.isClosed = !this.isClosed
    },
    setSelected(){
      this.checkedDropdown.selectedItems = this.$children.filter(c => c.checkbox.checked).map(c => c.checkedDropdownItem)
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
