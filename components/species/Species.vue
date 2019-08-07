<template>
  <v-container grid-list-md pa-0 ma-0>
    <v-layout column class="fill-height" style="min-height: 0;">
      <v-flex d-flex md11 lg11 class="fill-height">
        <v-layout class="fill-height">
          <v-flex md4 d-flex class="fill-height">
            <description :bioList="selectedSpecies.bio" class="flex-grow-1"/>
          </v-flex>
          <v-flex md4 class="fill-height mb-0 pb-0">
            <v-layout column class="fill-height">
              <v-flex sm6 d-flex style="height: 100%; width">
                <v-card style="height: 100%; min-height: 0; width: 100%;"></v-card>
              </v-flex>
              <v-flex sm6 d-flex class="mb-0 pb-0" style="height: 100%">
                <characteristics :name="selectedSpecies.name" :characteristics="selectedSpecies.characteristics" class="flex-grow-1" data-simplebar/>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex md4 d-flex class="fill-height">
            <traits :traits="selectedSpecies.traits" class="flex-grow-1" />
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex md1 lg1 class="fill-height">
        <selector :speciesList="species" v-on:speciesSelected="setSelectedSpecies($event)"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Species from "@/data/Species.js";
import Traits from "~/components/species/Traits.vue";
import Description from "~/components/species/Description.vue";
import Characteristics from "~/components/species/Characteristics.vue"
import Selector from "~/components/species/Selector.vue";
import "simplebar"; // or "import SimpleBar from 'simplebar';" if you want to use it manually.
import "simplebar/dist/simplebar.css";

export default {
  components: {
    Traits,
    Description,
    Characteristics,
    Selector
  },
  data() {
    return {
      species: Species,
      selectedSpecies: {}
    };
  },
  methods: {
    setSelectedSpecies: function(index) {
      this.selectedSpecies = this.species[index];
    }
  }
};
</script>

<style scoped>

.noHover {
  pointer-events: none;
}
</style>
