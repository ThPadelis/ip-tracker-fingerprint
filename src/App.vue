<template>
  <div>
    <header-panel></header-panel>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {
    HeaderPanel: () =>
      import(/* webpackChunkName: "header-panel" */ "@/components/Header.vue")
  }
};
</script>

<style lang="scss">
@import "node_modules/bootstrap/scss/bootstrap";
@import url("https://fonts.googleapis.com/css?family=Ubuntu+Mono:400,400i,700,700i&display=swap");

html,
body {
  font-family: "Ubuntu Mono", monospace;
}
</style>