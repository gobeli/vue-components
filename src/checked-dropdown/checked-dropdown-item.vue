<template lang="html">
  <a href="#" class="dropdown-item" @click.stop.prevent>
    <ui-checkbox size="1rem" type="cross" v-model="checked">
      <span ref="text">
        <slot></slot>
      </span>
    </ui-checkbox>
  </a>
</template>

<script>
import UiCheckbox from '../checkbox/checkbox.vue';

export default {
  name: 'checked-dropdown-item',
  data() {
    return {
      checked: false
    };
  },
  props: {
    value: [String, Number]
  },
  computed: {
    text() {
      return this.$refs.text.textContent;
    },
    checkedDropdownItem() {
      return { value: this.value, text: this.text };
    }
  },
  methods: {
    toggle() {
      this.isClosed = !this.isClosed;
    }
  },
  watch: {
    checked() {
      this.$parent.select();
    }
  },
  components: {
    UiCheckbox
  }
};
</script>
