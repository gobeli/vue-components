<template>
  <div class="checkbox" @click="toggle" :class="{'disabled': disabled}">
    <svg v-bind:width="size" v-bind:height="size" viewBox="0 0 20 20" style="fill:transparent;border-radius:2px">
      <rect x="0" y="0" width="20" height="20"  style="stroke-width: 3px;stroke:#333;fill:transparent;" />
      <line class="icon" v-show="showCross" x1="6" y1="6" x2="14" y2="14" style="animation: draw .1s linear forwards 0s;" />
      <line class="icon" v-show="showCross" x2="14" y2="6" x1="6" y1="14" style="animation: draw .1s linear forwards .1s;" />
      <path class="icon" v-show="showTick" d="M6 12 L8 14 L14 6" />
    </svg>
    <div class="label">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ui-checkbox',
  props: {
    value: {
      type: Boolean,
      required: true
    },
    size: {
      type: String,
      required: true
    },
    disabled: Boolean,
    type: String
  },
  computed: {
    showCross() {
      return this.type === 'cross' && this.value;
    },
    showTick() {
      return this.type === 'tick' && this.value;
    }
  },
  methods: {
    toggle() {
      if (!this.disabled) {
        this.$emit('input', !this.value);
      }
    }
  },
  mounted() {
    if (this.type !== 'cross' && this.type !== 'tick') {
      throw new Error(`The checkbox type has to be either 'cross' or 'tick', got ${this.type}!`);
    }
  }
};
</script>
<style lang="sass">
  .checkbox{
    display: flex;
    align-items:center;
    .label{
      margin-left: 5px;
      cursor: default;
    }
    .icon{
      stroke:#333;
      stroke-width:2px;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-dasharray: 25;
      stroke-dashoffset: 25;
      animation: draw .2s linear forwards;
    }
    &.disabled{
      cursor: not-allowed;
      opacity: .65;
    }
  }

  @keyframes draw {
    to {
      stroke-dashoffset: 0;
    }
  }
</style>
