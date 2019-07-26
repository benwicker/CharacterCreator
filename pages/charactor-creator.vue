<template>
  <v-container fluid ma-0 pa-0>
    <v-layout justify-center>
      <v-flex lg9>
        <v-stepper class="fill-height">
          <v-layout column fill-height>
            <v-flex>
              <v-stepper-header>
                <v-stepper-step editable step="1">Species</v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step editable step="2">Class</v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step editable step="3">Abilities</v-stepper-step>
              </v-stepper-header>
            </v-flex>
            <v-flex md12>
              <v-stepper-items class="fill-height">
                <v-stepper-content step="1" class="fill-height">
                  <species class="fill-height" />
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
import Species from "~/components/Species.vue";

export default {
  components: {
    Species
  }
};
</script>

<style>
    .v-stepper__wrapper {
        min-height: 100%;
        height: 100%;
    }
</style>
