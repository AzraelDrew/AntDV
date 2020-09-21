<!--
 * @Author       : yznaisy
 * @Date         : 2020-08-20 14:07:40
 * @LastEditors  : yznaisy
 * @LastEditTime : 2020-08-20 14:07:56
 * @FilePath     : \antdv\src\components\Bread.vue
-->
<template>
  <a-breadcrumb>
    <a-breadcrumb-item>AntDV</a-breadcrumb-item>
    <a-breadcrumb-item v-if="$route.meta.model">
      <a href>{{$route.meta.model}}</a>
    </a-breadcrumb-item>
    <a-breadcrumb-item>
      <a href>{{$route.meta.title}}</a>
    </a-breadcrumb-item>
  </a-breadcrumb>
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
</style>