<template lang="html">
  <div id="radiobuttonGroup">
    <h2>Radiobuttons</h2>
    <ui-radiobutton-group :radiobutton-group="radiobuttonGroup">
      <ui-radiobutton name="rb1" size="20px">Radiobutton 1</ui-radiobutton>
      <ui-radiobutton name="rb3" size="20px">Radiobutton 3</ui-radiobutton>
      <ui-radiobutton name="rb2" size="20px">Radiobutton 2</ui-radiobutton>
    </ui-radiobutton-group>
    <pre class="highlight">Selected:
    {{radiobuttonGroup.selectedName}}</pre>
  </div>
</template>

<script>
import ui from 'src';

export default {
  data() {
    return {
      radiobuttonGroup: new ui.RadiobuttonGroup.RadiobuttonGroup('radiobuttonGroup', null)
    };
  },
  components: {
    UiRadiobuttonGroup: ui.RadiobuttonGroup,
    UiRadiobutton: ui.Radiobutton
  }
};
</script>
