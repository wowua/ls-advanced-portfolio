<template lang="pug">
  button(
    type="button"
  ).btn
    .btn__text
      .btn__sign
      .btn__title {{title}}
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Добавить работу"
    }
  }
}
</script>


<style lang="postcss" scoped>
.btn {
  background: linear-gradient(to right, #006aed, #3f35cb) center center no-repeat;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
}

.btn__sign {
  display: block;
  width: 164px;
  height: 164px;
  border-radius: 50%;
  border: 2px solid #fff;
  position: relative;
  margin-bottom: 30px;
  width: 164px;

  &:before {
    content: "+";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 72px;
    font-weight: 300;
    color: #fff;
  }
}

.btn__title {
  font-size: 18px;
  color: #fff;
  font-weight: bold;
}
</style>

