<template>
  <div class="autocomplete">
    <input type="text" name="search" v-model="search" class="search" v-bind:style="{width: width}" />
    <ul class="suggestions" v-show="search.length > 0 && !selected"  v-bind:style="{width: width}">
      <li class="suggestion" v-for="item in filteredItems" @click="select(item)" v-html="highlight(item)"></li>
    </ul>
  </div>
  </template>

<script>
import {EventHub} from '../helpers/eventHub'

export default {
  name: "ui-autocomplete",
  data () {
    return {
      search: ""
    }
  },
  computed:{
    filteredItems(){
      return this.items.filter(i => i.toLowerCase().includes(this.search.toLowerCase()))
    }
  },
  props:{
    name: String,
    items: Array,
    width: String,
    selected: String
  },
  methods: {
    select(item){
      this.search = item
    },
    highlight(item){
      const re = new RegExp((this.search),"i")
      const matches = item.match(re)
      return item.replace(re,`<mark>${matches[0]}</mark>`).replace(" ", "&nbsp;")
    }
  },
  watch: {
    search(oldVal){
      const s = this.items.filter(i => i == this.search).length > 0 ? this.items[0] : null
      EventHub.$emit(`${this.name}_SelectedChanged`, s)
    }
  }
}
</script>
<style lang="sass">
.search,.suggestion{
  padding:.5rem;
  line-height: 1;
  font-size: 1rem;
  height: 2.3rem;
  box-sizing: border-box;
  border: 1px solid rgba(0,0,0,0.1);
}

.search:focus{
  outline: none;
}

.suggestions{
  list-style-type: none;
  margin: 0;
  padding: 0;
  max-height: 6.9rem; //Items you want to show * 2.3rem
  overflow: hidden;
  position: absolute;
  background-color: #FFF;
  .suggestion{
    width: 100%;
    border-top: none;
    cursor: pointer;
    color: #c0c0c0;
    display: flex;
    align-items: center;
    mark{
      background-color: transparent;
      color: #000;
    }
    &:hover{
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
}
</style>
