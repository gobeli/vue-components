<template lang="html">
  <li class="item" @click="select()"
    v-bind:class="{ 'selected': value == $parent.dropdown.selected.value }">
    {{text}}
  </li>
</template>

<script>
import EventHub from '../../helpers/eventHub'

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
    }
  }
}
</script>
