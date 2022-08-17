import UsersResult from "../UsersResult/UsersResult.vue";

export default {
  props: ["currentPage", "currentStatus"],
  components: {
    UsersResult,
  },
  data() {
    return {
      results: [],
      isLoading: false,
      error: null,
    };
  },

  methods: {
    loadExperiences(page, state = "") {
      this.isLoading = true;
      this.error = null;
      fetch(
        `https://rickandmortyapi.com/api/character?page=${page}&status=${state}`
      )
        .then((response) => {
          if (response.ok) {
            // console.log(response);
            return response.json();
          }
        })
        .then((data) => {
          this.isLoading = false;
          this.results = data.results;
        })
        .catch((error) => {
          console.log(error);
          this.isLoading = false;
          this.error = "Failed to fetch data - please try again later";
        });
    },
  },
  mounted() {
    console.log(this.currentPage);
    console.log(this.currentStatus);
  },
  watch: {
    currentPage: {
      immediate: true,
      handler(page) {
        this.loadExperiences(page, this.currentStatus);
      },
    },
    currentStatus: {
      handler(state) {
        this.loadExperiences(this.currentPage, state);
      },
    },
  },
};
