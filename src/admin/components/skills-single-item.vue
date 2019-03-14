<template lang="pug">
  tr.skills-row-wrapper(
    :class="{'blocked': blocked}"
    v-if="editmode === false"
  )
    td.skills__cell {{skill.title}}
    td.skills__cell 
      .skills__input
        .skills__input-text {{skill.percent}}
    td.skills__cell
      iconed-btn(
        class="is-pencil no-words grayscale"
        @click="editmode = true"
      )
    td.skills__cell          
      iconed-btn(
        class="is-trash no-words grayscale"
        @click="removeExistedSkill"
      )

  tr.skills-row-wrapper(
    v-else
    :class="{'blocked': blocked}"
    @keydown.enter="editSkill"
  )
    td.skills__cell 
      .skills__cell-input-wrapper
        app-input(
          v-model="updatedSkill.title"
          no-side-paddings
        )
    td.skills__cell 
      .skills__input
        input(
          v-model="updatedSkill.percent"
          type="number"
        ).skills__input-text.skills__input-text--input
    td.skills__cell
      iconed-btn(
        class="is-tick no-words"
        @click="editSkill"
      )
    td.skills__cell          
      iconed-btn(
        class="is-cross no-words"
        @click="editmode = false"
      )
</template>

<script>
import { mapActions } from "vuex";
export default {
  components: {
    iconedBtn: () => import("components/iconed-btn.vue"),
    appInput: () => import("components/input.vue")
  },
  data() {
    return {
      blocked: false,
      editmode: false,
      updatedSkill: {
        id: this.skill.id,
        title: this.skill.title,
        percent: this.skill.percent,
        category: this.skill.category
      }
    };
  },
  props: {
    skill: Object
  },
  methods: {
    ...mapActions("skills", ["removeSkill", "updateSkill"]),
    ...mapActions("tooltips", ["showTooltip"]),
    async removeExistedSkill() {
      if (confirm("удалить запись?") === false) return;

      this.blocked = true;
      try {
        const { data } = await this.removeSkill(this.skill.id);

        this.showTooltip({
          type: "success",
          text: data.message
        });
      } catch (error) {
        this.showTooltip({
          type: "error",
          text: error.message
        });
      } finally {
        this.blocked = false;
      }
    },

    async editSkill() {
      try {
        const response = await this.updateSkill(this.updatedSkill);
        this.editmode = false;

        this.showTooltip({
          type: "success",
          text: "Скилл обновлен"
        })      
      } catch (error) {
        this.showTooltip({
          type: "error",
          text: error.message
        })      
      }
    }
  }
};
</script>


<style lang="postcss" scoped>
.skills-row-wrapper {
  &.blocked {
    opacity: 0.5;
    pointer-events: none;
    filter: grayscale(100%);
  }
}
.skills__cell {
  padding-bottom: 4px;
  &:first-child {
    width: 60%;
  }
}

.skills__input {
  white-space: nowrap;
  position: relative;
  margin-right: 50px;
  display: inline-flex;
  &:before {
    content: "%";
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: rgba(65, 76, 99, 0.7);
    opacity: 0.7;
  }
}

.skills__input-text {
  width: 75px;
  background: transparent;
  border: none;
  padding: 9px 15px 9px 9px;
  position: relative;

  &--input {
    border-bottom: 1px solid #1f232d;
  }
}

.skills__cell-input-wrapper {
  margin-right: 20px;
}
</style>
