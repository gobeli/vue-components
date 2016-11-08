<template lang="html">
  <div class="btn-group">
    <input type="text" name="search" class="form-control"
      v-model="search"
      @keyup.up.prevent="search_keyup(false)"
      @keyup.down.prevent="search_keyup(true)"
      @keyup.enter="search_enter()" />
    <div class="dropdown-menu" v-show="search.length > 0 && !autocomplete.selected"  v-bind:style="{maxHeight: this.dropdownHeight}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
/**
  * @desc Describes props of the autocomplete
*/
class Autocomplete {
  /**
    * @param Number displayedItems - Number of items shown when the dropdown is opened
    * @param String selected - Default text / selected Item
  */
  constructor(displayedItems, selected) {
    this.displayedItems = displayedItems
    this.selected = selected
    this.focused = selected
  }
}

export default {
  uiClass: Autocomplete,
  name: 'autocomplete',
  data(){
    return {
      search: '',
      autocompleteItems: []
    }
  },
  props: {
    autocomplete: Autocomplete
  },
  computed: {
    filteredItems(){
      return this.autocompleteItems.filter(i => i.text.toLowerCase().includes(this.search.toLowerCase()))
    },
    dropdownHeight(){
      const i = this.autocomplete.displayedItems
      return `calc(1.5rem*${i} + 1rem + 6px*${i})`
    }
  },
  mounted () {
    this.autocompleteItems = this.$children.map(c => c.autocompleteItem)

    this.$on('selected-changed', selected => {
      this.select(selected)
    })
  },
  methods: {
    search_keyup(next){
      let item = this.autocomplete.focused
      let i = 0
      if (item != null && this.filteredItems != null) {
        i = this.filteredItems.indexOf(item)
        i = next ? i+1 : i-1
      }
      let newItem = this.filteredItems[i]
      if (newItem !== undefined){
        this.autocomplete.focused = newItem
      }
    },
    search_enter(){
      if (!this.autocomplete.focused) return
      this.select(this.autocomplete.focused)
    },
    select(item){
      this.autocomplete.selected = item
      if (item) this.search = item.text
    }
  },
  watch: {
    search(){
      this.autocomplete.focused = null
      const filtered = this.autocompleteItems.filter(i => i.text == this.search)
      if (filtered.length > 0) this.select(filtered[0])
      else this.select(null)
    }
  }
}
</script>

<style lang="sass">
  .dropdown-menu{
    display: block;
    overflow-y: auto;
    width: 100%;
  }
  mark{
    padding: 0;
  }
</style>
