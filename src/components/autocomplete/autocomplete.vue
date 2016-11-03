<template lang="html">
  <div class="autocomplete">
    <input type="text" name="search" class="item search"
      v-model="search"
      @keyup.up.prevent="search_keyup(false)"
      @keyup.down.prevent="search_keyup(true)"
      @keyup.enter="search_enter()"
      v-bind:style="{width: autocomplete.width}" />
    <ul class="items" v-show="search.length > 0 && !autocomplete.selected"  v-bind:style="{width: autocomplete.width}">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
require('../shared-styles.scss')
/**
  * @desc Describes props of the autocomplete
*/
class Autocomplete {
  /**
    * @param String name - Name of the control
    * @param Array items - Items which will act as suggestions
    * @param string width - Width of the control
  */
  constructor(name, width, selected) {
    this.name = name
    this.width = width
    this.selected = selected
    this.focused = selected
  }
}

export default {
  uiClass: Autocomplete,
  name: "autocomplete",
  data () {
    return {
      search: "",
      autocompleteItems: []
    }
  },
  props: {
    autocomplete: Autocomplete
  },
  computed: {
    filteredItems(){
      return this.autocompleteItems.filter(i => i.text.toLowerCase().includes(this.search.toLowerCase()))
    }
  },
  mounted () {
    for (let c in this.$children) {
      this.autocompleteItems.push(this.$children[c].autocompleteItem)
    }
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
  .search{
    border-top:1px solid #EEE;
    &:focus{
      outline: none;
    }
  }
</style>
