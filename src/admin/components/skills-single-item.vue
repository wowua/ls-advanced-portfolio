<template lang="pug">
  tr.skills-row-wrapper(
    :class="{'blocked': blocked}"
  )
    td.skills__cell {{skill.title}}
    td.skills__cell 
      .skills__input
        input(:value="skill.percent" type="number").skills__input-text
    td.skills__cell
      iconed-btn(
        class="is-pencil no-words grayscale"
      )
    td.skills__cell          
      iconed-btn(
        class="is-trash no-words grayscale"
        @click="removeExistedSkill"
      )
</template>

<script>
import { mapActions } from "vuex";
export default {
  components: {
    iconedBtn: () => import("components/iconed-btn.vue")
  },
  data() {
    return {
      blocked: false
    }
  },
  props: {
    skill: Object
  },
  methods: {
    ...mapActions("skills", ["removeSkill"]),
    ...mapActions("tooltips", ["showTooltip"]),
    async removeExistedSkill() {
      this.blocked = true
      try {
        const { data } = await this.removeSkill(this.skill.id);

        this.showTooltip({
          type: 'success',
          text: data.message
        })

      } catch (error) {
        this.showTooltip({
          type: 'error',
          text: error.message
        })
      } finally {
        this.blocked = false
      }
    }
  }
};
</script>


<style lang="postcss" scoped>
.skills-row-wrapper {
  &.blocked {
    opacity: .5;
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
  border-bottom: 1px solid #1f232d;
  padding: 9px 15px 9px 9px;
  position: relative;
}
</style>
