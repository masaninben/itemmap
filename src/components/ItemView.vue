<template>
  <div>
    <ItemImage :src="src" />
    <ItemCont />
    <ProposalCont />
    <ItemMap />
    <LetGoBtn />
    <router-view/>
  </div>
</template>

<script>
import ItemImage from "@/components/ItemImage";
import ItemCont from "@/components/ItemCont";
import ProposalCont from "@/components/ProposalCont";
import ItemMap from "@/components/ItemMap";
import LetGoBtn from "@/components/LetGoBtn";

export default {
  name: "ItemView",
  components: {
    ItemImage,
    ItemCont,
    ProposalCont,
    ItemMap,
    LetGoBtn
  }
};
</script>