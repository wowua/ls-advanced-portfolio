import Vue from "vue";
import Flickity from "vue-flickity";

new Vue({
  el: "#reviews-component",
  template: "#reviews",
  components: {
    Flickity
  },
  data() {
    return {
      flickityOptions: {
        groupCells: 2,
        prevNextButtons: false,
        pageDots: false,
        // contain: true,
        cellAlign: 'left'
        // wrapAround: true
      }
    };
  },
  methods: {
    next() {
      this.$refs.flickity.next();
    },
    
    prev() {
      this.$refs.flickity.previous();
    }
  }
});
