<template lang="html">
  <a href="#" class="dropdown-item" @click.stop.prevent>
    <ui-checkbox :checkbox="checkbox"></ui-checkbox>
  </a>
</template>

<script>
import UiCheckbox from '../checkbox.vue';

class CheckedDropdownItem {
  constructor(value, text) {
    this.value = value;
    this.text = text;
  }
}
export default {
  name: 'checked-dropdown-item',
  data() {
    return {
      checkbox: new UiCheckbox.Checkbox(false, this.text, 'cross', '1rem')
    };
  },
  props: {
    value: String,
    text: String
  },
  computed: {
    checkedDropdownItem() {
      return new CheckedDropdownItem(this.value, this.text);
    }
  },
  methods: {
    toggle() {
      this.isClosed = !this.isClosed;
    }
  },
  mounted() {
    this.$watch('checkbox.checked', () => {
      this.$parent.$emit('selected-changed');
    });
  },
  components: {
    UiCheckbox
  }
};
</script>
