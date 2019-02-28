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
          .add-new
            app-input(
              placeholder="Новый навык"
            )
            button(type="button" data-text="+").add-new__button

</template>
<script>
export default {
  components: {
    skillsCard: () => import("./card.vue"),
    appInput: () => import('./input.vue')
  }
};
</script>

<style lang="postcss" scoped>
.skills {
  margin-bottom: 60px;
}

.skill-list {
  display: flex;
  flex-wrap: wrap;
  margin-left: -30px;
}

.skill-list__item {
  width: calc(100% / 2 - 30px);
  margin-left: 30px;
  margin-bottom: 30px;
}

.skills {
  width: 100%;
}

.skills__cell {
  width: 100%;
}

.skills__input {
  white-space: nowrap;
  position: relative;
  margin-right: 50px;
  &:before {
    content: "%";
    position: absolute;
    right: 0;
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
  width: 15px;
  height: 12px;
  background: svg-load("tick.svg", fill=#d9dbe0) center center no-repeat /
    contain;

  &:hover {
    background-image: svg-load("tick.svg", fill=#21d529);
  }
}

.skills__remove {
  width: 15px;
  height: 12px;
  background: svg-load("trash.svg", fill=#414c62) center center no-repeat /
    contain;
}

.add-new {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.add-new__button {
  width: 40px;
  height: 40px;
  position: relative;
  padding: 0;
  background: linear-gradient(to right, #006aed 0%,#3f35cb 100%) center center;
  border-radius: 50%;
  overflow: hidden;
  display: block;
  margin-left: 34px;

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



