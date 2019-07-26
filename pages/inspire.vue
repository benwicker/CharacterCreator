<template>
  <v-layout>
    <v-flex text-xs-center>
      <v-stepper>
        <v-stepper-header>
          <v-stepper-step editable edit-icon="apps" step="1">Species</v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step editable step="2">Class</v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step editable step="3">Abilities</v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step editable step="4">Background</v-stepper-step>

          
          <v-divider></v-divider>

          <v-stepper-step editable step="5">Equipment</v-stepper-step>
        </v-stepper-header>
      </v-stepper>
      <br />

      <img src="/v.png" alt="Vuetify.js" class="mb-5" />
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>
    </v-flex>
  </v-layout>
</template>
