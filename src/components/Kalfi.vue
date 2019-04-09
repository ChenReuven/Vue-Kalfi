<template>
  <div class="kalfi">
    <v-card class="card" v-for="card in kalfiCards" v-on:click="vote(card)">
      <h3>{{card.text}}</h3>
      <h4>{{card.subText}}</h4>
    </v-card>
    <div>
      <h3>תוצאות</h3>
      <div>{{counter}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
//import { KalfiCard } from "../src/model/kalfiCard.ts";
export interface KalfiCard {
  type: "A" | "B" | "C" | "D";
  text: string;
  subText?: string;
}

@Component
export default class KalfiComponent extends Vue {
  kalfiCards: KalfiCard[] = [
    { type: "A", text: "פה", subText: "בראשות בני גנץ ויאיר לפיד" },
    { type: "B", text: "מחל", subText: "בראשות בנימין נתניהו" },
    { type: "C", text: "אמת", subText: "בראשות אבי גבאי" },
    { type: "D", text: "ז", subText: "בראשות משה פייגלין" }
  ];
  counter = {
    A: 0,
    B: 0,
    C: 0,
    D: 0
  };

  vote(card: KalfiCard) {
    this.counter[card.type] += 1 || 0;
  }
}
</script>

<style>
.card {
  padding: 25px;
  margin: 5px;
  background: yellowgreen;
}
</style>