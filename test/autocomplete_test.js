const Vue = require('vue')
const autocomplete = require('../src/bootstrap-components/autocomplete/autocomplete.vue')
const autocompleteItem = require('../src/bootstrap-components/autocomplete/autocomplete-item.vue')
const assert = require('assert')

console.log('Test autocomplete and autocomplete-item')

let autocompleteItems = []
for (var i = 0; i < 100; i++) {
  autocompleteItems.push(`<ui-autocomplete-item value="${i}" text="Test${i}"></ui-autocomplete-item>`)
}
var vm = new Vue({
  data() {
    return {
      //3  = number of displayed Items
      autocomplete: new autocomplete.uiClass(3)
    }
  },
  template: `
  <div>
    <ui-autocomplete :autocomplete="autocomplete">
      ${autocompleteItems.join('')}
    </ui-autocomplete>
  </div>`,
  components: {
    'ui-autocomplete': autocomplete,
    'ui-autocomplete-item': autocompleteItem
  }
}).$mount()

describe('Autocomplete', () => {
  it('should render correctly', () => {
    // Assert that the max-height is set correctly (calc(1.5rem*3 + 1rem + 6px*3))
    assert.equal(vm.$el.querySelector('div.dropdown-menu').style.maxHeight, 'calc(5.5rem + 18px)', 'max-height is not correctly set')

    //Select element and assert that the dropdown-menu closes
    vm.$data.autocomplete.selected = new autocompleteItem.uiClass(1,'Test1')
    assert.equal(vm.$el.querySelector('div.dropdown-menu').style.display,'none', 'dropdown-menu is not closed')
  })

  it('should filter according to the search input', () => {
    const SEARCHTERM = '89'
    vm.$children[0].$data.search = SEARCHTERM
    let filteredItems = vm.$children[0].filteredItems
    assert(filteredItems.length == 1, 'filteredItems count is not correct')
    assert.equal(filteredItems[0].text, `Test${SEARCHTERM}`, 'items are not filtered correctly')
  })
})

describe('AutocompleteItem', () => {
  it('should render correctly', () => {
    vm.$children[0].$data.search = ''
    assert(vm.$children[0].$children[0].highlightedText.indexOf('<mark></mark>') !== -1,
      'Marking is not correct on empty search')
    
    const SEARCHTERM = 'Te'
    vm.$children[0].$data.search = SEARCHTERM
    assert(vm.$children[0].$children[0].highlightedText.indexOf(`<mark>${SEARCHTERM}</mark>`) !== -1,
      'Marking is not correct on search')
  })
})
