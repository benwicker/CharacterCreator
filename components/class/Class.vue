<template>
  <v-container grid-list-md pa-0 ma-0>
    <v-layout column>
      <v-flex sm11>
        <v-tabs dark vertical v-model="tab" class="fill-height">
          <v-tab>Overview</v-tab>
          <v-tab>Features</v-tab>
          <v-tab>SubClasses</v-tab>
          <v-tab>Powers</v-tab>

          <v-tabs-items class="fill-height"  v-model="tab">
            <v-tab-item class="fill-height">
              <div>Hello1</div>
            </v-tab-item>
            <v-tab-item class="fill-height">
              <div>Hello2</div>
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
          <div>Hello</div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      tab: null
    };
  }
};
</script>

<style scoped>
    .v-tabs-items >>> .v-window__container {
        height: 100%;
    }
</style>
