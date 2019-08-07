<template>
  <v-container grid-list-md pa-0 ma-0>
    <v-layout justify-center>
      <v-flex sm9>
        <v-simple-table dense class="text-center">
          <thead>
            <tr>
              <th class="text-center">Level</th>
              <th class="text-center">Experience</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="l in levels" :key="l.lvl" :class="selectedLevel.lvl == l.lvl ? 'active' : ''" @click="selectedLevel = l">
              <td>{{l.lvl}}</td>
              <td>{{l.xp}}</td>
            </tr>
          </tbody>
        </v-simple-table>
        <br />
        <v-layout>
          <v-flex sm6>
            <v-btn block @click="$emit('prev')">Previous</v-btn>
          </v-flex>
          <v-flex sm6>
            <v-btn block @click="$emit('next')">Continue</v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      selectedLevel: {lvl: 1, xp: "0"},
      levels: [
        { lvl: 1, xp: "0" },
        { lvl: 2, xp: "300" },
        { lvl: 3, xp: "900" },
        { lvl: 4, xp: "2,700" },
        { lvl: 5, xp: "6,500" },
        { lvl: 6, xp: "14,000" },
        { lvl: 7, xp: "23,000" },
        { lvl: 8, xp: "34,000" },
        { lvl: 9, xp: "48,000" },
        { lvl: 10, xp: "64,000" },
        { lvl: 11, xp: "85,000" },
        { lvl: 12, xp: "100,000" },
        { lvl: 13, xp: "120,000" },
        { lvl: 14, xp: "140,000" },
        { lvl: 15, xp: "165,000" },
        { lvl: 16, xp: "195,000" },
        { lvl: 17, xp: "225,000" },
        { lvl: 18, xp: "265,000" },
        { lvl: 19, xp: "305,000" },
        { lvl: 20, xp: "355,000" }
      ]
    };
  }
};
</script>