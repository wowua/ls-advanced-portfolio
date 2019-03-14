<template lang="pug">
  .works-section
    h1.page-title {{pageTitle}}
    .works-container
      .edit-form(
        v-if="showForm"
      )
        card(
          :title="editFormTitle"
        )
          template(slot="content")
            .edit-form__container
              .edit-form__col

                .edit-form__btn(
                  v-if="renderedPhoto.length"
                )
                  .edit-form__pic(
                    :style="{'backgroundImage' : renderedPhoto}"
                  )
                  label.edit-form__change-preview
                    a.edit-form__change-pic Изменить превью
                    input(type="file" @change="handlePhotoUpload").edit-form__preview-input

                label.edit-from__picture(v-else)
                  .edit-form__picture-text
                    | Перетащите либо загрузите изображения
                  app-button(
                    elem="file"
                    text="Загрузить"
                    @change="handlePhotoUpload"
                  )

              .edit-form__col
                .edit-form__row
                  app-input(
                    title="Название"
                    v-model="newWork.title"
                  )
                .edit-form__row
                  app-input(
                    title="Ссылка"
                    v-model="newWork.link"
                  )
                .edit-form__row
                  app-input(
                    title="Описание"
                    fieldType="textarea"
                  )
                .edit-form__row
                  add-tags(
                    @addingTags="value => this.newWork.techs = value"
                  )
            .edit-form__buttons
              .edit-form__buttons-item
                app-button(
                  text="Отмена"
                  class="plain"
                )
              .edit-form__buttons-item
                app-button(
                  text="Загрузить"
                  @click="addNewWork"
                )

      ul.works
        li.works__item
          add-new(
            @click="showForm = true"
          )
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
import { mapActions } from "vuex";
export default {
  props: {
    pageTitle: {
      type: String,
      default: ""
    }
  },
  components: {
    iconedBtn: () => import("components/iconed-btn.vue"),
    card: () => import("components/card.vue"),
    tags: () => import("components/tags.vue"),
    addNew: () => import("components/add-new.vue"),
    appInput: () => import("components/input.vue"),
    addTags: () => import("components/add-tags.vue"),
    appButton: () => import("components/button.vue")
  },
  data() {
    return {
      showForm: true,
      mode: "add",
      renderedPhoto: "",
      newWork: {
        title: "",
        techs: "",
        link: "",
        photo: ""
      }
    };
  },
  computed: {
    editFormTitle() {
      switch (this.mode) {
        case "edit":
          return "Редактирование работы";
        case "add":
          return "Добавление работы";
      }
    }
  },
  methods: {
    ...mapActions("works", ["storeWork"]),
    ...mapActions("tooltips", ["showTooltip"]),
    async addNewWork() {
      try {
        const response = await this.storeWork(this.newWork);
        this.showTooltip({
          text: "Работа создана",
          type: "success"
        });
      } catch (error) {
        this.showTooltip({
          type: "error",
          text: error.message
        });
      }
    },
    handlePhotoUpload(e) {
      const file = e.target.files[0];
      const reader = new FileReader();

      this.newWork.photo = file;

      reader.readAsDataURL(file);
      reader.onloadend = () => {
        this.renderedPhoto = `url(${reader.result})`;
      };
    }
  }
};
</script>

<style lang="postcss" scoped>
@import url("../../../styles/mixins.pcss");

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

.edit-form__buttons {
  display: flex;
  justify-content: flex-end;
}

.edit-form__buttons-item {
  margin-right: 20px;

  &:last-child {
    margin-right: 0px;
  }
}

.edit-form__change-pic {
  color: #383bcf;
  font-weight: 600;
}

.edit-from__picture {
  display: block;
  min-height: 276px;
  border: dashed 1px #a1a1a1;
  background-color: #dee4ed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 24%;
  cursor: pointer;
}

.edit-form__picture-text {
  margin-bottom: 22px;
  color: rgba(65, 76, 99, 0.5);
  line-height: 2.12;
  font-weight: 600;
  text-align: center;
}

.edit-form__btn {
  text-align: center;
}

.edit-form__pic {
  margin-bottom: 30px;
  height: 260px;
  background: center center no-repeat / cover;
}

.edit-form__change-preview {
  position: relative;
}

.edit-form__preview-input {
  position: absolute;
  top: 0;
  left: -9999px;
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
