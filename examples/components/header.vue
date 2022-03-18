<template>
  <div class="headerWrapper">
    <header class="header" ref="header">
      <div class="container">
        <h1>
          <router-link :to="`/zh-CN/component/`">
            <!-- logo -->
            <slot>
              <img
                src="../assets/images/logo.svg"
                alt="element-logo"
                class="nav-logo"
              />
              陆泽组件仓库
            </slot>
          </router-link>
        </h1>
      </div>
    </header>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {},
  created() {},
};
</script>
<style lang="scss" scoped>
.headerWrapper {
  height: 80px;
}

#v3-banner {
  background-color: #409eff;
  min-height: 30px;
  padding: 5px 60px;
  z-index: 19;
  box-sizing: border-box;
  text-align: center;
  color: #eee;
}

#v3-banner a {
  color: #fff;
  font-weight: bold;
}

.header {
  height: 80px;
  background-color: #fff;
  color: #fff;
  top: 0;
  left: 0;
  width: 100%;
  line-height: 80px;
  z-index: 100;
  position: relative;

  .container {
    height: 100%;
    box-sizing: border-box;
    border-bottom: 1px solid #dcdfe6;
  }

  .nav-lang-spe {
    color: #888;
  }

  h1 {
    margin: 0;
    float: left;
    font-size: 32px;
    font-weight: normal;

    a {
      color: #333;
      text-decoration: none;
      display: flex;
      align-items: center;
    }
  }

  .nav-logo {
    width: 50px;
    height: 50px;
    margin-right: 5px;
  }
}

@media (max-width: 700px) {
  .header {
    .container {
      padding: 0 12px;
    }
  }
}
</style>
