<template>
  <div>
    <v-navigation-drawer v-model="drawer" clipped fixed app>
      <v-list>
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
          icon: "supervisor_account",
          title: "アイテム登録",
          link: "/ProposalCont"
        },
        { icon: "room", title: "マイアイテム", link: "/ItemCont" },
        { icon: "person", title: "アカウント情報", link: "/ItemList" },
        { icon: "face", title: "itemmap TOP", link: "/" }
      ]
    };
  }
};
</script>

