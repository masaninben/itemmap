<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-container v-bind="{ [`grid-list-${size}`]: true }" fluid>
        <v-layout row wrap>
          <v-flex v-for="(image, n) in images" :key="n" xs3>
            <v-card flat tile :to="`items/${image.id}`">
              <v-img :src="image.src" height="100px"></v-img>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
import { firebase } from "../firebase";
const db = firebase.firestore();
const settings = { timestampsInSnapshots: true };
db.settings(settings);
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
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.images = this.images.concat([
            { id: doc.id, src: doc.data().url }
          ]);
        });
      });
  }
};
</script>