<!--
 * @Author       : yznaisy
 * @Date         : 2020-08-15 17:36:58
 * @LastEditors  : yznaisy
 * @LastEditTime : 2020-08-20 14:09:03
 * @FilePath     : \antdv\src\views\Layout.vue
-->
<template>
  <a-layout class="layout">
    <a-layout-sider class="left-muen" v-model="collapsed" :trigger="null" collapsible>
      <!-- collapsed判断是否收起 -->
      <div class="logo">{{collapsed?"Ant":"AntDV"}}</div>
      <a-menu
        theme="dark"
        mode="inline"
        :defaultOpenKeys="OpenKeys"
        :default-selected-keys="selectedKeys"
      >
        <a-menu-item key="/">
          <router-link to="/" tag="div">
            <a-icon type="radar-chart" />
            <span>数据驾驶舱</span>
          </router-link>
        </a-menu-item>
        <a-sub-menu key="用户管理">
          <span slot="title">
            <a-icon type="line-chart" />
            <span>用户管理</span>
          </span>
          <a-menu-item key="/userlist">
            <router-link to="/userlist" tag="div">
              <span>员工列表</span>
            </router-link>
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="业务管理">
          <span slot="title">
            <a-icon type="line-chart" />
            <span>业务管理</span>
          </span>
          <a-menu-item key="/orderlist">
            <router-link to="/orderlist" tag="div">
              <span>工单列表</span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="3-2">
            <span>投诉列表</span>
          </a-menu-item>
          <a-menu-item key="3-3">客户列表</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="header" style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
        <a-dropdown-button class="dl">
          yznaisy
          <a-menu slot="overlay" @click="handleMenuClick">
            <a-menu-item key="1">
              <a-icon type="edit" />修改密码
            </a-menu-item>
            <a-menu-item key="2" @click="logout">
              <a-icon type="login" />注销登录
            </a-menu-item>
          </a-menu>
          <a-icon slot="icon" type="user" />
        </a-dropdown-button>
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        <Bread />
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import Bread from "../components/Bread";
export default {
  components: {
    Bread,
  },
  data() {
    return {
      collapsed: false,
      current: ["mail"],
      selectedKeys: [],
      OpenKeys: [],
    };
  },

  methods: {
    handleClick(e) {
      console.log("click", e);
    },
    titleClick(e) {
      console.log("titleClick", e);
    },
    handleMenuClick(e) {
      console.log("click", e);
    },
    logout() {
      this.$router.push("/login");
    },
  },
  created() {
    if (this.$route.meta && this.$route.meta.model) {
      this.OpenKeys = [this.$route.meta.model];
    }
    this.selectedKeys = [this.$route.path];
  },
};
</script>
<style lang="less">
.layout {
  height: 100vh;
  .left-muen {
    height: 100vh;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    /*滚动区域背景*/
    &::-webkit-scrollbar-track-piece {
      background-color: rgb(17, 16, 16);
      -webkit-border-radius: 6px;
    }
    /*竖向滚动条*/
    &::-webkit-scrollbar-thumb:vertical {
      height: 5px;
      background-color: rgb(73, 70, 70);
      -webkit-border-radius: 6px;
    }
  }
  .logo {
    height: 32px;
    line-height: 32px;
    color: #fff;
    text-align: center;
    letter-spacing: 2px;
    font-weight: bold;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
  .header {
    display: flex;
    .dl {
      margin-left: auto;
      padding-right: 15px;
    }
  }
  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
      color: #1890ff;
    }
  }
  // .dl {
  //   position: relative;
  //   right: -900px;
  // }
}
</style>
