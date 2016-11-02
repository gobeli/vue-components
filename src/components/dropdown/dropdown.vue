<template lang="html">
  <div class="dropdown" @click="toggle"  v-bind:class="{ 'closed': isClosed }" v-bind:style="{width: dropdown.width}">
    <div class="title item">
      {{dropdown.selected.text}}
      <div class="icon">
        <svg width="10" height="10"  v-bind:class="{ 'rotate': isClosed }" style="fill:transparent;border-radius:2px">
          <polygon fill="#333" points="5,0 10,8 0,8" />
        </svg>
      </div>
    </div>
    <ul class="items" v-bind:style="{width: dropdown.width}">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
require('../shared-styles.scss')
require('../dropdown.scss')

import DropdownItem from './dropdown-item.vue'

class Dropdown{
  /**
    * @param String name - Name of the control
    * @param String selected - Default text / selected Item
    * @param String width - Width of the control
  */
  constructor(name, selected, width) {
    this.name = name
    this.selected = new DropdownItem.uiClass("",selected)
    this.width = width
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
  methods: {
    toggle() {
      this.isClosed = !this.isClosed
    }
  }
}
</script>
