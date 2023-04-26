<script setup>
import { ref } from 'vue'
import { reactive, computed, onMounted, onUnmounted } from 'vue'

const screenWidth = reactive({ width: window.innerWidth })

const handleResize = () => {
  screenWidth.width = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

const headerFontSize = computed(() => {
  if (screenWidth.width < 768) {
    return '24px'
  } else if (screenWidth.width >= 768 && screenWidth.width < 1024) {
    return '36px'
  } else {
    return '72px'
  }
})
const displayText = computed(() => {
  if (screenWidth.width < 768) {
    return 'You are on a mobile device'
  } else {
    return 'You are on a larger device'
  }
})

const data = [1, 2, 3, 4]
const options = {
  itemMargin: 10,
  containerWidth: document.body.clientWidth,
  itemClassName: 'item',
  gridWidth: 100,
  transitionDuration: '.5',
}
</script>

<template>
  <div class="container">
    <h1 :style="{ fontSize: headerFontSize }">{{ displayText }}</h1>
  </div>
  <auto-responsive v-bind="options">
    <div v-for="item in data" :style="style" class="item">{{ item }}</div>
  </auto-responsive>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.card {
  border-radius: 2px;
  box-sizing: border-box;
  border-radius: 4px 4px 0px 0px;
  background-color: white;
  padding: 24px;
  overflow: hidden;
}
.grid-row {
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  width: calc(100% + (var(--paddingVGR) * 2));
  margin: var(--marginVGR);
}
.col {
  width: 100%;
  padding: 15px 8px;
  box-sizing: border-box;
  color: #263238;
  text-align: center;
  background-color: white;
  font-size: 14pt;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),
    0 2px 4px -1px rgba(0, 0, 0, 0.3);
}
</style>
