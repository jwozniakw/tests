<template>
  <div>
    <img
      src="https://occ-0-1068-1723.1.nflxso.net/dnm/api/v6/TsSRXvDuraoJ7apdkH6tsHhf-ZQ/AAAABbtnw6C35mhluezr-K_FiP65TW93xpH0M3S6lKPv50_7eshzc1vosWxE3CxcnJ5-eVYmpcaQyra9yFLzQtsNx4odwYO-GtDDmDU0.png?r=47e"
      class="logo"
    />
    <select name="currentStatus" @change="changeStatus" class="status">
      <option value="">All</option>
      <option value="Alive">Alive</option>
      <option value="unknown">Unknown</option>
      <option value="Dead">Dead</option>
    </select>
    <fetch-users
      :currentPage="currentPage"
      :currentStatus="currentStatus"
    ></fetch-users>
    <div class="pagination">
      <button @click="prevPage('prev')">Prev</button>
      <div class="PaginationItems">
        <div
          class="PaginationItem"
          :class="page === CurrentPage ? 'active' : ''"
          v-for="(pageNumber, page) in this.LinksArrForPaginationElements"
          v-bind:key="page"
          @click="getDataByLink(pageNumber, i)"
        >
          {{ i + 1 }}"
        </div>
      </div>
      <button @click="nextPage('next')">Next</button>
    </div>
  </div>
</template>
<script>
import FetchUsers from "./components/FetchUsers/FetchUsers.vue";

export default {
  components: {
    FetchUsers,
  },
  data() {
    return {
      currentPage: 1,
      currentStatus: "",
      savedUsersResults: [],
    };
  },
  methods: {
    changeStatus(e) {
      // console.log(e.target.value);
      this.currentStatus = e.target.value;
    },
    nextPage() {
      this.currentPage++;
    },
    prevPage() {
      this.currentPage--;
    },

    storeUsers(usersData) {
      const usersResult = {
        name: usersData.name,
        status: usersData.status,
        species: usersData.species,
        type: usersData.type,
        gender: usersData.gender,
        image: usersData.image,
        id: usersData.id,
      };
      this.savedUsersResults.push(usersResult);
      console.log(usersResult);
    },
  },
};
</script>

<style>
html {
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  padding: 0;
  background-image: url("/portal.gif");
  box-sizing: border-box;
}

.logo {
  height: 350px;
  width: 910px;
  display: flex;
  margin: auto;
}
.pagination {
  margin: 30px 0;
  width: 225px;
  display: flex;
  margin: auto;
  justify-content: space-between;
}

button {
  border: none;
  background-color: #47e31e;
  color: #fff;
  font-weight: bold;
  font-size: 1.1rem;
  letter-spacing: 1px;
  padding: 0.7rem 1.2rem;
  border-radius: 40px;
  outline: none;
  cursor: pointer;
}

button:hover {
  background-color: #30a812;
}

.currentPage {
  color: #30a812;
  margin: auto;
}

.status {
  background-color: #47e31e;
  color: rgb(0, 0, 0);
  font-size: inherit;
  border: 0;
  margin: 0;
  width: 15%;
  height: 30px;
  border-radius: 3px;
  text-align: center;
}
.currentPage {
  background-color: black;
  width: 10%;
  text-align: center;
}
</style>
