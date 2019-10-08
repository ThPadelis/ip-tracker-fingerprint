<template>
  <div>
    <header>
      <header-panel></header-panel>
    </header>

    <main>
      <section>
        <ip-tracker></ip-tracker>
      </section>

      <section>
        <finger-print></finger-print>
      </section>
    </main>

    <footer>
      <footer-section></footer-section>
    </footer>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {
    HeaderPanel: () =>
      import(/* webpackChunkName: "header-panel" */ "@/components/Header.vue"),
    IpTracker: () =>
      import(/* webpackChunkName: "ip-tracker" */ "@/components/IpTracker.vue"),
    FingerPrint: () =>
      import(
        /* webpackChunkName: "finger-print" */ "@/components/FingerPrint.vue"
      ),
    FooterSection: () =>
      import(
        /* webpackChunkName: "footer-section" */ "@/components/FooterSection.vue"
      )
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

header,
footer,
section {
  padding-top: 3rem;
  padding-bottom: 3rem;
  border-bottom: solid thin #dee2e6;
}
</style>