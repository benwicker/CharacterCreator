<template>
  <v-card class="overflow-y-auto">
    <template v-for="(bio, i) in bioList">
      <div :key="i">
        <v-card-title class="font-weight-bold pb-1">{{bio.header}}</v-card-title>
        <v-divider class="ml-2 mr-2"></v-divider>
        <v-card-text class="pt-1">{{bio.content}}</v-card-text>
      </div>
    </template>
  </v-card>
</template>

<script>
import "simplebar"; // or "import SimpleBar from 'simplebar';" if you want to use it manually.
import "simplebar/dist/simplebar.css";

export default {
    props: {
        bioList: Array
    }
};
</script>
