<template>
    <div>
        <v-navigation-drawer permanent clipped fixed app>
            <v-list>
                <v-list-tile v-for="item in menuItems" :key="item.title" :to="item.link">
                    <v-list-tile-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>{{ item.title }}</v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <p>アイテム検索</p>
    </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      menuItems: [
        {
          icon: "list",
          title: "カテゴリー",
          link: "/CategoryList"
        },
        { icon: "list", title: "ブランド", link: "/BrandList" },
        { icon: "search", title: "名前から検索", link: "/ItemNameSearch" }
      ]
    };
  }
};
</script>