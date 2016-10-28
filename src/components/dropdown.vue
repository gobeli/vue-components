<template>
  <div class="dropdown" @click="toggle"  v-bind:class="{ 'closed': isClosed }">
    <div class="title">
      {{selectedText}}
      <svg width="10" height="10"  v-bind:class="{ 'rotate': isClosed }" style="fill:transparent;border-radius:2px">
        <polygon fill="#333" points="5,0 10,8 0,8" />
      </svg>
    </div>
    <ul>
      <li @click="select(item)" v-for="item in items" v-bind:class="{ 'selected': item.selected }">
        {{item.text}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ui-dropdown",
  data() {
    return {
      isClosed: true,
      selectedText: "Please select"
    }
  },
  props:{
    items: Array
  },
  methods: {
    toggle() {
      this.isClosed = !this.isClosed;
    },
    select(item){
      for (var i = 0; i < this.items.length; i++) {
        this.items[i].selected = false;
      }
      item.selected = true;
      this.selectedText = item.text;
    }
  }
}
</script>
<style lang="sass">
  .dropdown{
    cursor: pointer;
    width: 200px;
    position: relative;
    ul{
      overflow-y: auto;
      transition: max-height 0.25s ease-in;
      max-height: 6.9rem;
      padding: 0;
      margin: 0;
      list-style-type: none;
      position: absolute;
      width: 100%;
    }
    li,.title{
      box-sizing: border-box;
      height: 2.3rem;
      padding: 0 .5rem;
      display: flex;
      align-items: center;
      border: 1px solid rgba(0,0,0,0.1);
      border-top: 0;
      background-color: #FFF;
      &.selected,&:hover{
        background-color: rgba(0,0,0,0.1);
      }
    }
    .title{
      border-top: 1px solid rgba(0,0,0,0.1);
      display: flex;
      align-items: center;
      justify-content: space-between;
      svg{
        transition: transform .25s ease;
        &.rotate{
          transform: rotate(180deg);
        }
      }
    }
    &.closed{
      max-height: 40px;
      ul{
        max-height: 0;
      }
    }
  }
</style>
