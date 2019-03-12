<template lang="pug">
  .about-page-container
    .about-page__title
      h1.page-title {{pageTitle}}
      button.about-page__add-new(
        v-if="showAddingCard === false"
        @click="showAddingCard = true"
      ) Добавить группу
    ul.skill-list
      li.skill-list__item(v-if="showAddingCard")
        add-new-skills-group(
          @closeOrRemove="close"
          @approve="storeSkillsGroup"
        )
      li.skill-list__item(v-for="n in 4")
        skills-card(
          title="Frontend"
        ) 
          template(slot="content")
            table.skills
              tr(v-for="n in 3")
                td.skills__cell Html 5
                td.skills__cell 
                  .skills__input
                    input(value="100" type="number").skills__input-text
                td.skills__cell
                  iconed-btn(
                    class="is-tick no-words"
                  )
                td.skills__cell          
                  iconed-btn(
                    class="is-trash no-words"
                  )
            .add-new
              add-new-skill
</template>
<script>
export default {
  components: {
    skillsCard: () => import("components/card.vue"),
    appInput: () => import("components/input.vue"),
    iconedBtn: () => import("components/iconed-btn.vue"),
    addNewSkillsGroup: () => import("components/skills-add-group.vue"),
    addNewSkill: () => import("components/skills-add-item.vue")
  },
  props: {
    pageTitle: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      showAddingCard: false
    };
  },
  methods: {
    close() {
      this.showAddingCard = false;
    },
    storeSkillsGroup() {
      
    }
  }
};
</script>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";

.about-page__title {
  display: flex;
  align-items: center;
  margin-bottom: 60px;

  .page-title {
    margin-bottom: 0;
    margin-right: 60px;
  }
}

.about-page__add-new {
  color: $links-color;
  font-weight: bold;
  display: flex;
  align-items: center;

  &:before {
    content: "+";
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-image: linear-gradient(to right, #006aed, #3f35cb);
    color: #fff;
    margin-right: 13px;
  }
}

.skills {
  margin-bottom: 60px;

  tr:last-child {
    .skills__cell {
      padding-bottom: 0;
    }
  }
}

.skill-list {
  display: flex;
  flex-wrap: wrap;
  margin-left: -30px;
  @include phones {
    margin-left: 0;
  }
}

.skill-list__item {
  width: calc(100% / 2 - 30px);
  margin-left: 30px;
  margin-bottom: 30px;

  @include phones {
    width: 100%;
    margin-left: 0;
  }
}

.skills {
  width: 100%;
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

.add-new {
  padding-left: 18%;
  position: relative;
}
</style>



