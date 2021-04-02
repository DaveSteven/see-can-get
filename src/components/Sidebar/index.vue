<template>
  <div class="sidebar-wrapper">
    <div class="sidebar-content">
      <div class="tool" @click="handleClick">
        <i class="el-icon-box"></i>
        <div>素材</div>
      </div>
      <div class="tool">照片</div>
    </div>
    <el-drawer
        :modal="false"
        :show-close="false"
        :append-to-body="true"
        :withHeader="false"
        :size="280"
        direction="ltr"
        v-model="innerDrawer"
    >
      <div class="drawer-wrapper">
        <i class="el-icon-guide" style="font-size: 40px;"></i>
      </div>
    </el-drawer>
  </div>
</template>
<script setup>
import { ref, onMounted, useContext } from 'vue'
let innerDrawer = ref(false)
const handleClick = () => {
  innerDrawer.value = !innerDrawer.value
}

const dragContent = ref(null)


</script>
<style lang="scss" type="text/scss" scoped>
@import 'src/assets/styles/element-variables';

.sidebar {
  &-wrapper {
    position: absolute;
    left: 0;
    top: 60px;
    bottom: 0;
    padding-top: 30px;
    width: 80px;
    background: #fff;
    border-right: 1px solid $--border-color-light;
    z-index: 99998;

    .tool {
      padding: 10px 0;
      text-align: center;
      cursor: pointer;
      border-left: 3px solid #fff;

      &:hover {
        color: $--color-primary;
        border-color: $--color-primary;
      }
    }
  }

  &-content {
    display: flex;
    flex-direction: column;
    z-index: 10;
    color: #000;
  }
}

.drawer-wrapper {
  padding: 100px 0 0 100px;
}
</style>