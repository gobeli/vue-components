<template>
  <div class="checkbox" @click="toggle">
    <svg v-bind:width="checkbox.size" v-bind:height="checkbox.size" viewBox="0 0 20 20" style="fill:transparent;border-radius:2px">
      <rect x="0" y="0" width="20" height="20"  style="stroke-width: 3px;stroke:#333;fill:transparent;" />
      <line class="icon" v-show="showCross" x1="6" y1="6" x2="14" y2="14" style="animation: draw .1s linear forwards 0s;" />
      <line class="icon" v-show="showCross" x2="14" y2="6" x1="6" y1="14" style="animation: draw .1s linear forwards .1s;" />
      <path class="icon" v-show="showTick" d="M6 12 L8 14 L14 6" />
    </svg>
    <div class="label">
      {{checkbox.text}}
    </div>
  </div>
</template>

<script>
/**
  * @desc Describes props of the checkbox
*/
class Checkbox {
  /**
    * @param String name - Name of the control
    * @param Boolean checked - Initial check state of the control
    * @param string text - Text which will be displayed
    * @param string type - Type of the checkbox ('cross' or 'tick')
  */
  constructor(name,checked,text,type,size) {
    this.name = name;
    this.checked = checked;
    this.text = text;
    this.type = type;
    this.size = size;
  }
}

export default {
  Checkbox,
  name: 'ui-checkbox',
  props:{
    checkbox: Checkbox
  },
  computed: {
      showCross(){
        return this.checkbox.type == 'cross' && this.checkbox.checked;
      },
      showTick(){
        return this.checkbox.type == 'tick' && this.checkbox.checked;
      }
  },
  methods: {
    toggle(){
      this.checkbox.checked = !this.checkbox.checked;
    }
  },
  mounted(){
    if (this.checkbox.type != 'cross' && this.checkbox.type != 'tick') {
      console.error('The checkbox type has to be either \'cross\' or \'tick\'!');
    }
  }
}
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
  }

  @keyframes draw {
    to {
      stroke-dashoffset: 0;
    }
  }
</style>
