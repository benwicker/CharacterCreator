<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app clipped :mini-variant="miniVariant" ref="navbar">
      <v-list dense>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to">
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>{{ `chevron_${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-app-bar>

    <v-content :style="'height: ' + contentHeight">
      <v-container fluid fill-height>
        <nuxt class="fill-height"/>
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: true,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: "person",
          title: "Charactor Creator",
          to: "/charactor-creator"
        }
      ],
      miniVariant: false,
      title: "SW5E Character Creator"
    };
  },
  computed: {
    contentHeight: function() {
      if (this.$refs.navbar) {
        return this.$refs.navbar.$el.clientHeight
      }
      return 0;
    }
  }
};
</script>

<style scoped>
  html {
    overflow: auto;
  }
</style>
