<template lang="pug">
  .edit-form
    card(
      :title="title"
    )
      template(slot="content")
        slot(name="form-content")
        .edit-form__buttons
          .edit-form__buttons-item
            app-button(
              text="Отмена"
              class="plain"
              @click="$emit('cancel')"
            )
          .edit-form__buttons-item
            app-button(
              text="Загрузить"
              @click="$emit('submit')"
              :disabled="disabled"
            )
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Форма добавления элемента"
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  components: {
    card: () => import("components/card.vue"),
    appButton: () => import("components/button.vue")
  }
}
</script>

<style lang="postcss" scoped>

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
</style>


