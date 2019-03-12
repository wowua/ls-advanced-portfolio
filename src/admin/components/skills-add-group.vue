<template lang="pug">
  .add-new-skills-group
    skills-card
      template(slot="title")
        .skills-card-title
          .skills-card-title__input
            app-input(
              placeholder="Название новой группы"
              :value="value"
              @input="$emit('input', $event)"
              no-side-paddings
            )
          .skills-card-title__buttons
            .skills-card-title__btn
              iconed-btn(
                class="is-tick no-words"
                @click="$emit('approve')"
              )
            .skills-card-title__btn
              iconed-btn(
                class="is-cross no-words"
                @click="$emit('closeOrRemove')"
              )
      template(slot="content")
        .add-new
          add-new-skill(
            :blocked="addingBlocked"
          )
</template>

<script>
export default {
  components: {
    skillsCard: () => import("components/card.vue"),
    appInput: () => import("components/input.vue"),
    iconedBtn: () => import("components/iconed-btn.vue"),
    addNewSkill: () => import("components/skills-add-item.vue")
  },
  props: {
    value: String
  },
  data() {
    return {
      addingBlocked: true,
      editMode: true,
    }
  }
};
</script>

<style lang="pcss" scoped>
.add-new {
  padding-left: 18%;
  margin-top: auto;
}
.add-new-skills-group {
  height: 100%;
}
.skills-card-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.skills-card-title__input {
  width: 60%;
}

.skills-card-title__buttons {
  display: flex;
}

.skills-card-title__btn {
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }
}
</style>


