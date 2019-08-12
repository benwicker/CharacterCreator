<template>
  <div>
    <div class="text-center d-flex pb-4">
      <v-btn @click="all" class="mr-2">Expand all</v-btn>
      <v-btn @click="none" class="ml-2">Collapse all</v-btn>
    </div>
    <v-expansion-panels multiple v-model="panel">
      <v-expansion-panel v-for="l in numLevels" :key="l">
        <v-expansion-panel-header>Level {{l}}</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-card flat class="pa-0 ma-0">
            <v-card-text
              v-if="features.filter(x => x.lvl == l).length == 0"
            >No features granted at this level</v-card-text>
            <v-card-text
              v-else
              class="pa-0 ma-0"
              v-for="(f, i) in features.filter(x => x.lvl == l)"
              :key="i"
            >
              <p class="title mb-0">{{f.header}}</p>
              <v-divider></v-divider>
              <p v-for="c in f.content" :key="c">{{c}}</p>
              <template v-for="(s, k) in f.sections">
                <div :key="k">
                  <p class="subtitle-1 mb-0">{{s.header}}</p>
                  <p v-for="sc in s.content" :key="sc.content">{{sc}}</p>
                </div>
              </template>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import Features from "~/static/data/features.json";

export default {
  data() {
    return {
      numLevels: 20,
      panel: [],
      features: Features,
      selectedFeature: null
    };
  },
  methods: {
    all: function() {
      this.panel = [...Array(this.numLevels).keys()].map((k, i) => i);
    },
    none: function() {
      this.panel = [];
    }
  }
};
</script>