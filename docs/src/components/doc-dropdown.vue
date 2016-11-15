<template lang="html">
  <div id="dropdown">
    <h2>Dropdown</h2>
    <ui-dropdown style="width: 300px" :dropdown="dropdown" placeholder="Please select">
      <ui-dropdown-item value="1" text="First"></ui-dropdown-item>
      <ui-dropdown-item value="2" text="Second"></ui-dropdown-item>
      <ui-dropdown-item value="3" text="Third"></ui-dropdown-item>
      <ui-dropdown-item value="4" text="Fourth"></ui-dropdown-item>
    </ui-dropdown>
    <p>
      Selected: <code>{{dropdown.selected}}</code>
    </p>
    <h4>Usage</h4>
    <h5>data</h5>
    <pre class="highlight prettyprint">dropdown: new ui.Dropdown.Dropdown('Please select', 3)</pre>
    <h5>markup</h5>
    <pre class="highlight prettyprint">&lt;ui-dropdown :dropdown=&quot;dropdown&quot; placeholder=&quot;Please select&quot;&gt;
  &lt;ui-dropdown-item value=&quot;1&quot; text=&quot;First&quot;&gt;&lt;/ui-dropdown-item&gt;
  &lt;ui-dropdown-item value=&quot;2&quot; text=&quot;Second&quot;&gt;&lt;/ui-dropdown-item&gt;
  &lt;ui-dropdown-item value=&quot;3&quot; text=&quot;Third&quot;&gt;&lt;/ui-dropdown-item&gt;
  &lt;ui-dropdown-item value=&quot;4&quot; text=&quot;Fourth&quot;&gt;&lt;/ui-dropdown-item&gt;
&lt;/ui-dropdown&gt;</pre>
    <p>The <code>dropdown</code> component takes an <code>Object</code> of the Type
    <code>Dropdown</code> as a parameter. The constructor requires the following paramters:</p>
    <doc-table :options="dropdownOptions"></doc-table>
    <p>You can also use the <code>placeholder</code> prop which is displayed when nothing is selected</p>
    <p>The <code>dropdown-item</code> requires the following parameters:</p>
    <doc-table :options="dropdownItemOptions"></doc-table>
  </div>
</template>

<script>
import ui from 'src';
import DocTable from './doc-table.vue';

export default {
  data() {
    return {
      dropdown: new ui.Dropdown.Dropdown(3),
      dropdownOptions: [{
        name: 'displayedItems',
        type: 'Number',
        required: 'No (Default = 3)',
        description: 'Number of displayed dropdown items'
      }, {
        name: 'selected',
        type: 'DropdownItem',
        required: 'No',
        description: 'Selected item.'
      }],
      dropdownItemOptions: [{
        name: 'value',
        type: 'Object',
        required: 'Yes',
        description: 'Value of the item i.e. an Id.'
      }, {
        name: 'text',
        type: 'String',
        required: 'No',
        description: 'Text which will be displayed and searched by the user.'
      }]
    };
  },
  components: {
    UiDropdown: ui.Dropdown,
    UiDropdownItem: ui.DropdownItem,
    DocTable
  }
};
</script>
