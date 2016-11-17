<template lang="html">
  <div id="checkedDropdown">
    <h2>Checked Dropdown</h2>

    <ui-checked-dropdown style="width: 200px" :displayed-items="3" v-model="value" placeholder="Please select">
      <ui-checked-dropdown-item value="1">One</ui-checked-dropdown-item>
      <ui-checked-dropdown-item value="2">Two</ui-checked-dropdown-item>
      <ui-checked-dropdown-item value="3">Three</ui-checked-dropdown-item>
      <ui-checked-dropdown-item value="4">Four</ui-checked-dropdown-item>
      <ui-checked-dropdown-item value="5">Five</ui-checked-dropdown-item>
    </ui-checked-dropdown>
    <p>
      Selected: <code>{{value}}</code>
    </p>
    <h4>Usage</h4>

  </div>
</template>

<script>
import ui from 'src';

export default {
  name: 'doc-checked-dropdown',
  data() {
    return {
      value: []
    };
  },
  components: {
    UiCheckedDropdown: ui.CheckedDropdown,
    UiCheckedDropdownItem: ui.CheckedDropdownItem
  }
};
</script>
