<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Edit Puzzle
        <b-link href="#/">(Puzzle List)</b-link>
      </h2>
      <b-jumbotron>
        <template slot="header">
          {{puzzle.title}}
        </template>
        <template slot="lead">
          Type: {{puzzle.type}}<br>
          Difficulty: {{puzzle.difficulty}}<br>
          Answer: {{puzzle.answer}}<br>
        </template>
        <hr class="my-4">
        <b-btn class="edit-btn" variant="success" @click.stop="editboard(key)">Edit</b-btn>
        <b-btn variant="danger" @click.stop="deleteboard(key)">Delete</b-btn>
      </b-jumbotron>
    </b-col>
  </b-row>
</template>