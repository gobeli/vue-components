<template lang="html">
  <li class="item color-light"
    v-bind:class="{ focused: autocompleteItem == $parent.autocomplete.focused }"
    @click="select()" v-html="highlightedText"
    v-show="$parent.filteredItems.indexOf(autocompleteItem) >= 0">
  </li>
</template>

<script>
class AutocompleteItem {
  constructor(value,text) {
    this.value = value
    this.text = text
  }
}

export default {
  uiClass: AutocompleteItem,
  name: "autocomplete-item",
  props: {
    value: String,
    text: String
  },
  computed: {
    highlightedText() {
      const re = new RegExp((this.$parent.search),"i")
      const matches = this.text.match(re)
      if (matches == null) return this.text
      return this.text.replace(re,`<mark>${matches[0]}</mark>`).replace(" ", "&nbsp;")
    },
    autocompleteItem() {
      return new AutocompleteItem(this.value,this.text)
    }
  },
  methods: {
    select(){
      this.$parent.select(this.autocompleteItem)
    }
  }
}
</script>
