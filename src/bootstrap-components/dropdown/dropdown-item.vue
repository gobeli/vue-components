<template lang="html">
  <a href="#" class="dropdown-item" @click.stop.prevent="select()"
    v-bind:class="{ 'active': value == $parent.dropdown.selected.value }">
    {{text}}
  </a>
</template>

<script>
class DropdownItem {
  constructor(value,text) {
    this.value = value
    this.text = text
  }
}

export default {
  uiClass: DropdownItem,
  name: "ui-dropdown-item",
  props:{
    value: String,
    text: String
  },
  computed: {
    dropdownItem() {
      return new DropdownItem(this.value, this.text)
    }
  },
  methods: {
    select() {
      this.$parent.dropdown.selected = this.dropdownItem;
      this.$parent.toggle()
    }
  }
}
</script>
