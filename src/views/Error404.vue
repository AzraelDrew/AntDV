<!--
 * @Author       : yznaisy
 * @Date         : 2020-08-16 17:07:29
 * @LastEditors  : yznaisy
 * @LastEditTime : 2020-08-16 17:12:26
 * @FilePath     : \antdv\src\views\Error404.vue
-->
<template>
  <div>
    <router-link to="/">
      <img src="../assets/images/404.png" alt />
    </router-link>
  </div>
</template>
 
<script>
export default {
  name: "",
  data() {
    return {};
  },
};
</script>
 
<style scoped>
img {
  position: relative;
  left: 50%;
  transform: translate(-50%, 150%);
}
</style>