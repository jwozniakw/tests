<template>
  <div class="container">
    <div class="character">
      <div class="name">{{ name }}</div>
      <div class="image"><img v-bind:src="image" /></div>
      <div class="list">
        <ul>
          <li>Status: {{ status }}</li>
          <li>Species {{ species }}</li>
          <li>Type: {{ type }}</li>
          <li>Gender: {{ gender }}</li>
          <li>Created: {{ created }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script src="./UsersResult.js" />
<style src="./UsersResult.css" rel="stylesheet" />
