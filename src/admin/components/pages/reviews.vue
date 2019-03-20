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
          card
            template(slot="title")
              user(
                :user="constructUserObj(review)"
              )
            .reviews__content(slot="content")
              .reviews__content-text 
                p {{review.text}}
              .reviews__btns
                iconedBtn(
                  class="is-pencil"
                  data-text="Править"
                )
                iconedBtn(
                  class="is-cross"
                  data-text="Удалить"
                )
</template>

<script>
import { mapState, mapActions } from "vuex";
import { getAbsoluteImgPath } from "@/helpers/pictures";

export default {
  props: {
    pageTitle: {
      type: String,
      default: ""
    }
  },
  components: {
    card: () => import("components/card.vue"),
    addNew: () => import("components/add-new.vue"),
    user: () => import("components/user.vue"),
    iconedBtn: () => import("components/iconed-btn.vue"),
    addNewReview: () => import("components/reviews-add.vue")
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
    constructUserObj(data) {
      return {
        name: data.author,
        occ: data.occ,
        avatar: getAbsoluteImgPath(data.photo)
      };
    },
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

.reviews__content {
  min-height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.reviews__content-text {
  line-height: 1.88;
  font-weight: 600;
}
.reviews__btns {
  display: flex;
  justify-content: space-between;
}
</style>


