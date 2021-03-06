<template lang="html">
  <table class="table table-hover">
    <thead class="thead-default">
      <tr>
        <th v-for="col in grid.columns" @click="col.sorting = cellHead_dbClick(col)">
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
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in sortedData" @click="selectedRow = row" :class="{'table-info': selectedRow == row && grid.allowSelect}">
        <td v-for="col in grid.columns" v-on:dblclick="cell_dbClick(col,row)">
          <span  v-if="editingCol != col || editingRow != row || selectedRow != row">{{row[col.key]}}</span>
          <input v-if="editingCol == col && editingRow == row && selectedRow == row" v-model="row[col.key]"
            @keyup.enter="editingCol = null; editingRow = null"
            class="form-control"></input>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
class Column {
  constructor(key, caption = '', allowEdit = false, allowSorting = true, sorting = '') {
    this.key = key;
    // if there is a caption else use the key as caption
    this.caption = caption.length > 0 ? caption : key;
    this.allowEdit = allowEdit;
    this.allowSorting = allowSorting;
    this.sorting = sorting;
    this.search = '';
  }


  /**
    * @desc Set the caption of the Column
    * @param {String} caption
  */
  setCaption(caption) {
    this.caption = caption;
    return this;
  }

  /**
    * @desc Allow/disallow editing/sorting
    * @param {Boolean} allowEdit
    * @param {Boolean} allowSorting
    *
  */
  allow(allowEdit, allowSorting = true) {
    this.allowEdit = allowEdit;
    this.allowSorting = allowSorting;
    return this;
  }

  /**
    * @desc Sort this column
    * @param {String} sorting - Either 'asc', 'desc' or null/''
  */
  sort(sorting) {
    this.sorting = sorting;
    return this;
  }
}

class Grid {
  constructor(data, allowSelect, allowSearch) {
    this.data = data;
    this.columns = [];
    this.allowSelect = allowSelect;
    this.allowSearch = allowSearch;
  }

  addColumn(key, callBack) {
    var c = new Column(key, '', false, '');
    this.columns.push(c);
    callBack(c);
    return this;
  }
}

export default {
  Grid,
  name: 'ui-grid',
  data() {
    return {
      selectedRow: null,
      editingCol: null,
      editingRow: null
    };
  },
  props: {
    grid: Grid
  },
  methods: {
    cellHead_dbClick(col) {
      if (!col.sorting) {
        return 'asc';
      } else if (col.sorting === 'asc') {
        return 'desc';
      } else if (col.sorting === 'desc') {
        return 'asc';
      }
      return '';
    },
    cell_dbClick(col, row) {
      if (!col.allowEdit) return;
      this.editingCol = col;
      this.editingRow = row;
    }
  },
  computed: {
    sortedData() {
      let data = this.grid.data;
      for (let i = 0; i < this.grid.columns.length; i += 1) {
        const col = this.grid.columns[i];
        if (col.search) {
          data = data.filter(d => {
            const x = d[col.key];
            if (isNaN(x)) {
              return x.toLowerCase().includes(col.search.toLowerCase());
            }
            return x === col.search;
          });
        }

        if (col.sorting) {
          data = data.sort((a, b) => {
            let x = a[col.key];
            let y = b[col.key];
            const asc = col.sorting === 'asc';
            const desc = col.sorting === 'desc';
            if (isNaN(x) && isNaN(y)) {
              x = x.toLowerCase();
              y = y.toLowerCase();
            }
            if ((x < y && asc) || (x > y && desc)) {
              return -1;
            } else if ((x > y && asc) || (x < y && desc)) {
              return 1;
            }
            return 0;
          });
        }
      }
      return data;
    }
  }
};
</script>

<style lang="sass">
  .table{
    th{
      >div{
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      input{
        font-weight: normal;
      }
    }
    td>input {
      padding: .25rem;
    }
  }
  .hide{
    display: none;
  }
</style>
