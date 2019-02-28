<template lang="pug">
  input(type="text" placeholder="Новый навык").input
</template>

<style lang="postcss" scoped>
.input {
  padding: 10px 2%;
  border: none;
  border-bottom: 1px solid #1f232d;

  &::placeholder {
    color: rgba(55, 62, 66, 0.25);
  }
}
</style>

