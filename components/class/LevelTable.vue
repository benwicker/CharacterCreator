<template>
  <v-data-table
    :headers="headers"
    :items="levels"
    :items-per-page="levels.length"
    hide-default-footer
    dense
    disable-sort
    disable-pagination
  ></v-data-table>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: "Level", value: "lvl", divider: true, align: "center" },
        { text: "Proficiency Bonus", value: "pb", divider: true },
        { text: "Features", value: "features", divider: true, align: "left" },
        { text: "Force Powers Known", value: "fpk", divider: true },
        { text: "Force Points", value: "fp", divider: true, align: "center" },
        { text: "Max Power Level", value: "mpl", align: "center" }
      ],
      levels: [
        {
          lvl: "1st",
          pb: "+2",
          features: "Forcecasting, Channel the Force",
          fpk: 4,
          fp: 2,
          mpl: "1st"
        },
        {
          lvl: "2nd",
          pb: "+2",
          features: "Force-Empowered Strikes, Guardian Aura",
          fpk: 5,
          fp: 4,
          mpl: "1st"
        },
        {
          lvl: "3rd",
          pb: "+2",
          features: "Guardian Focus",
          fpk: 6,
          fp: 6,
          mpl: "1st"
        },
        {
          lvl: "4th",
          pb: "+2",
          features: "Ability Score Improvement",
          fpk: 7,
          fp: 8,
          mpl: "1st"
        },
        {
          lvl: "5th",
          pb: "+3",
          features: "Extra Attack",
          fpk: 9,
          fp: 10,
          mpl: "2nd"
        },
        {
          lvl: "6th",
          pb: "+3",
          features: "Force Purity",
          fpk: 10,
          fp: 12,
          mpl: "2nd"
        },
        {
          lvl: "7th",
          pb: "+3",
          features: "Focus feature",
          fpk: 11,
          fp: 14,
          mpl: "2nd"
        },
        {
          lvl: "8th",
          pb: "+3",
          features: "Ability Score Improvement",
          fpk: 12,
          fp: 16,
          mpl: "2nd"
        },
        {
          lvl: "9th",
          pb: "+4",
          features: "-",
          fpk: 14,
          fp: 18,
          mpl: "3rd"
        },
        {
          lvl: "10th",
          pb: "+4",
          features: "Additional Aura",
          fpk: 15,
          fp: 20,
          mpl: "3rd"
        },
        {
          lvl: "11th",
          pb: "+4",
          features: "Improved Force-Empowered Strikes",
          fpk: 16,
          fp: 22,
          mpl: "3rd"
        },
        {
          lvl: "12th",
          pb: "+4",
          features: "Ability Score Improvement",
          fpk: 17,
          fp: 24,
          mpl: "3rd"
        },
        {
          lvl: "13th",
          pb: "+5",
          features: "-",
          fpk: 19,
          fp: 26,
          mpl: "4th"
        },
        {
          lvl: "14th",
          pb: "+5",
          features: "Cleansing Touch",
          fpk: 20,
          fp: 28,
          mpl: "4th"
        },
        {
          lvl: "15th",
          pb: "+5",
          features: "Focus feature",
          fpk: 21,
          fp: 30,
          mpl: "4th"
        },
        {
          lvl: "16th",
          pb: "+5",
          features: "Ability Score Improvement",
          fpk: 22,
          fp: 32,
          mpl: "4th"
        },
        {
          lvl: "17th",
          pb: "+6",
          features: "-",
          fpk: 24,
          fp: 34,
          mpl: "5th"
        },
        {
          lvl: "18th",
          pb: "+6",
          features: "Aura Improvements",
          fpk: 25,
          fp: 36,
          mpl: "5th"
        },
        {
          lvl: "19th",
          pb: "+6",
          features: "Ability Score Improvement",
          fpk: 26,
          fp: 38,
          mpl: "5th"
        },
        {
          lvl: "20th",
          pb: "+6",
          features: "Focus feature",
          fpk: 27,
          fp: 40,
          mpl: "5th"
        }
      ]
    };
  }
};
</script>