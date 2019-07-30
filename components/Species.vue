<template>
  <v-container grid-list-md pa-0 ma-0>
    <v-layout column class="fill-height" style="min-height: 0;">
      <v-flex d-flex md10 lg10 class="fill-height">
        <v-layout class="fill-height">
          <v-flex md4 class="fill-height">
            <v-card class="secondary scroll-y" style="height: 100%; min-height: 0;" data-simplebar>
              <v-card-text>Hello</v-card-text>
            </v-card>
          </v-flex>
          <v-flex md4 class="fill-height">
            <v-card class="secondary scroll-y" style="height: 100%;" data-simplebar>
              <v-card-text>Hello</v-card-text>
            </v-card>
          </v-flex>
          <v-flex md4 class="fill-height">
            <v-card class="secondary scroll-y" style="height: 100%;" data-simplebar>
              <v-card-text>Hello</v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex md2 lg2 class="fill-height">
        <v-card class="secondary scroll-y" style="height: 100%;" data-simplebar>
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
