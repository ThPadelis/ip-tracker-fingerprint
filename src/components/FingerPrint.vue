<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h4 class="mb-4">Fingerprint</h4>

        <div class="table-responsive">
          <table class="table table-sm table-striped table-borderless">
            <tbody>
              <tr v-for="(f, index) in fingerprint" :key="index">
                <td>{{f.key | beautify}}</td>
                <td
                  v-clipboard:copy="f.value"
                  v-clipboard:success="onCopy"
                  v-clipboard:error="onError"
                >{{f.value | prettyArray | uppercase}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import fp2 from "fingerprintjs2";
export default {
  name: "fingerprint",
  data() {
    return {
      fingerprint: null
    };
  },
  mounted() {
    this.getFingerprint().then(data => {
      this.fingerprint = data;
    });
  },
  methods: {
    getFingerprint() {
      return new Promise(resolve => {
        fp2.get(components => {
          resolve(components);
        });
      });
    },

    onCopy: function() {
      this.$swal({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        type: "success",
        title: "Copied to clipboard"
      });
    },

    onError: function() {
      this.$swal({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        type: "danger",
        title: "Failed to copy text"
      });
    }
  }
};
</script>