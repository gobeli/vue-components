import Vue from 'vue'
import EventHub from './helpers/eventHub'
import ui from './bootstrap-components/'

const countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"]
const autocomplete = new ui.autocomplete.uiClass("autocomplete" ,3,"")

const checkbox1 = new ui.checkbox.uiClass("checkbox1", true, "Checkbox 1", "cross","20px")
const checkbox2 = new ui.checkbox.uiClass("checkbox2", false, "Checkbox 2", "tick", "20px")

const radiobuttonGroup = new ui.radiobuttonGroup.uiClass("radiobuttonGroup",null)

const dropdown = new ui.dropdown.uiClass("dropdown", "Please select", 3)

const checkedDropdown = new ui.checkedDropdown.uiClass("checkedDropdown", 3)

const gridCountries = [{"id":1,"country":"Poland"},{"id":2,"country":"Czech Republic"},{"id":3,"country":"Argentina"},{"id":4,"country":"Indonesia"},{"id":5,"country":"Morocco"},{"id":6,"country":"Thailand"},{"id":7,"country":"China"},{"id":8,"country":"Iran"},{"id":9,"country":"Japan"},{"id":10,"country":"Indonesia"},{"id":11,"country":"South Africa"},{"id":12,"country":"Vietnam"},{"id":13,"country":"South Korea"},{"id":14,"country":"Portugal"},{"id":15,"country":"China"},{"id":16,"country":"Philippines"},{"id":17,"country":"Poland"},{"id":18,"country":"Czech Republic"},{"id":19,"country":"Brazil"},{"id":20,"country":"Argentina"}]
const grid = new ui.grid.uiClass("grid", gridCountries, false, true)
grid.addColumn(new ui.grid.Column("id", "Id", false))
    .addColumn(new ui.grid.Column("country", "Country", true))

new Vue({
  el: '#app',
  template: '',
  components: {
    UiCheckbox: ui.checkbox,
    UiRadiobuttonGroup: ui.radiobuttonGroup, UiRadiobutton: ui.radiobutton,
    UiDropdown: ui.dropdown, UiDropdownItem: ui.dropdownItem,
    UiCheckedDropdown: ui.checkedDropdown, UiCheckedDropdownItem: ui.checkedDropdownItem,
    UiSlider: ui.slider,
    UiAutocomplete: ui.autocomplete, UiAutocompleteItem: ui.autocompleteItem,
    UiGrid: ui.grid },
  data () {
    return {
      autocomplete: autocomplete,
      countries: countries,
      checkbox1: checkbox1,
      checkbox2: checkbox2,
      radiobuttonGroup: radiobuttonGroup,
      dropdown: dropdown,
      checkedDropdown: checkedDropdown,
      grid: grid
    }
  }
})
