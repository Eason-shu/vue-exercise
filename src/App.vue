<!--
 * @Author: EasonShu
 * @Date: 2023-10-26 13:38:07
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-10-26 17:09:30
 * @FilePath: \vue-manger\src\App.vue
-->
<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
};
</script>
<style scoped>
#app .theme-picker {
  display: none;
}
</style>
