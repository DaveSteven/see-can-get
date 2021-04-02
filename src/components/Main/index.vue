<template>
  <main>
    <header class="header"></header>
    <sidebar></sidebar>
    <section class="content">
      <CanvasPanel />
    </section>
    <aside class="right-layout"></aside>
  </main>
</template>
<script setup>
import Sidebar from '@/components/Sidebar/index.vue'
import CanvasPanel from '@/components/CanvasPanel/index.vue'
</script>
<style lang="scss" type="text/scss" scoped>
.header {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  height: 60px;
  background: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, .1);
  z-index: 99999;
}
.right-layout {
  position: absolute;
  right: 0;
  top: 60px;
  bottom: 0;
  width: 240px;
  background: #fff;
  z-index: 99998;
}

.content {
  position: absolute;
  top: 60px;
  left: 80px;
  right: 240px;
  bottom: 0;
  overflow: hidden;
}
</style>