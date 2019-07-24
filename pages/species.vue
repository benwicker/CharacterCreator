<template>
  <v-container grid-list-md fluid>
    <v-layout justify-center column fill-height>
      <v-flex xs10>
        <v-layout row class="fill-height">
          <v-flex xs4>
            <v-card dark color="primary" class="fill-height">
              <v-card-text class="px-0">12</v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs4>
            <v-card dark color="primary" class="fill-height">
              <v-card-text class="px-0">12</v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs4>
            <v-card dark color="primary" class="fill-height">
              <v-card-text class="px-0">12</v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs2>
        <v-card dark color="secondary" class="fill-height">
          <v-card-text class="px-0">12</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import HoloIcon from "~/components/HoloIcon.vue";

export default {
  components: {
    HoloIcon
  }
};
</script>

<style scoped>
.item {
  margin: 10px;
}
</style>
