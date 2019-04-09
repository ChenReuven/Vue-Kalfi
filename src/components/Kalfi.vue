<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row>
      <v-flex xs6>
        <v-card
          dark
          color="primary"
          class="card"
          v-for="card in kalfiCards"
          v-on:click="vote(card)"
        >
          <h3>{{card.text}}</h3>
          <h4>{{card.subText}}</h4>
        </v-card>
      </v-flex>
      <v-flex xs6>
        <h3>תוצאות</h3>
        <div v-for="miflaga in results">{{miflaga.value}} - {{miflaga.text}}</div>
      </v-flex>
    </v-layout>
  </v-container>
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
    { type: "A", text: '"פה"', subText: "בראשות בני גנץ ויאיר לפיד" },
    { type: "B", text: '"מחל"', subText: "בראשות בנימין נתניהו" },
    { type: "C", text: '"אמת"', subText: "בראשות אבי גבאי" },
    { type: "D", text: '"ז"', subText: "בראשות משה פייגלין" }
  ];
  results = {
    A: { value: 0, text: '"פה"' },
    B: { value: 0, text: '"מחל"' },
    C: { value: 0, text: '"אמת' },
    D: { value: 0, text: '"ז"' }
  };

  vote(card: KalfiCard) {
    this.results[card.type].value += 1 || 0;
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