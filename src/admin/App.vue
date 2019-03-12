<template lang="pug">
  div.root-container
    template(v-if="$route.meta.public")
      router-view

    template(v-else)
      header.header-container
        app-header
      section.tabs-container
        tabs
      main.content-container
        .container
          router-view(:pageTitle="$route.meta.title")
</template>

<script>
export default {
  components: {
    appHeader: () => import("components/header.vue"),
    tabs: () => import("components/tabs")
  }
};
</script>


<style lang="pcss">
@import "normalize.css";
@import "../styles/mixins.pcss";
@import "../styles/layout/base.pcss";

.header-container {
  background: linear-gradient(to right, #3e3e59, #454573);
  padding: 15px 0;
}

.root-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.content-container {
  background: url("~images/bg/admin.jpg") center center no-repeat / cover;
}

.admin-wrapper {
  display: flex;

  .maincontent {
    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
}

.content-container {
  flex: 1;
  padding-top: 60px;
}

.page-title {
  margin-bottom: 60px;
  font-size: 21px;
  font-weight: bold;
}

button {
  background: transparent;
}
</style>

