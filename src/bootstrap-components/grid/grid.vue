<template lang="html">
  <table class="table table-hover">
    <thead class="thead-default">
      <tr>
        <th v-for="col in grid.columns" @click="cellHead_dbClick(col)">
          <div>
            <span>{{col.caption}}</span>
            <svg height="1.33rem" fill="#373a3c" viewBox="0 0 12 16" version="1.1" width="1rem">
              <path fill-rule="evenodd" d="M0 5l6 6 6-6z" v-show="col.sorting == 'desc'"></path>
              <path fill-rule="evenodd" d="M12 11L6 5l-6 6z" v-show="col.sorting == 'asc'"></path>
            </svg>
          </div>
        </th>
      </tr>
      <tr v-if="grid.allowSearch">
        <th v-for="col in grid.columns">
          <input type="text" class="form-control" v-model="col.search">
        <th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in sortedData" @click="selectedRow = row" :class="{'table-info': selectedRow == row && grid.allowSelect}">
        <td v-for="col in grid.columns" v-on:dblclick="cell_dbClick(col,row)">
          <span v-if="editingCol != col || editingRow != row || selectedRow != row">{{row[col.name]}}</span>
          <input v-if="editingCol == col && editingRow == row && selectedRow == row" v-model="row[col.name]"
            @keyup.enter="editingCol = null; editingRow = null"
            class="form-control"></input>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
class Column {
  constructor(name, caption, allowEdit, sorting) {
    this.name = name
    this.caption = caption
    this.allowEdit = allowEdit
    this.sorting = sorting
    this.search = ""
  }
}

class Grid {
  constructor(name, data, allowSelect, allowSearch) {
    this.name = name
    this.data = data
    this.columns = new Array()
    this.allowSelect = allowSelect
    this.allowSearch = allowSearch
  }

  addColumn(column) {
    this.columns.push(column)
    return this
  }
}

export default {
  uiClass: Grid,
  Column: Column,
  name: "ui-grid",
  data() {
    return {
      selectedRow: null,
      editingCol: null,
      editingRow: null
    }
  },
  props: {
    grid: Grid
  },
  methods: {
    cellHead_dbClick(item){
      if (!item.sorting) {
        item.sorting = "asc"
      } else if (item.sorting == "asc") {
        item.sorting = "desc"
      } else if (item.sorting == "desc") {
        item.sorting = "asc"
      }
    },
    cell_dbClick(col,row) {
      if (!col.allowEdit) return
      this.editingCol = col
      this.editingRow = row
    }
  },
  computed: {
    sortedData(){
      let data = this.grid.data
      for (let col of this.grid.columns) {
        if (col.search){
          data = data.filter(d => {
            let x = d[col.name]
            if (isNaN(x)){
              return x.toLowerCase().includes(col.search.toLowerCase())
            } else {
              return x == col.search
            }
          })
        }

        if (!col.sorting) continue
        data = data.sort((a,b) => {
          let x = a[col.name]
          let y = b[col.name]
          let asc = col.sorting == "asc"
          let desc = col.sorting == "desc"
          if (isNaN(x) && isNaN(y)){
            x = x.toLowerCase()
            y = y.toLowerCase()
          }
          if ((x < y && asc) || (x > y && desc)) {
            return -1
          } else if ((x > y && asc) || (x < y && desc)) {
            return 1
          }
          return 0
        })
      }
      return data
    }
  },
}
</script>

<style lang="sass">
  .table th{
    >div{
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    input{
      font-weight: normal;
    }
  }
  .hide{
    display: none;
  }
</style>
