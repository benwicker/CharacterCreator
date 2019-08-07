<template>
  <v-container ma-0 pa-0 fluid>
    <v-layout justify-center>
      <v-flex>
        <v-stepper class="fill-height" v-model="currentStep">
          <v-layout class="fill-height" column ref="stepperLayout">
            <v-flex xs1 class="fill-height">
              <v-stepper-header>
                <v-stepper-step editable :complete="currentStep > 1" step="1">Species</v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step editable step="2">Class</v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step editable step="3">Abilities</v-stepper-step>
              </v-stepper-header>
            </v-flex>
            <v-flex d-flex xs11 class="fill-height">
              <v-stepper-items class="fill-height" style="width: 100%;">
                <v-stepper-content step="1" class="fill-height">
                  <species class="fill-height" v-on:continue="incrementStep()"/>
                </v-stepper-content>
                <v-stepper-content step="2">
                  <div>Class Selection</div>
                </v-stepper-content>
                <v-stepper-content step="3">
                  <div>Abilities Selection</div>
                </v-stepper-content>
              </v-stepper-items>
            </v-flex>
          </v-layout>
        </v-stepper>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Species from "~/components/species/Species.vue";

export default {
  components: {
    Species
  },
  data() {
    return {
      currentStep: 1
    }
  },
  methods: {
    incrementStep: function() {
      this.currentStep++;
    }
  }
};
</script>

<style>
.v-stepper__wrapper {
  min-height: 100%;
  height: 100%;
}

::-webkit-scrollbar {
    width: 0px;
}
 
::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    border-radius: 10px;
}
 
::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
}
</style>
