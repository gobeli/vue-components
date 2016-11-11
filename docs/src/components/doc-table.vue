<template lang="html">
  <div class="table-container">
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Required</th>
          <th>Desciption</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="option in options">
          <td><mark>{{option.name}}</mark></td>
          <td><code>{{option.type}}</code></td>
          <td>{{option.required}}</td>
          <td v-html="option.description"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    options: Array
  }
};
</script>
