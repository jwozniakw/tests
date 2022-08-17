<template>
  <p v-if="isLoading">Loading...</p>
  <p v-else-if="!isLoading && error">{{ error }}</p>

  <div class="test" v-else>
    <users-result
      v-for="result in results"
      :key="result.id"
      :name="result.name"
      :image="result.image"
      :status="result.status"
      :species="result.species"
      :type="result.type"
      :gender="result.gender"
      :created="result.created"
    ></users-result>
  </div>
</template>

<script src="./FetchUsers.js" />
<style src="./FetchUsers.css" rel="stylesheet" />
