<template>
  <div class="radiobuttons">
    <slot></slot>
  </div>
</template>

<script>
/**
  * @desc Describes props of the RadiobuttonGroup
*/
class RadiobuttonGroup {
  /**
    * @param String name - Name of the control
    * @param String selected - name of the selected radiobutton
  */
  constructor(name, selectedName) {
    this.name = name;
    this.selectedName = selectedName;
  }
}

export default {
  RadiobuttonGroup,
  name: 'ui-radiobutton-group',
  props: {
    radiobuttonGroup: RadiobuttonGroup
  },
  data(){
    return {
      radiobuttons: []
    }
  },
  mounted(){
    for(let i in this.$children){
      this.radiobuttons.push(this.$children[i].name);
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
