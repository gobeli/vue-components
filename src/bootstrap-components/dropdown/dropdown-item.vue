<template lang="html">
  <a href="#" class="dropdown-item" @click.stop.prevent="select()"
    v-bind:class="{ 'active': this.$parent.selected != null && this.value == this.$parent.selected.value }">
    {{text}}
  </a>
</template>

<script>
class DropdownItem {
  constructor(value,text) {
    this.value = value;
    this.text = text;
  }
}

export default {
  DropdownItem,
  name: "ui-dropdown-item",
  props:{
    value: String,
    text: String
  },
  computed: {
    dropdownItem() {
      return new DropdownItem(this.value, this.text);
    }
  },
  methods: {
    select() {
      this.$parent.$emit('selected-changed', this.dropdownItem);
    }
  }
}
</script>
