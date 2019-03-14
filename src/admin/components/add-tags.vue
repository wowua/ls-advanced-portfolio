<template lang="pug">
  .add-tags
    .add-tags__wrapper
      app-input(
        title="Добавление тега"
        v-model="tags"
        @input='$emit("addingTags", $event)'
      )
    tags(
      :tags="tagsArray"
      :interactive="true"
      @remove="removeTag"
    )
</template>

<script>
export default {
  components: {
    appInput: () => import("./input.vue"),
    tags: () => import("./tags.vue")
  },
  data() {
    return {
      tags: ""
    };
  },
  computed: {
    tagsArray() {
      if (!!this.tags.length === false) return [];

      return this.tags.split(",");
    }
  },
  methods: {
    removeTag(index) {
      const tagsArray = [...this.tagsArray];
      tagsArray.splice(index, 1);

      this.tags = tagsArray.join(",");

      this.$emit('addingTags', this.tags);
    }
  }
};
</script>

<style lang="postcss" scoped>
.add-tags__wrapper {
  margin-bottom: 20px;
}
</style>

