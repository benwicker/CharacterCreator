<template>
  <v-container grid-list-md pa-0 ma-0>
    <v-layout column>
      <v-flex d-flex sm11>
        <v-tabs dark vertical v-model="tab" class="fill-height">
          <v-tab>Overview</v-tab>
          <v-tab>Features</v-tab>
          <v-tab>SubClasses</v-tab>
          <v-tab>Powers</v-tab>

          <v-tabs-items class="fill-height"  v-model="tab">
            <v-tab-item class="fill-height pa-2">
              <overview class="fill-height" :description="currentClass.description"/>
            </v-tab-item>
            <v-tab-item class="fill-height pa-2">
              <features class="fill-height" :features="currentClass.features" />
            </v-tab-item>
            <v-tab-item class="fill-height">
              <div>Hello3</div>
            </v-tab-item>
            <v-tab-item class="fill-height">
              <div>Hello4</div>
            </v-tab-item>
          </v-tabs-items>
        </v-tabs>
      </v-flex>
      <v-flex sm1>
          <v-card class="fill-height">
          </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Classes from "~/static/data/classes.json";
import Overview from "~/components/class/Overview.vue";
import Features from "~/components/class/Features.vue";

export default {
    components: {
        Overview,
        Features
    },
  data() {
    return {
      tab: null,
      classes: Classes,
      currentClass: Classes[0]
    };
  }
};
</script>

<style scoped>
    .v-tabs-items >>> .v-window__container {
        height: 100%;
    }
</style>
