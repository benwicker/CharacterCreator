<template>
  <v-container fluid fill-height>
    <v-layout>
      <v-flex text-xs-center>
        <v-stepper class="fill-height">
          <v-stepper-header>
            <v-stepper-step editable step="1">Species</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step editable step="2">Class</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step editable step="3">Abilities</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step editable step="4">Background</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step editable step="5">Equipment</v-stepper-step>
          </v-stepper-header>

          <v-stepper-items class="fill-height">
            <v-stepper-content step="1">Hello</v-stepper-content>
          </v-stepper-items>
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