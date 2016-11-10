<template lang="html">
  <div id="checkedDropdown">
    <h2>Checked Dropdown</h2>
    <ui-checked-dropdown style="width: 300px" :checked-dropdown="checkedDropdown" placeholder="Please select">
      <ui-checked-dropdown-item value="cdi1" text="One"></ui-checked-dropdown-item>
      <ui-checked-dropdown-item value="cdi2" text="Two"></ui-checked-dropdown-item>
      <ui-checked-dropdown-item value="cdi3" text="Three"></ui-checked-dropdown-item>
      <ui-checked-dropdown-item value="cdi4" text="Four"></ui-checked-dropdown-item>
      <ui-checked-dropdown-item value="cdi5" text="Five"></ui-checked-dropdown-item>
      <ui-checked-dropdown-item value="cdi6" text="Six"></ui-checked-dropdown-item>
      <ui-checked-dropdown-item value="cdi7" text="Seven"></ui-checked-dropdown-item>
      <ui-checked-dropdown-item value="cdi8" text="Eight"></ui-checked-dropdown-item>
    </ui-checked-dropdown>
    <pre class="highlight">Selected items:
    {{checkedDropdown.selectedItems}}</pre>
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
