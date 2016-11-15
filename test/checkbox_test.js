const Vue = require('vue');
const checkbox = require('../src/checkbox/checkbox.vue');
const assert = require('assert');

const vm = new Vue({
  data() {
    return {
      checkbox: new checkbox.Checkbox(false, 'tick', '20px')
    };
  },
  template: `
  <div>
    <ui-checkbox :checkbox="checkbox">Test</ui-checkbox>
  </div>`,
  components: {
    UiCheckbox: checkbox
  }
}).$mount();

describe('checkbox', () => {
  it('should render correctly', () => {
    assert.equal(vm.$el.querySelector('svg').getAttribute('height'), '20px', 'Height is not correct');
    assert.equal(vm.$el.querySelector('.label').innerHTML, 'Test', 'Label is not displayed correctly');
  });

  it('should toggle on click', () => {
    vm.$children[0].toggle();
    assert(vm.checkbox.checked, 'Checkbox is not checked on toggle');
    assert(vm.$children[0].showTick && !vm.$children[0].showCross, 'Not the right type is displayed');
  });
});
