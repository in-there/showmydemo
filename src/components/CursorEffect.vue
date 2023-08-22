<template>
  <div ref="cursor" class="cursor">
    <div ref="cursorPointer" class="cursor-pointer"></div>
  </div>
</template>
<script setup>
import { onMounted,  ref } from "vue";
const cursorPointer = ref(null);
const cursor = ref(null);
onMounted(() => {
  document.onmousemove = (e) => {
    // 获取鼠标位置，更换为指定样式移动模块
    cursorPointer.value.style.left = e.clientX + "px";
    cursorPointer.value.style.top = e.clientY + "px";

    // 鼠标移动之际，背景跟随移动，错开视觉效果
    cursor.value.style.backgroundPositionX = -e.clientX / 4 + "px";
    cursor.value.style.backgroundPositionY = -e.clientY / 4 + "px";

    // 创建跟随元素
    let followEl = document.createElement("div");
    followEl.className = "follow";
    cursor.value.prepend(followEl);
    // 鼠标移动之际，跟随元素跟随移动
    followEl.style.left =
      cursorPointer.value.getBoundingClientRect().left + "px";
    followEl.style.top = cursorPointer.value.getBoundingClientRect().top + "px";
    setTimeout(() => {
    // 获取跟随元素并设置参数
    let text = document.getElementsByClassName("follow")[0],
      directionX = Math.random() < 0.5 ? -1 : 1,
      directionY = Math.random() < 0.5 ? -1 : 1;
    // 设置跟随元素效果
    text.style.left =
      parseInt(text.style.left) - directionX * (Math.random() * 100) + "px";
    text.style.top =
      parseInt(text.style.top) - directionY * (Math.random() * 100) + "px";
    text.style.opacity = 0;
    text.style.transform = "scale(0.25)";
    setTimeout(() => {
      text.remove();
    }, 1000);
  });
  };
});
</script>

<!-- 局部样式 -->
<style scoped>
/* 整体样式 */
.cursor {
  overflow: hidden;
  background-color: #222;
  background-image: linear-gradient(to right, #333 1px, transparent 1px),
    linear-gradient(to bottom, #333 1px, transparent 1px);
  background-size: 40px 40px;
  cursor: none;
  width:100vw;
  height:100vh;
}
/* 鼠标模块元素样式 */
.cursor-pointer {
  position: fixed;
  width: 40px;
  height: 40px;
  background-color: #0f0;
  border-radius: 50%;
  filter: drop-shadow(0 0 5px #0f0) drop-shadow(0 0 10px #0f0)
    drop-shadow(0 0 20px #0f0) hue-rotate(60deg);
}
</style>
<!-- 全局样式 -->
<style>
/* 跟随元素样式 */
.cursor .follow {
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: #0f0;
  transform: translate(-50%, -50%);
  transition: 1s;
  filter: drop-shadow(0 0 5px #0f0) drop-shadow(0 0 20px #0f0) hue-rotate(60deg);
}
</style>
