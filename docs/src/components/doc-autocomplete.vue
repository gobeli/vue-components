<template lang="html">
  <div id="autocomplete">
    <h2>Autocomplete</h2>
    <ui-autocomplete class="demo" style="min-width: 300px" v-model="value" :displayed-items="3">
      <ui-autocomplete-item v-for="country in countries" :value="country">{{country}}</ui-autocomplete-item>
    </ui-autocomplete>
    <p>selected: <code>{{value}}</code></p>
    <h4>Usage</h4>
    <h5>data</h5>
    <pre class="highlight prettyprint">countries: ["Afghanistan","Albania"....],
autocomplete: new ui.Autocomplete.Autocomplete(3)</pre>
    <h5>markup</h5>
    <pre class="highlight prettyprint">&lt;ui-autocomplete :autocomplete=&quot;autocomplete&quot;&gt;
  &lt;ui-autocomplete-item v-for=&quot;country in countries&quot; :value=&quot;country&quot; :text=&quot;country&quot;&gt;&lt;/ui-autocomplete-item&gt;
&lt;/ui-autocomplete&gt;</pre>

    <p>The <code>autocomplete</code> component takes an <code>Object</code> of the Type
    <code>Autocomplete</code> as a parameter. The constructor requires the following paramters:</p>
    <doc-table :options="autocompleteOptions"></doc-table>

    <p>The <code>autocomplete-item</code> requires the following parameters:</p>
    <doc-table :options="autocompleteItemOptions"></doc-table>
</template>

<script>
import ui from 'src';
import DocTable from './doc-table.vue';

const countries = ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla', 'Antigua &amp; Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia &amp; Herzegovina', 'Botswana', 'Brazil', 'British Virgin Islands', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Cape Verde', 'Cayman Islands', 'Chad', 'Chile', 'China', 'Colombia', 'Congo', 'Cook Islands', 'Costa Rica', 'Cote D Ivoire', 'Croatia', 'Cruise Ship', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Polynesia', 'French West Indies', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait', 'Kyrgyz Republic', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Mauritania', 'Mauritius', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'Saint Pierre &amp; Miquelon', 'Samoa', 'San Marino', 'Satellite', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'South Africa', 'South Korea', 'Spain', 'Sri Lanka', 'St Kitts &amp; Nevis', 'St Lucia', 'St Vincent', 'St. Lucia', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor L\'Este', 'Togo', 'Tonga', 'Trinidad &amp; Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks &amp; Caicos', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'Uruguay', 'Uzbekistan', 'Venezuela', 'Vietnam', 'Virgin Islands (US)', 'Yemen', 'Zambia', 'Zimbabwe'];

export default {
  name: 'doc-autocomplete',
  data() {
    return {
      value: '',
      countries: countries,
      autocompleteOptions: [{
        name: 'displayedItems',
        type: 'Number',
        required: 'No (Default = 3)',
        description: 'Number of displayed dropdown items'
      }, {
        name: 'selected',
        type: 'AutocompleteItem',
        required: 'No',
        description: 'Selected item.'
      }],
      autocompleteItemOptions: [{
        name: 'value',
        type: 'Object',
        required: 'Yes',
        description: 'Value of the item i.e. an Id.'
      }, {
        name: 'text',
        type: 'String',
        required: 'No',
        description: 'Text which will be displayed and searched by the user.'
      }]
    };
  },
  components: {
    UiAutocomplete: ui.Autocomplete,
    UiAutocompleteItem: ui.AutocompleteItem,
    DocTable
  }
};
</script>
