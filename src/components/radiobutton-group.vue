<template>
  <div class="radiobuttons">
    <div @click="toggle(rb)" v-for="rb in radiobuttons" class="radiobutton">
      <svg width="20" height="20" style="fill:transparent">
        <circle cx="10" cy="10" r="9" width="20" height="20" style="stroke-width: 2px;stroke:#333;fill:transparent;" />
        <path class="icon" v-show="rb.name == selected" d="M6,10a4,4 0 1,0 8,0a4,4 0 1,0 -8,0"/>
      </svg>
      <div class="label">
        {{rb.text}}
      </div>
    </div>
  </div>
</template>

<script>
import {EventHub} from '../helpers/eventHub'
export default {
  name: "ui-radiobutton-group",
  props:{
    radiobuttons: Array,
    name: String,
    selected: String
  },
  methods:{
    toggle(rb){
      EventHub.$emit(`${this.name}_SelectedChanged`,rb.name)
    }
  }
}
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
