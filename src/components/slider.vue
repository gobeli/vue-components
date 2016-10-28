<template>
  <div class="slider">
    <div class="buttons">
      <svg class="back" @click="previous" width="30" height="50">
          <path stroke="#333" stroke-width="3px" fill="transparent" d="M26 46 L4 25 L26 4"/>
      </svg>
      <svg class="next" @click="next" width="30" height="50">
          <path stroke="#333" stroke-width="3px" fill="transparent" d="M4 4 L26 25 L4 46"/>
      </svg>
    </div>
    <div id="inner-slider" v-bind:style="{ marginLeft: '-' + current*100 + '%',width: childCount*100 + '%' }">
      <slot></slot>
    </div>
  </div>
  <button v-if="current >= childCount - 1" type="button" name="button">Finish</button>
</template>

<script>
export default {
  name: "ui-slider",
  data() {
    return {
      childCount: 0,
      current: 0
    }
  },
  props:{
    items: Array
  },
  methods: {
    next() {
      if (this.current < this.childCount - 1) this.current++
      else this.current = 0
    },
    previous(){
      if (this.current > 0) this.current--
      else this.current = this.childCount - 1
    }
  },
  mounted(){
    this.childCount = document.getElementById("inner-slider").childElementCount
  }
}
</script>
<style lang="sass">
.slider{
  width: 100%;
  overflow: hidden;
  position: relative;
  #inner-slider{
    display: flex;
    flex-wrap: no-wrap;
    transition: margin .3s ease;
    >div{
      flex: 1;
    }
  }
}
.buttons{
  display: flex;
  position: absolute;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}
</style>
