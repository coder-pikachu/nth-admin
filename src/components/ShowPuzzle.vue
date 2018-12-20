<template>
  <b-row>
    <b-col cols="12">
      <h2>Edit Puzzle
        <b-link href="#/">(Puzzle List)</b-link>
      </h2>
      <b-jumbotron>
        <template slot="header">{{puzzle.title}}</template>
        <template slot="lead">
          Type: {{puzzle.type}}
          <br>
          Difficulty: {{puzzle.difficulty}}
          <br>
          Answer: {{puzzle.answer}}
          <br>Images:
          <br>
          <ul class="puzzle-images">
            <li v-for="(item) in puzzle.images" :key="item">
              <b-img :src="item" fluid alt="Responsive image"/>
            </li>
          </ul>
        </template>
        <hr class="my-4">
        <b-btn class="edit-btn" variant="success" @click.stop="editpuzzle(key)">Edit</b-btn>
        <b-btn variant="danger" @click.stop="deletepuzzle(key)">Delete</b-btn>
      </b-jumbotron>
    </b-col>
  </b-row>
</template>
<script>
import firebase from "../Firebase";
import router from "../router";

export default {
  name: "ShowPuzzle",
  data() {
    return {
      key: "",
      puzzle: {}
    };
  },
  created() {
    const ref = firebase
      .firestore()
      .collection("puzzles")
      .doc(this.$route.params.id);
    ref.get().then(doc => {
      if (doc.exists) {
        this.key = doc.id;
        this.puzzle = doc.data();
        console.log(this.puzzle);
      } else {
        alert("No such puzzle!");
      }
    });
  },
  methods: {
    editpuzzle(id) {
      router.push({
        name: "EditBoard",
        params: {
          id: id
        }
      });
    },
    deletepuzzle(id) {
      async function deleteMe(id) {
        const res = await this.$dialog.confirm({
          text: "Do you really want to delete this puzzle?"
        });
        console.log(res);
      }
      deleteMe(id);
    }
  }
};
</script>
<style>
li {
  list-style: none;
}
</style>
