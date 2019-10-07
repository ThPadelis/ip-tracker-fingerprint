<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h1>IP Tracker &amp; Fingerprint</h1>
        <p>This project is for educational purposes only. No data is being stored.</p>
        <p>
          Check out the code on
          <a href="#">Github</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "header-card"
};
</script>

<style scoped lang="scss">
.container {
  padding-top: 3em;
  padding-bottom: 3em;

  p {
    &:last-child {
      margin-bottom: 0px;
    }
  }
}
</style>