<template lang="pug">
  ul.skill-list
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
                button.skill__button.skills__check
              td.skills__cell          
                button.skill__button.skills__remove
          form.add-new
              .add-new__inputs
                .add-new__col
                  app-input(
                    placeholder="Новый навык"
                  )
                .add-new__col.add-new__col_small
                  app-input
              button(type="submit" data-text="+").add-new__button

</template>
<script>
export default {
  components: {
    skillsCard: () => import("./card.vue"),
    appInput: () => import("./input.vue")
  }
};
</script>

<style lang="postcss" scoped>
@import "../../styles/mixins.pcss";
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

.skills__check {
  width: 10px;
  height: 18px;
  margin-right: 11px;
  background: svg-load("tick.svg", fill=#d9dbe0) center center no-repeat /
    contain;

  &:hover {
    background-image: svg-load("tick.svg", fill=#21d529);
  }
}

.skills__remove {
  width: 15px;
  height: 22px;
  background: svg-load("trash.svg", fill=#414c62) center center no-repeat /
    contain;
}

.add-new {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-left: 18%;
}

.add-new__inputs {
  display: flex;
  width: 100%;
}

.add-new__col {
  margin-right: 10px;
  flex: 1;

  &:last-child {
    margin-right: 0;
  }
  &_small {
    width: 75px;
    flex: initial;
  }
}

.add-new__button {
  width: 40px;
  height: 40px;
  position: relative;
  padding: 0;
  background: linear-gradient(to right, #006aed 0%, #3f35cb 100%) center center;
  border-radius: 50%;
  overflow: hidden;
  display: block;
  margin-left: 34px;
  flex-shrink: 0;

  &:before {
    content: attr(data-text);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 30px;
    color: #fff;
    font-weight: 600;
  }
}
</style>



