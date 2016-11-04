<template lang="html">
  <table class="table">
    <thead>
      <th v-for="col in grid.columns" @click="sortBy = col.name">{{col.caption}}</th>
    </thead>
    <tbody>
      <tr v-for="row in sortedData">
        <td v-for="col in grid.columns">
          {{row[col.name]}}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
class Column {
  constructor(name,caption) {
    this.name = name
    this.caption = caption
  }
}

class Grid {
  constructor(name, data) {
    this.name = name
    this.data = data
    this.columns = new Array()
  }

  addColumn(column) {
    this.columns.push(column)
    return this
  }
}

export default {
  uiClass: Grid,
  Column: Column,
  data () {
    return {
      sortBy: ""
    }
  },
  props: {
    grid: Grid
  },
  computed: {
    sortedData(){
      if (this.sortBy){
        return this.grid.data.sort((a,b) => {
          var x = a[this.sortBy]
          var y = b[this.sortBy]
          if (isNaN(x) || isNaN(y)){
            x = x.toLowerCase()
            y = y.toLowerCase()
          }
          if (x < y) return -1
          if (x > y) return 1
          return 0
        })
      } else {
        return this.grid.data
      }
    }
  },
}
</script>

<style lang="sass">
</style>
