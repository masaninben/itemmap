<template>

  <v-layout>
    <v-flex xs4>
      <a target="_blank" :href="'https://www.mercari.com/jp/search/?keyword=' + title" class="button">
        <v-img :src="mer_src" height="50px" contain/>
      </a>
    </v-flex>
    <v-flex xs4>
      <a target="_blank" :href="'https://auctions.yahoo.co.jp/search/search?ei=utf-8p&p=' + title" class="button">
        <v-img :src="yaf_src" height="50px" contain/>
      </a>
    </v-flex>
    <v-flex xs4>
      <a target="_blank" :href="'https://uridoki.net/search?search_word=' + title" class="button">
        <v-img :src="uri_src" height="50px" contain/>
      </a>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ["title"],

  data() {
    return {
      mer_src: require("@/assets/mercari.png"),
      yaf_src: require("@/assets/yafuoku.png"),
      uri_src: require("@/assets/uridoki.png")
    };
  }
};
</script>

<style>
.button {
  display: inline-block;
  flex: 1;
  height: 50px;
  width: 50%;
}
</style>
