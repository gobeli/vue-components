<template lang="html">
    <div @click="select()" class="radiobutton">
      <svg width="20px" height="20px" viewBox="0 0 20 20" style="fill:transparent">
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
    value: {
      type: [Number, String],
      required: true
    },
    name: String
  },
  computed: {
    show() {
      return this.$parent.value === this.value;
    }
  },
  methods: {
    select() {
      this.$parent.setSelected(this.value);
    }
  }
};
</script>
<style lang="sass">
.radiobutton{
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  &:last-child{
    margin-bottom: 0;
  }
  .label{
    margin-left: 5px;
    cursor: default;
  }
  .icon{
    stroke:#333;
    stroke-width:2px;
    stroke-dasharray: 25;
    stroke-dashoffset: 25;
    animation: draw .2s linear forwards;
  }
}

@keyframes draw {
  to {
    stroke-dashoffset: 0;
  }
}
</style>
