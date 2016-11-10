import Vue from 'vue';
import { mixin as clickaway } from 'vue-clickaway';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';
import doc from './components';

new Vue({
  el: '#app',
  template: '',
  mixins: [clickaway],
  components: {
    DocAutocomplete: doc.Autocomplete,
    DocCheckbox: doc.Checkbox,
    DocRadiobuttonGroup: doc.RadiobuttonGroup,
    DocDropdown: doc.Dropdown,
    DocCheckedDropdown: doc.CheckedDropdown,
    DocGrid: doc.Grid
  },
  data() {
    return {
      navOpen: false
    };
  },
  methods: {
    toggleNav(open) {
      if (open || this.navOpen) this.navOpen = !this.navOpen;
    }
  }
});
