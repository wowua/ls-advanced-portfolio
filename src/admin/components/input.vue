<template lang="pug">
  label.input(
    v-if="type === 'input'" 
    :class="{'input_labeled' : !!title}"
  ) 
    .input__title(v-if="title") {{title}} 
    input(
      v-bind="$attrs"
      type="text"
      :value="value" 
      @input="$emit('input', $event.target.value)"
    ).input__elem

  label.textarea(
    v-else-if="type === 'textarea'"
    v-bind="$attrs"
    :value="value"
    @input="$emit('input', $event.target.value)"
  )
    .input__title(v-if="title") {{title}} 
    textarea.textarea__elem
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    title: String,
    type: {
      type: String,
      default: "input"
    },
    value: String
  }
};
</script>


<style lang="postcss" scoped>
.input {
  display: block;
}

.input__elem {
  width: 100%;
}

.input_labeled {
  .input__elem {
    padding-right: 0;
    padding-left: 0;
  }
}

.input__title {
  color: rgba(65, 76, 99, 0.5);
  font-weight: 600;
  opacity: 0.5;
}

.textarea__elem {
  height: 150px;
  padding: 20px;
  border: 1px solid rgba($text-color, 0.2);
  resize: none;
  font-weight: 600;
  margin-top: 10px;
  width: 100%;
}

.input__elem {
  padding: 10px 2%;
  border: none;
  border-bottom: 1px solid #1f232d;

  &::placeholder {
    color: rgba(55, 62, 66, 0.25);
  }
}
</style>

