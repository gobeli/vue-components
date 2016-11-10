<template lang="html">
  <div id="dropdown">
    <h2>Dropdown</h2>
    <ui-dropdown style="width: 300px" :dropdown="dropdown" placeholder="Please select">
      <ui-dropdown-item value="DropdownItem1" text="First"></ui-dropdown-item>
      <ui-dropdown-item value="DropdownItem2" text="Second"></ui-dropdown-item>
      <ui-dropdown-item value="DropdownItem3" text="Third"></ui-dropdown-item>
      <ui-dropdown-item value="DropdownItem4" text="Fourth"></ui-dropdown-item>
    </ui-dropdown>
    <pre class="highlight">Selected:
    {{dropdown.selected}}</pre>
  </div>
</template>

<script>
import ui from 'src';
export default {
  data() {
    return {
      dropdown: new ui.Dropdown.Dropdown('Please select', 3)
    };
  },
  components: {
    UiDropdown: ui.Dropdown,
    UiDropdownItem: ui.DropdownItem
  }
};
</script>
