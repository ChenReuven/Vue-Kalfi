<template>
  <div class="kalfi">
    <h1>Kalfi</h1>
    <div v-for="card in cards">
      <div>{{card}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class KalfiComponent extends Vue {
  cards: string[] = ["A", "B", "C", "D"];
}
</script>