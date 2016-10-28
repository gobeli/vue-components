import Vue from 'vue'
import {EventHub} from './helpers/eventHub'
import { UiCheckbox, UiRadiobuttonGroup, UiDropdown, UiSlider, UiAutocomplete } from './components/'

new Vue({
  el: '#app',
  template: '',
  components: { UiCheckbox,UiRadiobuttonGroup,UiDropdown,UiSlider,UiAutocomplete },
  data () {
    return {
      autocomplete: {
        name: "autocomplete",
        items: ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"],
        selected: ""
      },
      checkbox1: {
        name: "checkbox1",
        checked: true,
        type: "tick"
      },
      checkbox2: {
        name: "checkbox2",
        checked: false,
        type: "cross"
      },
      radiobuttonGroup: {
        name: "radiobutton-group",
        radiobuttons: [{
      		name: "first",
      		text: "first"
      	}, {
      		name: "second",
      		text: "second"
      	}],
        selected: null
      },
      dropdownItems: [{
        id:1,
        text: "Switzerland",
        selected: false
      },{
        id:2,
        text: "Germany",
        selected: false
      },{
        id:3,
        text: "Austria",
        selected: false
      }]
      }
  },
  mounted() {
    EventHub.$on(`${this.checkbox1.name}_CheckedChanged`, checked => {
      this.checkbox1.checked = checked
    })

    EventHub.$on(`${this.checkbox2.name}_CheckedChanged`, checked => {
      this.checkbox2.checked = checked
    })

    EventHub.$on(`${this.autocomplete.name}_SelectedChanged`, selected => {
      this.autocomplete.selected = selected
    })

    EventHub.$on(`${this.radiobuttonGroup.name}_SelectedChanged`, name => {
      this.radiobuttonGroup.selected = name
    })
  }
})
