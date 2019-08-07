<template>
  <v-card class="overflow-y-auto">
    <v-card-text class="title pb-2" style="text-align: center;">{{name}}</v-card-text>
    <v-divider class="ml-2 mr-2"></v-divider>
    <br />
    <template v-for="(c, i) in characteristics">
      <div :key="i">
        <v-card-text class="pb-0 pt-0 font-weight-bold">{{c.category}}</v-card-text>
        <v-divider></v-divider>
        <v-simple-table dense class="noHover">
          <tbody>
            <tr v-for="(item, i) in c.items" :key="i">
              <td>{{item.name}}</td>
              <td>{{item.value}}</td>
            </tr>
          </tbody>
        </v-simple-table>
        <v-divider></v-divider>
        <br />
      </div>
    </template>
  </v-card>
</template>

<script>
export default {
  props: {
    name: String,
    characteristics: Array
  }
};
</script>