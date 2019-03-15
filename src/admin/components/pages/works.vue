<template lang="pug">
  .works-section
    h1.page-title {{pageTitle}}
    .works-container
      add-new-work(
        v-if="showForm"
        :mode="mode"
      )
      ul.works
        li.works__item
          add-new(
            @click="addNewWork"
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
    card: () => import("components/card.vue"),
    iconedBtn: () => import("components/iconed-btn.vue"),
    tags: () => import("components/tags.vue"),
    addNew: () => import("components/add-new.vue"),
    appInput: () => import("components/input.vue"),
    addNewWork: () => import("components/works-add.vue")
  },
  data() {
    return {
      showForm: false,
      mode: "add"
    };
  },
  methods: {
    addNewWork() {
      this.showForm = true,
      this.mode = "add"
    }
  }
};
</script>

<style lang="postcss" scoped>
@import url("../../../styles/mixins.pcss");

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
