<template>
  <div>
    <v-navigation-drawer v-model="drawer" clipped fixed app>
      <v-list>
        <v-list-tile-avatar>
          <img src="https://cdn.vuetifyjs.com/images/lists/1.jpg">
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>ninben</v-list-tile-title>
        </v-list-tile-content>

        <v-list-tile v-for="item in menuItems" :key="item.title" :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>itemmap</v-toolbar-title>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      menuItems: [
        {
          icon: "search",
          title: "アイテム検索",
          link: "/ItemNameSearch"
        },
        // { icon: "edit", title: "アイテム新規追加", link: "/ItemForm" },
        { icon: "apps", title: "マイアイテム", link: "/" },
        { icon: "person", title: "アカウント情報", link: "/AccountInfo" }
      ]
    };
  }
};
</script>

