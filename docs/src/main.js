import Vue from 'vue';
import { mixin as clickaway } from 'vue-clickaway';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';
import doc from './components';
import ui from '../../src';

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
    DocGrid: doc.Grid,
    'new-dd': ui.NewDropdown,
    'new-dd-item': ui.NewDropdownItem,
    'new-checkbox': ui.NewCheckbox,
    'new-radiobutton-group': ui.NewRadiobuttonGroup,
    'new-radiobuttton': ui.NewRadiobutton
  },
  data() {
    return {
      navOpen: false,
      dropdownValue: '',
      radioButtonValue: '',
      checkboxValue: true
    };
  },
  methods: {
    toggleNav(open) {
      if (open || this.navOpen) this.navOpen = !this.navOpen;
    }
  }
});
