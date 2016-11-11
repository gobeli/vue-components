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
    * @param String selected - name of the selected radiobutton
  */
  constructor(radiobuttonSize, selectedName = '') {
    this.radiobuttonSize = radiobuttonSize;
    this.selectedName = selectedName;
  }
}

export default {
  RadiobuttonGroup,
  name: 'ui-radiobutton-group',
  props: {
    radiobuttonGroup: RadiobuttonGroup
  },
  data() {
    return {
      radiobuttons: []
    };
  },
  mounted() {
    this.radiobuttons = this.$children.map(c => c.name);
  }
};
</script>
