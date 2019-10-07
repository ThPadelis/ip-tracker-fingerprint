<template>
  <div>
    <header-panel></header-panel>

    <main>
      <ip-tracker></ip-tracker>
    </main>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {
    HeaderPanel: () =>
      import(/* webpackChunkName: "header-panel" */ "@/components/Header.vue"),
    IpTracker: () =>
      import(/* webpackChunkName: "ip-tracker" */ "@/components/IpTracker.vue")
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