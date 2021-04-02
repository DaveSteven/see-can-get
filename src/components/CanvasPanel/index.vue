<template>
  <div ref="canvas" id="canvas-panel"></div>
</template>
<script setup>
import { ref, onMounted } from 'vue'

const canvas = ref(null)

const calculatePanelSize = ({ el, width, height, scale }) => {
  const parent = el.offsetParent
  const pWidth = parent.clientWidth
  const pHeight = parent.clientHeight

  if (typeof scale === 'undefined') {
    const padding = 0.1
    if (width > height) {
      scale = (pWidth - pWidth * padding) / width
    } else {
      scale = (pHeight - pHeight * padding) / height
    }
  }

  const visualWidth = width * scale
  const visualHeight = height * scale
  const offsetLeft = (pWidth - visualWidth) / 2
  const offsetTop = (pHeight - visualHeight) / 2
  el.style.width = `${visualWidth}px`
  el.style.height = `${visualHeight}px`
  el.style.left = `${offsetLeft}px`
  el.style.top = `${offsetTop}px`
}

onMounted(() => {
  calculatePanelSize({
    el: canvas.value,
    width: 1242,
    height: 2208
  })
})

</script>
<style lang="scss" scoped>
#canvas-panel {
  position: absolute;
  background: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}
</style>
