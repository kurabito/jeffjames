<template>
    <tr v-if="winner">
        <td class="name"><b>{{player}}</b></td>
        <td class="score"><b>{{score}}</b></td>
        <td class="score"><b>-{{handicap}}</b></td>
        <td class="score"><b>{{net()}}</b></td>
    </tr>
    <tr v-else>
        <td class="name">{{player}}</td>
        <td class="score">{{score}}</td>
        <td class="score">-{{handicap}}</td>
        <td class="score">{{net()}}</td>
    </tr>
</template>

<script>
export default {
  name: 'NetScore',
  props: {
      player: String,
      score: String,
      handicap: String,
      winner: String
  },
  methods: {
      net() {
          return Number(this.score) - Number(this.handicap);
      }
  }
}
</script>
