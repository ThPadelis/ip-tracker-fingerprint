<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h4 class="mb-4">IP Data</h4>

        <div class="table-responsive w-100" v-if="ipData">
          <table class="table table-sm table-striped table-borderless">
            <tbody>
              <tr v-for="(value, name, index) in ipData" :key="index">
                <td>{{name | beautify}}</td>
                <td>{{value | uppercase}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ip-tracker",
  filters: {
    beautify(text) {
      var beautify = text.replace(/([A-Z])/g, " $1");
      return beautify.charAt(0).toUpperCase() + beautify.slice(1);
    },
    uppercase(value) {
      if (value === "") return "-";
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },
  data() {
    return {
      ipData: null
    };
  },
  beforeMount() {
    this.getIpInfo();
  },
  methods: {
    getIpInfo() {
      axios
        .get("https://extreme-ip-lookup.com/json/")
        .then(response => (this.ipData = response.data));
    }
  }
};
</script>

<style>
</style>