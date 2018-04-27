new Vue({
  el: '#app',
  data: {
    items: [],
    newSearch: 'anime',
    lastSearch: '',
    loading: false
  },
  computed: {
    noMoreItems() {
      return this.items.length === this.results.length && this.results.length > 0;
    }
  },
    methods: {
      onSubmit() {
        if (this.newSearch.length) {
          this.items=[];
          this.loading = true;
          this.$http
          .get('/search/'.concat(this.newSearch))
          .then( function(res) {
            this.lastSearch = this.newSearch;
            this.items = res.data;
            this.loading = false;
          });
        }
      }
    },
  filters: {
    capitalize(valueIn) {
      return valueIn.toUpperCase();
    }
  },
  mounted: function() {
    this.onSubmit();
  }
});
