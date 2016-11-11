<template lang="html">
  <div id="radiobuttonGroup">
    <h2>Radiobuttons</h2>
    <ui-radiobutton-group :radiobutton-group="radiobuttonGroup">
      <ui-radiobutton name="rb1">Radiobutton 1</ui-radiobutton>
      <ui-radiobutton name="rb3">Radiobutton 3</ui-radiobutton>
      <ui-radiobutton name="rb2">Radiobutton 2</ui-radiobutton>
    </ui-radiobutton-group>
    <p>Selected: <code>{{radiobuttonGroup.selectedName}}</code></p>
    <h4>Usage</h4>
    <pre class="highlight prettyprint">radiobuttonGroup = new ui.RadiobuttonGroup.RadiobuttonGroup('20px', 'rb1')
&lt;ui-radiobutton-group :radiobutton-group=&quot;radiobuttonGroup&quot;&gt;
    &lt;ui-radiobutton name=&quot;rb1&quot;&gt;Radiobutton 1&lt;/ui-radiobutton&gt;
    &lt;ui-radiobutton name=&quot;rb3&quot;&gt;Radiobutton 3&lt;/ui-radiobutton&gt;
    &lt;ui-radiobutton name=&quot;rb2&quot;&gt;Radiobutton 2&lt;/ui-radiobutton&gt;
&lt;/ui-radiobutton-group&gt;</pre>

    <p>The <code>radiobutton-group</code> component takes an <code>Object</code> of the Type
    <code>RadiobuttonGroup</code> as a parameter. The constructor requires the following paramters:</p>
    <doc-table :options="radiobuttonGroupOptions"></doc-table>

    <p>The <code>radiobutton</code> requires the following parameters:</p>
    <doc-table :options="radiobuttonOptions"></doc-table>
  </div>
</template>

<script>
import ui from 'src';
import DocTable from './doc-table.vue';

export default {
  data() {
    return {
      radiobuttonGroup: new ui.RadiobuttonGroup.RadiobuttonGroup('20px', 'rb1'),
      radiobuttonGroupOptions: [{
        name: 'radiobuttonSize',
        type: 'String',
        required: 'Yes',
        description: 'Size of the radiobuttons'
      }, {
        name: 'selectedName',
        type: 'String',
        required: 'No',
        description: 'Name of the selected radiobutton.'
      }],
      radiobuttonOptions: [{
        name: 'name',
        type: 'String',
        required: 'Yes',
        description: 'Name of the radiobutton, has to be unique per group.'
      }]
    };
  },
  components: {
    UiRadiobuttonGroup: ui.RadiobuttonGroup,
    UiRadiobutton: ui.Radiobutton,
    DocTable
  }
};
</script>
