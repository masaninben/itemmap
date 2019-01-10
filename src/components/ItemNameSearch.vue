<template>
    <v-card>
        <v-container yellow darken-4 fluid grid-list-lg>
            <v-layout row wrap>
                <v-flex xs12>
                    <v-form ref="form" v-model="valid" lazy-validation>
                        <v-text-field v-model="title" label="Title" required></v-text-field>
                        <v-btn :disabled="!valid" @click.prevent="submit">検索</v-btn>
                    </v-form>
                </v-flex>
            </v-layout>
        </v-container>

        <v-list>
            <v-list-tile v-for="item in items" :key="item.volumeInfo.title" @click="onClickItem(item.id)">
                <!-- :to="item.volumeInfo.infoLink" -->

                <v-list-tile-action>
                    <v-img v-if="item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail" :src="item.volumeInfo.imageLinks.thumbnail" />
                </v-list-tile-action>
                <v-list-tile-content>{{ item.volumeInfo.title }}</v-list-tile-content>
            </v-list-tile>
        </v-list>

        <v-layout row justify-center>
            <v-dialog v-model="dialog" max-width="290">
                <v-card v-if="getCurrentItem">
                    <v-card-title>{{ getCurrentItem.volumeInfo.title }}</v-card-title>
                    <v-img :src="getCurrentItem.volumeInfo.imageLinks.thumbnail" />

                    <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn color="success" @click="sendItem">
                            マイアイテムに追加
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-layout>

    </v-card>

</template>

<script>
import axios from "axios";
import { firebase, db } from "../firebase";

export default {
  data() {
    return {
      dialog: false,
      valid: true,
      title: "",
      items: [],
      currentItemId: ""
    };
  },
  methods: {
    async submit(e) {
      const response = await axios({
        method: "get",
        url:
          "https://www.googleapis.com/books/v1/volumes?q=" +
          encodeURIComponent(this.title)
      });
      this.items = response.data.items;
    },
    onClickItem(itemId) {
      this.dialog = true;
      this.currentItemId = itemId;
    },
    sendItem() {
      const colref = firebase.firestore().collection("items");
      const item = this.items.filter(item => item.id === this.currentItemId)[0];

      const saveData = {
        url: item.volumeInfo.imageLinks.thumbnail,
        title: item.volumeInfo.title
      };

      colref
        .add(saveData)
        .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });
      this.showMessage = true;
    }
  },
  computed: {
    getCurrentItem() {
      return this.items.filter(item => item.id === this.currentItemId)[0];
    }
  }
};
</script>