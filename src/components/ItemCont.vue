<template>
    <v-flex xs7>
        <p>登録日：{{ date }}</p>
        <!-- <p>所有期間：{{ duration }}</p>
        <p>購入元：{{ seller }}</p> -->
        <p>定価：{{ price }}</p>
        <!-- <p>中古市場価格：{{ ref_price }}</p> -->
        <p>所有者数：{{ user_count }}</p>
    </v-flex>
</template>

<script>
export default {
  props: ["date", "duration", "seller", "price", "ref_price", "user_count"]
};
</script>
