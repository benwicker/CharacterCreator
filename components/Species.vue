<template>
  <v-container grid-list-md pa-0 ma-0>
    <v-layout column class="fill-height" style="min-height: 0;">
      <v-flex d-flex md11 lg11 class="fill-height">
        <v-layout class="fill-height">
          <v-flex md4 class="fill-height">
            <v-card class="scroll-y" style="height: 100%; min-height: 0;" data-simplebar>
              <template v-for="bioItem in selectedSpecies.bio">
                <div :key="bioItem.id">
                  <v-card-title class="font-weight-bold pb-1">{{bioItem.header}}</v-card-title>
                  <v-divider class="ml-2 mr-2"></v-divider>
                  <v-card-text class="pt-1">{{bioItem.content}}</v-card-text>
                </div>
              </template>
            </v-card>
          </v-flex>
          <v-flex md4 class="fill-height mb-0 pb-0">
            <v-layout column class="fill-height">
              <v-flex sm6 d-flex style="height: 100%; width">
                <v-card style="height: 100%; min-height: 0; width: 100%;"></v-card>
              </v-flex>
              <v-flex sm6 d-flex class="mb-0 pb-0" style="height: 100%">
                <v-card class="scroll-y" style="height: 100%; min-height: 0; width: 100%;" data-simplebar>
                  <v-card-text
                    class="title pb-2"
                    style="text-align: center;"
                  >{{selectedSpecies.name}}</v-card-text>
                  <template v-for="c in selectedSpecies.characteristics">
                    <div :key="c.category">
                      <v-divider class="ml-2 mr-2"></v-divider>
                      <br />
                      <v-card-text class="pb-0 pt-0 font-weight-bold">{{c.category}}</v-card-text>
                      <template v-for="i in c.items">
                        <v-card-text class="pb-1 pt-1" :key="i.name">{{i.name}}: {{i.value}}</v-card-text>
                      </template>
                      <br />
                    </div>
                  </template>
                </v-card>
              </v-flex>
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
