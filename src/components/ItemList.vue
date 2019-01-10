<template>
  <v-container fluid grid-list-md>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-layout row wrap>
          <v-flex v-for="(image, n) in images" :key="n" xs3>
            <v-card flat tile :to="`items/${image.id}`" :class="{
              'isReleased': image.released
            }">
              <v-img :src="image.src" height="100px"></v-img>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { firebase, db } from "../firebase";

export default {
  data() {
    return {
      drawer: false,
      images: []
    };
  },
  mounted() {
    db
      .collection("items")
      .get()
      .then(snap => {
        snap.forEach(doc => {
          this.images = this.images.concat([
            { id: doc.id, src: doc.data().url, released: doc.data().released }
          ]);
        });
      });
  }
};
</script>

<style>
.isReleased {
  opacity: 0.3;
}
</style>