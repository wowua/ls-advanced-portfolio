<template lang="pug">
  .reviews-section
    h1.page-title {{pageTitle}}
    .reviews-container
      .reviews__form    
        add-new-review
      ul.reviews
        li.reviews__item
          add-new
        li.reviews__item
          card
            template(slot="title")
              user
            .reviews__content(slot="content")
              .reviews__content-text 
                p Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
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
export default {
  props: {
    pageTitle : {
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


