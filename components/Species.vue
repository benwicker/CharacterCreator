<template>
  <v-container grid-list-md pa-0 ma-0>
    <v-layout column class="fill-height" style="min-height: 0;">
      <v-flex d-flex md11 lg11 class="fill-height">
        <v-layout class="fill-height">
          <v-flex md4 class="fill-height">
            <v-card class="scroll-y" style="height: 100%; min-height: 0;" data-simplebar>
              <template v-for="bioItem in selectedSpecies.bio">
                <v-card-title class="font-weight-bold pb-1" :key="bioItem.header">{{bioItem.header}}</v-card-title>
                <v-divider class="ml-2 mr-2" :key="bioItem.content"></v-divider>
                <v-card-text class="pt-1" :key="bioItem.content">{{bioItem.content}}</v-card-text>
              </template>
            </v-card>
          </v-flex>
          <v-flex md4 class="fill-height">
            <v-layout column class="fill-height primary"> 
              <v-flex sm4 class="secondary" style="height: 100%"> </v-flex>
            </v-layout>
          </v-flex>
          <v-flex md4 class="fill-height">
            <v-card class="scroll-y" style="height: 100%;" data-simplebar>
              <v-card-text>Hello</v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex md1 lg1 class="fill-height">
        <v-card class="scroll-y" style="height: 100%;" data-simplebar>
          <v-card-text>Hello</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import species from "static/data/species.json";
import "simplebar"; // or "import SimpleBar from 'simplebar';" if you want to use it manually.
import "simplebar/dist/simplebar.css";

export default {
  data() {
    return {
      selectedSpecies: species[0]
    };
  }
};
</script>

<style scoped>
  v-flex {
    min-height: 0;
  }
</style>
