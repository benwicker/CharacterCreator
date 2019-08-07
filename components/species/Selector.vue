<template>
  <v-card class="scroll-y" style="height: 100%;" data-simplebar>
    <v-card-actions class="justify-center">
      <template v-for="(s, i) in speciesList">
        <v-btn :key="i" class="ml-4 mr-4" fab small>
            {{s.symbol}}
        </v-btn>
      </template>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ["speciesList"]
};
</script>