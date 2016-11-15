<template lang="html">
  <div id="checkbox"><!-- Checkbox -->
    <h2>Checkbox</h2>

    <ui-checkbox :checkbox="checkbox1">Checkbox 1</ui-checkbox>
    <ui-checkbox :checkbox="checkbox2">Checkbox 2</ui-checkbox>
    <p>
      Checkbox1: <code>{{checkbox1.checked}}</code><br>
      Checkbox2: <code>{{checkbox2.checked}}</code>
    </p>

    <h4>Usage</h4>
    <h5>data</h5>
    <pre class="highlight prettyprint">checkbox: new ui.Checkbox.Checkbox(false, 'Checkbox 2', 'tick', '20px');</pre>
    <h5>markup</h5>
    <pre class="highlight prettyprint">&lt;ui-checkbox :checkbox=&quot;checkbox&quot;&gt;&lt;/ui-checkbox&gt;</pre>
    <p>The <code>autocomplete</code> component takes an <code>Object</code> of the Type
    <code>Autocomplete</code> as a parameter. The constructor requires the following parameters:</p>
    <doc-table :options="options"></doc-table>
  </div>
</template>

<script>
import ui from 'src';
import DocTable from './doc-table.vue';

export default {
  data() {
    return {
      checkbox1: new ui.Checkbox.Checkbox(true, 'cross', '20px'),
      checkbox2: new ui.Checkbox.Checkbox(false, 'tick', '20px'),
      options: [{
        name: 'checked',
        type: 'Boolean',
        required: 'Yes',
        description: 'Checke state true = checked, false = unchecked'
      }, {
        name: 'type',
        type: 'String',
        required: 'Yes',
        description: 'The type of the checkbox (either <code>tick</code> or <code>cross</code>).'
      }, {
        name: 'size',
        type: 'String',
        required: 'Yes',
        description: 'Size of the checkbox.'
      }]
    };
  },
  components: {
    UiCheckbox: ui.Checkbox,
    DocTable
  }
};
</script>
