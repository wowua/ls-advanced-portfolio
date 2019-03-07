<template lang="pug">
  label.input(
    v-if="type === 'input'" 
    :class="[{'input_labeled' : !!title}, iconClass]"
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
    value: String,
    icon: {
      type: String,
      default: "",
      validator: value => ["", "person", "key"].includes(value)
    }
  },
  computed: {
    iconClass() {
      const iconName = this.icon;
      return iconName.length ? ` input_iconed input_icon-${iconName}` : "";
    }
  }
};
</script>


<style lang="postcss" scoped>
.input {
  display: block;
  position: relative;

  &_labeled {
    .input__elem {
      padding: 15px 0 18px;
    }
  }

  &_iconed {
    .input__title {
      margin-left: 45px;
    }
    .input__elem {
      padding-left: 45px;
      background: left center / auto 23px no-repeat;
    }
  }

  &_icon {
    &-person {
      .input__elem {
        background-image: svg-load("user.svg", fill=#cfd2d7);
      }
    }
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
  width: 100%;
  padding: 10px 8%;
  border: none;
  border-bottom: 1px solid #1f232d;

  &::placeholder {
    color: rgba(55, 62, 66, 0.25);
  }
}
</style>

