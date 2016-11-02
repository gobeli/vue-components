<template lang="html">
  <div class="dropdown" v-bind:class="{ 'closed': isClosed }" v-bind:style="{width: checkedDropdown.width}">
    <div class="title item" @click="toggle">
      {{selectedString}}
      <div class="icon">
        <svg width="10" height="10"  v-bind:class="{ 'rotate': isClosed }" style="fill:transparent;border-radius:2px">
          <polygon fill="#333" points="5,0 10,8 0,8" />
        </svg>
      </div>
    </div>
    <ul class="items" v-bind:style="{width: checkedDropdown.width}">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
require('../shared-styles.scss')
require('../dropdown.scss')

class CheckedDropdown {
  constructor(name, width, ...selectedItems) {
    this.name = name
    this.width = width
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
      return this.checkedDropdown.selectedItems.map(item => item.text).join(', ')
    }
  },
  methods: {
    toggle(){
      this.isClosed = !this.isClosed
    },
    setSelected(){
      this.checkedDropdown.selectedItems = this.$children.filter(c => c.selected).map(c => c.checkedDropdownItem)
    }
  }
}
</script>
