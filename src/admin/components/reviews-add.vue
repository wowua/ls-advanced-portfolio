<template lang="pug">
  adding-form(
    title="Новый отзыв"
    @submit="addNewReview"
  )
    .reviews__form-content(slot="form-content")
      .reviews__form-userpic
        label.reviews__form-avatar-upload
          input(
            type="file"
            @change="handlePhotoUpload"
          ).reviews__form-file-input
          .reviews__form-pic
            .reviews__form-avatar-empty(
              :class="{'filled' : renderedAvatar.length}"
              :style="{'backgroundImage' : userAvatarUrl}"
            )
          .reviews__form-addphoto Добавить фото
      .reviews__form-col
        .reviews__form-row
          .reviews__form-block
            app-input(
              title="Имя автора"
              v-model="review.author"
            )
          .reviews__form-block
            app-input(
              title="Титул автора"
              v-model="review.occ"
            )
        .reviews__form-row
          .reviews__form-block
            app-input(
              title="Отзыв"
              field-type="textarea"
              v-model="review.text"
            )
</template>

<script>
import { mapActions } from "vuex";
import { renderer, getAbsoluteImgPath } from "@/helpers/pictures";
export default {
  components: {
    appInput: () => import("components/input.vue"),
    appButton: () => import("components/button.vue"),
    addingForm: () => import("components/adding-form.vue")
  },
  data() {
    return {
      renderedAvatar: "",
      review: {
        id: 0,
        author: "",
        occ: "",
        text: "",
        photo: ""
      }
    };
  },
  computed: {
    userAvatarUrl() {
      return `url(${this.renderedAvatar})`
    }
  },
  methods: {
    ...mapActions("reviews", ["addReview"]),
    ...mapActions("tooltips", ["showTooltip"]),
    async addNewReview() {
      try {
        const response = await this.addReview(this.review);

        this.clearFormFields();

        this.showTooltip({
          type: "success",
          text: "Отзыв добавлен"
        })
      } catch (error) {

        this.showTooltip({
          type: "error",
          text: error.message
        })
      }
    },
    clearFormFields() {
      Object.keys(this.review).forEach(key => {
        this.review[key] = "";
      });
      this.renderedAvatar = "";
    },
    async handlePhotoUpload(e) {
      const file = e.target.files[0];
      this.review.photo = file;

      try {
        const renderedResult = await renderer(file); 
        this.renderedAvatar = renderedResult;
      } catch (error) {
        
      }

    }
  }
};
</script>



<style lang="postcss" scoped>
.reviews__form-content {
  display: flex;
  padding-right: 20%;
}

.reviews__form-addphoto {
  text-align: center;
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

.reviews__form-avatar-empty {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: #dee4ed;
  position: relative;

  &:before {
    content: "";
    height: 115px;
    width: 85px;
    background: svg-load("filled-user.svg", fill=#fff) center center no-repeat;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &.filled {
    background: center center no-repeat / cover;
    &:before {
      display: none;
    }
  }
}

.reviews__form-avatar-upload {
  position: relative;
}

.reviews__form-file-input {
  position: absolute;
  top: 0;
  left: -9999px;
}
</style>

