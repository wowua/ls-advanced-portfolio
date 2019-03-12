<template lang="pug">
  button(
    type="button"
    v-on="$listeners"
  ).btn
</template>

<style lang="postcss" scoped>
.btn {
  display: inline-flex;
  align-items: center;
  padding: 0;

  &.no-words {
    &:after {
      width: 13px;
      height: 18px;
    }

    &:before {
      margin-right: 0;
    }
  }

  &:before {
    content: attr(data-text);
    font-weight: 600;
    color: rgba(65, 76, 99, 0.4);
    margin-right: 18px;
  }

  &:after {
    content: "";
    width: 17px;
    height: 17px;
    display: block;
  }

  &.is-pencil {
    &:after {
      background: svg-load('pencil.svg', fill=#3942cc) center center no-repeat / contain;
    }
  }

  &.is-cross {
    &:after {
      background: svg-load('remove.svg', fill=#c73033) center center no-repeat / contain;
    }
  }
  &.is-tick {
    &:after {
      background: svg-load('tick.svg', fill=#00d70a) center center no-repeat / contain;
    }
  }
  &.is-trash {
    &:after {
      background: svg-load('trash.svg', fill=#414c62) center center no-repeat / contain;
    }
  }
}
</style>

