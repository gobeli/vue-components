<template lang="html">
  <li class="item">
    <label>
      <input type="checkbox" v-model="selected">
      {{text}}
    </label>
  </li>
</template>

<script>
class CheckedDropdownItem {
  constructor(value,text) {
    this.value = value
    this.text = text
  }
}

export default {
  name: "checked-dropdown-item",
  data() {
    return {
      selected: false
    }
  },
  props: {
    value: String,
    text: String
  },
  computed: {
    checkedDropdownItem() {
      return new CheckedDropdownItem(this.value, this.text)
    }
  },
  watch:{
    selected(newVal){
      this.$parent.setSelected()
    }
  },
  methods: {
    toggle() {
      this.isClosed = !this.isClosed;
    }
  }
}
</script>
