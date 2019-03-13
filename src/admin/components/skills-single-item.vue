<template lang="pug">
  tr.skills-row-wrapper
    td.skills__cell {{skill.title}}
    td.skills__cell 
      .skills__input
        input(:value="skill.percents" type="number").skills__input-text
    td.skills__cell
      iconed-btn(
        class="is-tick no-words"
      )
    td.skills__cell          
      iconed-btn(
        class="is-trash no-words"
      )
</template>

<script>
export default {
  components: {
    iconedBtn: () => import("components/iconed-btn.vue")
  },
  props: {
    skill: Object
  }
};
</script>


<style lang="postcss" scoped>
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
