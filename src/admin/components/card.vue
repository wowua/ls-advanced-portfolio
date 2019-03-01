<template lang="pug">
  .card-container
    .card(v-if="plain === false")
      .card__title(v-text="title")
        slot(name="title" v-if="!!title === false")
      .card__content
        slot(name="content")

    .card.card_plain(v-if="plain")
      slot(name="default")

</template>

<script>
export default {
  props: {
    title: String,
    plain: {
      type: Boolean,
      default: false
    }
  }
};
</script>


<style lang="postcss" scoped>
.card {
  background: #fff;
  box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.07);
  padding: 0 20px 30px;

  &_plain {
    padding: 0;
  }
}

.card__title {
  padding: 30px 0;
  border-bottom: 1px solid rgba(#1f232d, 0.15);
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 30px;
}
</style>

