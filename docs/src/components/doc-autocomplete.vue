<template lang="html">
  <div id="autocomplete">
    <h2>Autocomplete</h2>
    <ui-autocomplete class="demo" style="min-width: 300px" :autocomplete="autocomplete">
      <ui-autocomplete-item v-for="country in countries" :value="country" :text="country"></ui-autocomplete-item>
    </ui-autocomplete>
    <p>selected: <code>{{autocomplete.selected}}</code></p>
    <h4>Usage</h4>
    <pre class="highlight">
    const countries = ["Afghanistan","Albania"....]
    const autocomplete = new ui.autocomplete.uiClass(3)

    &lt;ui-autocomplete style=&quot;min-width: 300px&quot; :autocomplete=&quot;autocomplete&quot;&gt;
    &lt;ui-autocomplete-item v-for=&quot;country in countries&quot; :value=&quot;country&quot; :text=&quot;country&quot;&gt;&lt;/ui-autocomplete-item&gt;
    &lt;/ui-autocomplete&gt;</pre>
    <p>The <code>autocomplete</code> component takes an <code>Object</code> of the Type
    <code>Autocomplete</code> as a parameter. The constructor requires the following paramters:</p>
    <div class="table-container">
      <table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Desciption</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>displayedItems</td>
            <td>Number</td>
            <td>The number of items displayed when the autocomplete is opened.</td>
          </tr>
          <tr>
            <td>selected</td>
            <td>AutocompleteItem</td>
            <td>Selected item</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p>The <code>autocomplete-item</code> requires the following parameter:</p>
    <div class="table-container">
      <table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Desciption</th>
          </tr>
        </thead>
        <thead>
          <tr>
            <td>value</td>
            <td>Object</td>
            <td>Value of the item i.e. an Id.</td>
          </tr>
          <tr>
            <td>text</td>
            <td>String</td>
            <td>Text which will be displayed and searched by the user.</td>
          </tr>
        </thead>
      </table>
    </div>
  </div>
</template>

<script>
import ui from 'src';

const countries = ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla', 'Antigua &amp; Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia &amp; Herzegovina', 'Botswana', 'Brazil', 'British Virgin Islands', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Cape Verde', 'Cayman Islands', 'Chad', 'Chile', 'China', 'Colombia', 'Congo', 'Cook Islands', 'Costa Rica', 'Cote D Ivoire', 'Croatia', 'Cruise Ship', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Polynesia', 'French West Indies', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait', 'Kyrgyz Republic', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Mauritania', 'Mauritius', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'Saint Pierre &amp; Miquelon', 'Samoa', 'San Marino', 'Satellite', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'South Africa', 'South Korea', 'Spain', 'Sri Lanka', 'St Kitts &amp; Nevis', 'St Lucia', 'St Vincent', 'St. Lucia', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor L\'Este', 'Togo', 'Tonga', 'Trinidad &amp; Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks &amp; Caicos', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'Uruguay', 'Uzbekistan', 'Venezuela', 'Vietnam', 'Virgin Islands (US)', 'Yemen', 'Zambia', 'Zimbabwe'];
const autocomplete = new ui.Autocomplete.Autocomplete(3, '');

export default {
  name: 'doc-autocomplete',
  data() {
    return {
      autocomplete: autocomplete,
      countries: countries
    };
  },
  components: {
    UiAutocomplete: ui.Autocomplete,
    UiAutocompleteItem: ui.AutocompleteItem
  }
};
</script>
