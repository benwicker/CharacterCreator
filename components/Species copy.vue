<template>
  <v-container grid-list-md pa-0 ma-0>
    <v-layout column fill-height>
      <v-flex md11>
        <v-layout row class="fill-height">
          <v-flex xs4 >
            <v-card dark class="fill-height elevation-10">
              <template v-for="bioItem in selectedSpecies.bio">
                <v-card-text :key="bioItem.header">{{bioItem.header}}</v-card-text>
                <v-card-text :key="bioItem.content">{{bioItem.content}}</v-card-text>
              </template>
            </v-card>
          </v-flex>
          <v-flex xs4 pb-0>
            <v-layout column class="fill-height">
              <v-flex xs7>
                <v-card dark color="primary" class="fill-height">
                  <v-card-text class="">10</v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs5 pb-0>
                <v-card dark color="primary" class="fill-height">
                  <v-card-text class="">10</v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs4>
            <v-card dark color="primary" class="fill-height">
              <v-card-text class="px-0">12</v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex md1>
        <v-layout row class="fill-height">
          <v-flex xs2>
            <v-card dark color="primary" class="fill-height">
              <v-card-text class="px-0">12</v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs8>
            <v-card dark color="primary" class="fill-height">
              <v-card-text class="px-0">12</v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs2>
            <v-card dark color="primary" class="fill-height">
              <v-card-text class="px-0">12</v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import species from "static/data/species.json"

export default {
  data() {
    return {
      selectedSpecies: species[0]
    }
  },
}
</script>

<style scoped>

</style>
