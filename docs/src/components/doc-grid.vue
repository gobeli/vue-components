<template lang="html">
  <div id="grid">
    <h2>Grid</h2>
    <ui-grid :grid="grid"></ui-grid>
  </div>
</template>

<script>
import ui from 'src';

const gridCountries = [{ id: 1, country: 'Poland' }, { id: 2, country: 'Czech Republic' }, { id: 3, country: 'Argentina' }, { id: 4, country: 'Indonesia' }, { id: 5, country: 'Morocco' }, { id: 6, country: 'Thailand' }, { id: 7, country: 'China' }, { id: 8, country: 'Iran' }, { id: 9, country: 'Japan' }, { id: 10, country: 'Indonesia' }, { id: 11, country: 'South Africa' }, { id: 12, country: 'Vietnam' }, { id: 13, country: 'South Korea' }, { id: 14, country: 'Portugal' }, { id: 15, country: 'China' }, { id: 16, country: 'Philippines' }, { id: 17, country: 'Poland' }, { id: 18, country: 'Czech Republic' }, { id: 19, country: 'Brazil' }, { id: 20, country: 'Argentina' }];
const grid = new ui.Grid.Grid(gridCountries, false, true);
grid.addColumn('id', c => c.setCaption('Id'))
    .addColumn('country', c => c.setCaption('Country').allow(true, true));

export default {
  data() {
    return {
      grid,
      gridCountries
    };
  },
  components: {
    UiGrid: ui.Grid
  }
};
</script>
