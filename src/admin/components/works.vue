<template lang="pug">
  .works-container
    .edit-form
      card(
        title="Редактирование работы"
      )
        div(slot="content").edit-form__container
          .edit-form__col
            .edit-form__pic
              img(src="~images/content/slider-1.jpg").edit-form__img
            .edit-form__btn
              a.edit-form__change-pic Изменить превью
          .edit-form__col
            .edit-form__row
              app-input(
                title="Название"
              )
            .edit-form__row
              app-input(
                title="Ссылка"
              )
            .edit-form__row
              app-input(
                title="Описание"
                type="textarea"
              )
            .edit-form__row
              add-tags

    ul.works
      li.works__item
        add-new
      li.works__item(v-for="n in 5")
        card(plain)
          .works__pic
            img(src="~images/content/slider-1.jpg").works__image
            .works__tag
              tags(
                :tags="['Html', 'Css', 'Javascript']"
              )
          .works__data
            .works__title Сайт школы образования
            .works__text
              p Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
            a.works__link http://loftschool.com
            .works__btns
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
  components: {
    iconedBtn: () => import("./iconed-btn.vue"),
    card: () => import("./card.vue"),
    tags: () => import("./tags.vue"),
    addNew: () => import("./add-new.vue"),
    appInput: () => import("./input.vue"),
    addTags: () => import("./add-tags.vue")
  }
};
</script>

<style lang="postcss" scoped>
@import url("../../styles/mixins.pcss");

.edit-form {
  margin-bottom: 30px;
}

.edit-form__row {
  margin-bottom: 30px;
}

.edit-form__container {
  display: flex;
  @include tablets {
    flex-direction: column;
    padding: 0 16%;
  }

  @include phones {
    padding: 0;
  }
}

.edit-form__change-pic {
  color: #383bcf;
  font-weight: 600;
}

.edit-form__btn {
  text-align: center;
}

.edit-form__pic {
  margin-bottom: 30px;
  height: 260px;
}


.edit-form__img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.edit-form__col {
  flex: 1;
  margin-right: 30px;

  @include tablets {
    margin-right: 0;
    margin-bottom: 50px;
  }

  &:first-child {
    max-width: 46%;
    @include tablets {
      max-width: 100%;
    }
  }

  &:last-child {
    margin-right: 0;
    @include tablets {
      margin-bottom: 0px;
    }
  }
}

.works {
  display: flex;
  flex-wrap: wrap;
  margin-left: -30px;
  @include phones {
    margin-left: 0;
  }
}

.works__item {
  width: calc(100% / 3 - 30px);
  margin-left: 30px;
  margin-bottom: 30px;

  @include tablets {
    width: calc(100% / 2 - 30px);
  }

  @include phones {
    width: 100%;
    margin-left: 0;
  }
}
.works__title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
}

.works__text {
  font-weight: 600;
  line-height: 1.88;
  color: rgba(65, 76, 99, 0.5);
  margin-bottom: 20px;
}

.works__link {
  display: block;
  font-weight: 600;
  color: #383bcf;
  margin-bottom: 44px;
}

.works__btns {
  display: flex;
  justify-content: space-between;
}

.works__pic {
  height: 190px;
  position: relative;
}

.works__tag {
  position: absolute;
  bottom: 2px;
  right: 0;
}

.works__image {
  object-fit: cover;
  height: 100%;
  width: 100%;
}

.works__data {
  padding: 40px 30px;
}
</style>
