<template>
    <tr v-if="winner">
        <td class="name"><b>{{player}}</b></td>
        <td class="score"><b>{{front}}</b></td>
        <td class="score"><b>{{back}}</b></td>
        <td class="score"><b>{{gross()}}</b></td>
    </tr>
    <tr v-else>
        <td class="name">{{player}}</td>
        <td class="score">{{front}}</td>
        <td class="score">{{back}}</td>
        <td class="score">{{gross()}}</td>
    </tr>
</template>

<script>
export default {
  name: 'GrossScore',
  props: {
      player: String,
      front: String,
      back: String,
      winner: String
  },
  methods: {
      gross() {
          return Number(this.front) + Number(this.back);
      }
  }
}
</script>
