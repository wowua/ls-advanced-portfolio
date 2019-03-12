<template lang="pug">
  form.add-new-container(
    :class="{'is-blocked' : blocked}"
  )
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
  props: {
    blocked: {
      type: Boolean,
      default: false
    }
  },
  components: {
    appInput: () => import("components/input.vue")
  }
};
</script>


<style lang="postcss" scoped>
.add-new-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;

  &.is-blocked {
    opacity: 0.3;
    filter: grayscale(100%);
    pointer-events: none;
    user-select: none;
    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }
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

