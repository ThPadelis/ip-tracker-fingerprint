import Vue from "vue";

Vue.filter("beautify", text => {
  var beautify = text.replace(/([A-Z])/g, " $1");
  return beautify.charAt(0).toUpperCase() + beautify.slice(1);
});

Vue.filter("prettyArray", array => {
  if (Array.isArray(array)) {
    return array.join(", ");
  } else {
    return array;
  }
});

Vue.filter("uppercase", text => {
  if (text === "") return "-";
  if (!text) return "";
  text = text.toString();
  return text.charAt(0).toUpperCase() + text.slice(1);
});

Vue.filter("json", data => {
  if (Object.prototype.toString.call(data) !== "[object Object]") return data;
  return JSON.stringify(data, null, 2);
});

Vue.filter("truncate", (text, limit = 100, suffix = "...") => {
  if (!text) return false;
  else if (text.length > limit) return text.substring(0, limit) + suffix;
  else return text;
});
