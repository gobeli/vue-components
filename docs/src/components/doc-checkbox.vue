<template lang="html">
  <div id="checkbox"><!-- Checkbox -->
    <h2>Checkbox</h2>

    <ui-checkbox :checkbox="checkbox1"></ui-checkbox>
    <ui-checkbox :checkbox="checkbox2"></ui-checkbox>
    <p>
      Checkbox1: <code>{{checkbox1.checked}}</code><br>
      Checkbox2: <code>{{checkbox2.checked}}</code>
    </p>
    <p>The <code>autocomplete</code> component takes an <code>Object</code> of the Type
    <code>Autocomplete</code> as a parameter. The constructor requires the following parameters:</p>
    <div class="table-container">
      <table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Desciption</th>
          </tr>
        </thead>
        <thead>
          <tr>
            <td>checked</td>
            <td>Boolean</td>
            <td>Checke state true = checked, false = unchecked</td>
          </tr>
          <tr>
            <td>text</td>
            <td>String</td>
            <td>Text which will be displayed and searched by the user.</td>
          </tr>
          <tr>
            <td>type</td>
            <td>String</td>
            <td>The type of the checkbox (either <code>tick</code> or <code>cross</code>)</td>
          </tr>
        </thead>
      </table>
    </div>
  </div>
</template>

<script>
import ui from 'src';
export default {
  data() {
    return {
      checkbox1: new ui.Checkbox.Checkbox(true, 'Checkbox 1', 'cross', '20px'),
      checkbox2: new ui.Checkbox.Checkbox(false, 'Checkbox 2', 'tick', '20px')
    };
  },
  components: {
    UiCheckbox: ui.Checkbox
  }
};
</script>
