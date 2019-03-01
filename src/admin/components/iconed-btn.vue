<template lang="pug">
  button(
    type="button"
  ).btn
</template>

<style lang="postcss" scoped>
.btn {
  display: inline-flex;
  align-items: center;
  padding: 0;

  &:before {
    content: attr(data-text);
    font-weight: 600;
    color: rgba(65, 76, 99, 0.4);
    margin-right: 10px;
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
}
</style>

