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
