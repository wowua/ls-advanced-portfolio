<template lang="pug">
  adding-form(
    :title="editFormTitle"
    @cancel="cancelAdding"
    @submit="mode === 'add' ? addNewWork() : editWork()",
    :disabled="disableForm"
  )
    template(slot="form-content")
      .edit-form__container
        .edit-form__col
          .edit-form__btn(
            v-if="renderedPhoto.length"
          )
            .edit-form__pic(
              :style="{'backgroundImage' : workPhotoUrl}"
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
              v-model="work.title"
            )
          .edit-form__row
            app-input(
              title="Ссылка"
              v-model="work.link"
            )
          .edit-form__row
            app-input(
              title="Описание"
              fieldType="textarea"
              v-model="work.description"
            )
          .edit-form__row
            add-tags(
              v-model="work.techs"
              @removeTag="value => this.work.techs = value"
            )
</template>

<script>
import { mapActions, mapState } from "vuex";
import { renderer, getAbsoluteImgPath } from "@/helpers/pictures";

export default {
  props: {
    mode: {
      type: String,
      default: "add",
      validator: value => ["add", "edit"].includes(value)
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  components: {
    appInput: () => import("components/input.vue"),
    addTags: () => import("components/add-tags.vue"),
    addingForm: () => import("components/adding-form.vue"),
    appButton: () => import("components/button.vue")
  },
  data() {
    return {
      disableForm: this.disabled,
      renderedPhoto: "",
      work: {
        id: 0,
        title: "",
        techs: "",
        link: "",
        photo: "",
        description: ""
      }
    };
  },
  computed: {
    ...mapState("works", {
      currentWork: state => state.currentWork
    }),
    workPhotoUrl() {
      return `url(${this.renderedPhoto})`;
    },
    editFormTitle() {
      switch (this.mode) {
        case "edit":
          return "Редактирование работы";
        case "add":
          return "Добавление работы";
      }
    }
  },
  created() {
    if (this.mode === "edit") {
      this.fillFormWithCurrentWorkData();
    }
  },
  watch: {
    currentWork(value) {
      if (this.mode === "edit") {
        this.fillFormWithCurrentWorkData();
      }
    },
    mode(value) {
      if (value === 'add') {
        this.clearFormFields();
      }
    }
  },
  methods: {
    ...mapActions("works", ["storeWork", "updateWork"]),
    ...mapActions("tooltips", ["showTooltip"]),
    async editWork() {
      this.updateWork(this.work);
    },
    async addNewWork() {
      this.disableForm = true;
      try {
        const response = await this.storeWork(this.work);

        this.$emit("closeForm");
        this.clearFormFields();

        this.showTooltip({
          text: "Работа создана",
          type: "success"
        });
      } catch (error) {
        this.showTooltip({
          type: "error",
          text: error.message
        });
      } finally {
        this.disableForm = false;
      }
    },
    cancelAdding() {
      this.clearFormFields();
      this.$emit("closeForm");
    },
    clearFormFields() {
      Object.keys(this.work).forEach(key => {
        this.work[key] = "";
      });
      this.renderedPhoto = "";
    },
    fillFormWithCurrentWorkData() {
      Object.keys(this.work).forEach(key => {
        this.work[key] = this.currentWork[key];
      });
      this.renderedPhoto = getAbsoluteImgPath(this.currentWork.photo);
    },
    async handlePhotoUpload(e) {
      const file = e.target.files[0];
      this.work.photo = file;

      try {
        const rendererResult = await renderer(file);
        this.renderedPhoto = rendererResult;
      } catch (error) {
        this.showTooltip({
          type: "error",
          text: error.message
        });
      }
    }
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
</style>
