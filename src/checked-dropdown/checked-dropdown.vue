<template lang="html">
  <div class="btn-group checked-dropdown" v-on-clickaway="close" :disabled="disabled">
    <button class="btn btn-secondary dropdown-toggle checked-dropdown-toggle"  @click="toggle" type="button">
      <span v-html="selectedString"></span>
    </button>
    <div class="dropdown-menu checked-dropdown-menu" v-bind:style="{maxHeight: dropdownHeight}" v-show="!isClosed">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';

export default {
  name: 'ui-checked-dropdown',
  mixins: [clickaway],
  data() {
    return {
      isClosed: true,
      selectedString: ''
    };
  },
  props: {
    value: {
      type: Array,
      required: true
    },
    disabled: Boolean,
    displayedItems: Number,
    placeholder: String
  },
  computed: {
    dropdownHeight() {
      const i = this.displayedItems;
      return `calc(1.5rem*${i} + 6px*${i} + 1rem)`;
    }
  },
  methods: {
    toggle() {
      this.isClosed = !this.isClosed;
    },
    close() {
      if (!this.isClosed) this.toggle();
    },
    select() {
      const selected = this.$children.filter(c => c.checked);
      const s = selected.map(item => `<span class="tag tag-default">${item.text}</span>`).join('');
      this.selectedString = s === '' ? this.placeholder : s;
      this.$emit('input', selected.map(c => c.checkedDropdownItem.value));
    }
  },
  mounted() {
    if (this.value.length <= 0) this.selectedString = this.placeholder;
  }
};
</script>
<style lang="sass">
.checked-dropdown{
  .dropdown-menu{
    display: block;
    overflow-y: auto;
  }
  .checked-dropdown-menu, .checked-dropdown-toggle{
    width: 100%;
    &.dropdown-toggle{
      display: flex;
      align-items: center;
      justify-content: space-between;
      >span{
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .tag{
        color: #FFF;
        margin-right: 3px;
      }
    }
  }
}
</style>
