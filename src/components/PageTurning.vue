<template>
  <div class="turning">
    <div class="turning-page">
      <img src="../assets/01.jpg" alt="封面图片" />
      <img src="../assets/02.jpg" alt="封面底部图片" />
    </div>
    <div class="turning-page-content">
      <img src="../assets/03.png" alt="内容图片" />
    </div>
  </div>
</template>

<script setup></script>
<style scoped>
/* 整体书本样式 */
.turning {
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

/* 翻页效果模块 */
.turning-page {
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: all 1.6s;
  position: relative;
  transform-origin: left;
  transform: perspective(-1000px);
  box-shadow: 10px 10px 15px #223333;
  border-radius: 15px;
}

/* 翻页模块下的图片 */
.turning-page img {
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 15px;
}

/* 翻页模块下的内容 */
.turning-page-content {
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -888;
}

/* 翻页模块下的内容图片 */
.turning-page-content img{
  width: 100%;
  height: 100%;
  border-radius: 15px;
}

/* 翻页效果 */
.turning:hover .turning-page {
  transform-style: preserve-3d;
  transform: rotateY(180deg);
}
.turning .turning-page img:nth-child(2) {
  transform: rotateY(180deg);
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
}
</style>
