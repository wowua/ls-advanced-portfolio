<template lang="pug">
  .reviews-section
    h1.page-title {{pageTitle}}
    .reviews-container
      .reviews__form    
        add-new-review
      ul.reviews
        li.reviews__item
          add-new
        li.reviews__item(v-for="review in reviews")
          reviews-item(
            :review="review"
          )
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  props: {
    pageTitle: {
      type: String,
      default: ""
    }
  },
  components: {
    addNew: () => import("components/add-new.vue"),
    addNewReview: () => import("components/reviews-add.vue"),
    reviewsItem: () => import("components/reviews-item.vue")
  },
  computed: {
    ...mapState("reviews", {
      reviews: state => state.reviews
    })
  },
  created() {
    this.collectReviews();
  },
  methods: {
    ...mapActions("reviews", ["fetchReviews"]),
    ...mapActions("tooltips", ["showTooltip"]),
    async collectReviews() {
      try {
        await this.fetchReviews();
      } catch (error) {
        this.showTooltip({
          type: "error",
          text: "Не удалось загурузить отзывы"
        });
      }
    }
  }
};
</script>

<style lang="postcss" scoped>
.reviews {
  display: flex;
  flex-wrap: wrap;
  margin-left: -30px;
}

.reviews__item {
  margin-left: 30px;
  width: calc(100% / 3 - 30px);
  margin-bottom: 30px;
}

.reviews__form {
  margin-bottom: 30px;
}
</style>


