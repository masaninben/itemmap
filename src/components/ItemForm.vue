<template>
  <v-card>
    <v-container indigo darken-2 fluid grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field v-model="url" label="アイテム画像URL" required></v-text-field>
            <v-flex xs12 sm6 md4>
              <v-menu :close-on-content-click="false" v-model="menu2" :nudge-right="40" lazy transition="scale-transition" offset-y full-width min-width="290px">
                <v-text-field slot="activator" v-model="date" label="登録日" prepend-icon="event" readonly></v-text-field>
                <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
              </v-menu>
            </v-flex>
            <v-text-field v-model="title" label="アイテム名" required></v-text-field>
            <v-text-field v-model="price" label="定価" required></v-text-field>
            <v-select v-model="seller" :items="sellers" :rules="[v => !!v || '必須項目']" label="購入元" required></v-select>
            <v-select v-model="category" :items="items" :rules="[v => !!v || '必須項目']" label="アイテムのカテゴリー" required></v-select>
            <v-btn :disabled="!valid" @click="submit">アイテム登録</v-btn>
          </v-form>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import { firebase, db } from "../firebase";

export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ],
    category: null,
    items: ["書籍", "衣服", "靴", "自動車"],
    seller: null,
    sellers: ["ECサイト", "実店舗"],
    url: "",
    date: "",
    title: "",
    price: "",
    menu2: ""
  }),

  methods: {
    submit() {
      const colref = firebase.firestore().collection("items");

      const saveData = {
        url: this.url,
        date: this.date,
        title: this.title,
        seller: this.seller,
        price: this.price,
        category: this.category
      };

      // addの引数に保存したいデータを渡す
      colref
        .add(saveData)
        .then(function(docRef) {
          // 正常にデータ保存できた時の処理
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
          // エラー発生時の処理
          console.error("Error adding document: ", error);
        });
      this.showMessage = true;
    }
  }
};
</script>