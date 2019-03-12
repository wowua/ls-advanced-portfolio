<template lang="pug">
  .reviews-section
    h1.page-title {{pageTitle}}
    .reviews-container
      .reviews__form
        card(
          title="Новый отзыв"
        )
          div(slot="content").reviews__form-content
            .reviews__form-userpic
              .reviews__form-pic
                img(src="~images/content/user.jpg").reviews__form-avatar
              .reviews__form-addphoto Добавить фото
            .reviews__form-col
              .reviews__form-row
                .reviews__form-block
                  app-input(
                    title="Имя автора"
                  )
                .reviews__form-block
                  app-input(
                    title="Титул автора"
                  )
              .reviews__form-row
                .reviews__form-block
                  app-input(
                    title="Отзыв"
                    type="textarea"
                  )
          
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
    appInput: () => import("components/input.vue")
  }
};
</script>

<style lang="postcss" scoped>

.reviews {
  display: flex;
  flex-wrap: wrap;
  margin-left: -30px;
}

.reviews__form-content {
  display: flex;
  padding-right: 20%;
}

.reviews__form-row {
  display: flex;
  margin-bottom: 40px;
}
.reviews__form-col {
  flex: 1;
}

.reviews__form-block {
  flex: 1;
  margin-right: 30px;

  &:last-child {
    margin-right: 0;
  }
}
.reviews__form-addphoto {
  color: #383bcf;
  font-weight: 600;
}

.reviews__form-pic {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 27px;
}

.reviews__form-userpic {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 30px;
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


