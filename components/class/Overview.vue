<template>
  <v-card flat class="overflow-y-auto">
      <v-card-text v-for="(d, i) in description" :key="i" class="mb-0 pb-0">
          <p class="title mb-0">{{d.header}}</p>
          <v-divider></v-divider>
          <p v-for="(c, j) in d.content" :key="j" class="">{{c}}</p>
      </v-card-text>
  </v-card>
</template>

<script>
export default {
    props: {
        description: Array
    }
};
</script>