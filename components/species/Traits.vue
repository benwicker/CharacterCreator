<template>
  <v-card class="overflow-y-auto">
    <v-card-title class="font-weight-bold pb-1">Traits</v-card-title>
    <v-divider class="ml-2 mr-2"></v-divider>
    <template v-for="(t, i) in traits">
      <div :key="i">
        <v-card-text class="font-weight-bold pb-0">{{t.name}}</v-card-text>
        <v-card-text class="pt-0 pb-0">{{t.value}}</v-card-text>
      </div>
    </template>
    <br />
  </v-card>
</template>

<script>
import "simplebar";
import "simplebar/dist/simplebar.css";

export default {
  props: ["traits"]
};
</script>