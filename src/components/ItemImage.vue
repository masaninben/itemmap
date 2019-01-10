<template>
    <v-layout>
        <v-flex xs12 sm6 offset-sm3>
            <v-card>
                <v-card-actions>
                    <v-select :items="items" v-model="size" label="Size"></v-select>
                    <v-spacer></v-spacer>
                </v-card-actions>
                <v-container v-bind="{ [`grid-list-${size}`]: true }" fluid>
                    <v-layout row wrap>
                        <v-flex v-for="(image, n) in images" :key="n" xs3>
                            <v-card flat tile :to="`items/${image.id}`">
                                <v-img :src="image.src" height="200px"></v-img>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card>
        </v-flex>
    </v-layout>
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

