<template>
  <div class="checkbox" @click="toggle">
    <svg width="20" height="20" style="fill:transparent;border-radius:2px">
      <rect x="0" y="0" width="20" height="20" style="stroke-width: 3px;stroke:#333;fill:transparent;" />
      <line class="icon" v-show="showCross" x1="6" y1="6" x2="14" y2="14" style="animation: draw .1s linear forwards 0s;" />
      <line class="icon" v-show="showCross" x2="14" y2="6" x1="6" y1="14" style="animation: draw .1s linear forwards .1s;" />
      <path class="icon" v-show="showTick" d="M6 12 L8 14 L14 6" />
    </svg>
    <div class="label">
      {{text}}
    </div>
  </div>
</template>

<script>
import {EventHub} from '../helpers/eventHub'
export default {
  name: "ui-checkbox",
  props:{
    name: String,
    checked: Boolean,
    text: String,
    type: String
  },
  computed: {
      showCross(){
        return this.type == "cross" && this.checked
      },
      showTick(){
        return this.type == "tick" && this.checked
      }
  },
  methods: {
    toggle(){
      EventHub.$emit(`${this.name}_CheckedChanged`,!this.checked)
    }
  },
  mounted(){
    if (this.type != "cross" && this.type != "tick") {
      console.error("The checkbox type has to be either \"cross\" or \"tick\"!")
    }
  }
}
</script>
<style lang="sass">
  .checkbox{
    display: flex;
    align-items:center;
    margin-bottom: 5px;
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
  }

  @keyframes draw {
    to {
      stroke-dashoffset: 0;
    }
  }
</style>
