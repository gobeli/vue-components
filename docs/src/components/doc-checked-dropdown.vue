<template lang="html">
  <div id="checkedDropdown">
    <h2>Checked Dropdown</h2>

    <ui-checked-dropdown style="width: 300px" :checked-dropdown="checkedDropdown" placeholder="Please select">
      <ui-checked-dropdown-item value="1" text="One"></ui-checked-dropdown-item>
      <ui-checked-dropdown-item value="2" text="Two"></ui-checked-dropdown-item>
      <ui-checked-dropdown-item value="3" text="Three"></ui-checked-dropdown-item>
      <ui-checked-dropdown-item value="4" text="Four"></ui-checked-dropdown-item>
    </ui-checked-dropdown>
    <p>
      Selected: <code>{{checkedDropdown.selectedItems}}</code>
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
      checkedDropdown: new ui.CheckedDropdown.CheckedDropdown(3)
    };
  },
  components: {
    UiCheckedDropdown: ui.CheckedDropdown,
    UiCheckedDropdownItem: ui.CheckedDropdownItem
  }
};
</script>
