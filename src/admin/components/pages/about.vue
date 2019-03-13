<template lang="pug">
  .about-page-container
    .about-page__title
      h1.page-title {{pageTitle}}
      button.about-page__add-new(
        v-if="showAddingCard === false"
        @click="showAddingCard = true"
      ) Добавить группу
    ul.skill-list
      li.skill-list__item(
        v-if="showAddingCard"
        :class="{'loading': loading}"
      )
        add-new-skills-group(
          v-model="title"
          @closeOrRemove="close"
          @approve="addSkillsGroup"
        )
      li.skill-list__item(v-for="skillsCategory in skillsCategories")
        skills-card(
          :title="skillsCategory.category"
        ) 
          template(slot="content")
            skills-table(
              :categoryId="skillsCategory.id"
            )
            .add-new
              add-new-skill(
                :categoryId="skillsCategory.id"
              )
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  components: {
    skillsCard: () => import("components/card.vue"),
    appInput: () => import("components/input.vue"),
    iconedBtn: () => import("components/iconed-btn.vue"),
    addNewSkillsGroup: () => import("components/skills-add-group.vue"),
    addNewSkill: () => import("components/skills-add-item.vue"),
    skillsTable: () => import("components/skills-items.vue")
  },
  props: {
    pageTitle: {
      type: String,
      default: ""
    }
  },
  computed: {
    ...mapState("skills", {
      skillsCategories: state => state.categories
    })
  },
  data() {
    return {
      showAddingCard: false,
      loading: false,
      title: ""
    };
  },
  created() {
    this.collectCategories();
  },
  methods: {
    ...mapActions("skills", ["storeSkillsGroup", "fetchCategories"]),
    ...mapActions("tooltips", ["showTooltip"]),
    close() {
      this.showAddingCard = false;
    },
    async collectCategories() {
      try {
        this.fetchCategories();
      } catch (error) {
        this.showTooltip({
          type: "error",
          text: error.message
        });
      }
    },
    async addSkillsGroup() {
      this.loading = true;
      try {
        const response = await this.storeSkillsGroup({
          title: this.title
        });

        this.showAddingCard = false;
        this.fetchCategories();

        this.showTooltip({
          type: "success",
          text: "Группа создана"
        });
      } catch (error) {
        this.showTooltip({
          type: "error",
          text: error.message
        });
      } finally {
        this.loading = false;
      }
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

  &.loading {
    opacity: 0.5;
    pointer-events: none;
    filter: grayscale(100%);
  }

  @include phones {
    width: 100%;
    margin-left: 0;
  }
}

.add-new {
  padding-left: 18%;
  position: relative;
}
</style>



