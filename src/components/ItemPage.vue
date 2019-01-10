<template>
  <div id="e3" class="grey lighten-3">
    <v-card>
      <v-container fluid grid-list-lg>
        <v-layout row wrap>

          <v-flex xs12>
            <v-card color="deep-purple darken-1" class="white--text">
              <v-layout>
                <v-flex xs6>
                  <v-img :src="src" height="125px" contain></v-img>
                </v-flex>
                <ItemCont :date="date" :duration="duration" :seller="seller" :price="price" :ref_price="ref_price" :user_count="user_count" />
              </v-layout>
            </v-card>
          </v-flex>

          <v-flex xs12 style="margin-top: 8px; margin-bottom:8px">
            <v-card color="yellow darken-3" class="white--text">
              <ProposalCont :title="title" />
            </v-card>
          </v-flex>

          <v-flex xs12>
            <v-card color="blue-gray darken-1" class="white--text">
              <v-layout row>
                <v-flex xs12>
                  <v-img :src="mapsrc" height="175px" contain/>
                </v-flex>
              </v-layout>
            </v-card>
          </v-flex>

          <v-flex xs12 v-if="!released">
            <v-card color="teal" class="white--text">
              <v-btn color="success" @click="sendItem">再販売</v-btn>
              <v-btn color="success" @click="sendItem">廃棄</v-btn>
              <v-btn color="success" @click="sendItem">リサイクル</v-btn>
              <v-btn color="success" @click="sendItem">譲渡</v-btn>
              <v-btn color="success" @click="sendItem">寄付</v-btn>
            </v-card>
          </v-flex>

        </v-layout>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import ItemCont from "@/components/ItemCont";
import ProposalCont from "@/components/ProposalCont";
import { firebase, db } from "../firebase";

export default {
  components: {
    ItemCont,
    ProposalCont
  },
  data() {
    return {
      mapsrc: require("@/assets/heatmap.png"),
      src: "",
      date: "",
      duration: "",
      seller: "",
      price: "",
      ref_price: "",
      user_count: "",
      menu2: "",
      title: "",
      date2: "",
      released: false
    };
  },
  mounted() {
    db
      .collection("items")
      .doc(this.$route.params.id)
      .get()
      .then(doc => {
        this.src = doc.data().url;
        this.date = doc.data().date;
        this.duration = doc.data().duration;
        this.seller = doc.data().sller;
        this.price = doc.data().price;
        this.ref_price = doc.data().ref_price;
        this.user_count = doc.data().user_count;
        this.title = doc.data().title;
        this.released = doc.data().released;
      });
  },
  methods: {
    sendItem() {
      const colref = firebase
        .firestore()
        .collection("items")
        .doc(this.$route.params.id);

      const saveData = {
        released: true
      };

      colref
        .update(saveData)
        .then(docRef => {
          this.released = true;
          console.log("Document written with ID: ", docRef);
        })
        .catch(error => {
          console.error("Error adding document: ", error);
        });
      this.showMessage = true;
    }
  }
};
</script>