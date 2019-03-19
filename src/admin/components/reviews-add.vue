<template lang="pug">
  .reviews__form
    card(
      title="Новый отзыв"
    )
      template(slot="content")
        .reviews__form-content
          .reviews__form-userpic
            label.reviews__form-avatar-upload
              input(type="file").reviews__form-file-input
              .reviews__form-pic
                //- img(src="~images/content/user.jpg").reviews__form-avatar
                .reviews__form-avatar-empty
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
                  field-type="textarea"
                )
        .reviews__form-buttons
          .reviews__buttons-item
            app-button(
              text="Отмена"
              class="plain"
              @click="cancelAdding"
            )
          .reviews__buttons-item
            app-button(
              text="Загрузить"
              @click="mode === 'add' ? addNewWork() : editWork()"
              :disabled="disabled"
            )
</template>

<script>
export default {
  components: {
    appInput: () => import("components/input.vue"),
    appButton: () => import("components/button.vue")
  }
}
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
    background: svg-load('filled-user.svg', fill=#fff) center center no-repeat;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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

