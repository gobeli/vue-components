<template lang="html">
    <div @click="select()" class="radiobutton">
      <svg v-bind:width="size" v-bind:height="size" viewBox="0 0 20 20" style="fill:transparent">
        <circle cx="10" cy="10" r="9" width="20" height="20" style="stroke-width: 2px;stroke:#333;fill:transparent;" />
        <path class="icon" v-show="show" d="M6,10a4,4 0 1,0 8,0a4,4 0 1,0 -8,0"/>
      </svg>
      <div class="label">
        <slot></slot>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ui-radiobutton',
  props: {
    name: String,
    size: String
  },
  computed: {
    show() {
      return this.$parent.radiobuttonGroup.selectedName
        && this.name === this.$parent.radiobuttonGroup.selectedName;
    }
  },
  methods: {
    select() {
      this.$parent.radiobuttonGroup.selectedName = this.name;
    }
  }
};
</script>
