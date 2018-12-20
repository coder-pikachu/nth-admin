<template>
  <b-row>
    <b-col cols="12">
      <h2>Puzzles List
        <b-link href="#/add-board">(Add Puzzle)</b-link>
      </h2>
      <b-table striped hover :items="puzzles" :fields="fields">
        <template slot="actions" scope="row">
          <b-btn size="sm" @click.stop="details(row.item)">Details</b-btn>
        </template>
      </b-table>
    </b-col>
  </b-row>
</template>
<script>
import firebase from "../Firebase";
import router from "../router";
export default {
  name: "PuzzleList",
  data() {
    return {
      fields: {
        type: { label: "Type", sortable: true, class: "text-center" },
        difficulty: {
          label: "Difficulty",
          sortable: true,
          class: "text-center"
        },
        answer: { label: "Answer", sortable: true, class: "text-center" },
        actions: { label: "Action", class: "text-center" }
      },
      puzzles: [],
      errors: [],
      ref: firebase.firestore().collection("puzzles")
    };
  },
  created() {
  
    this.ref.onSnapshot(querySnapshot => {
      this.puzzles = [];
      querySnapshot.forEach(puzzle => {
        this.puzzles.push({
          key: puzzle.id,
          type: puzzle.data().type,
          difficulty: puzzle.data().difficulty,
          answer: puzzle.data().answer
        });
      });
    });
  },
  methods: {
    details(puzzle) {
      router.push({
        name: "ShowPuzzle",
        params: {
          id: puzzle.key
        }
      });
    }
  }
};
</script>

<style>
  .table {
    width: 96%;
    margin: 0 auto;
  }
</style>