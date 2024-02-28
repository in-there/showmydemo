<template>
    <div class="card" :style="num">
        <div class="imgBx">
            <img :src="img" alt="">
        </div>
        <h2>
            <slot name="text"></slot>
        </h2>
    </div>
</template>
<script setup >
const props = defineProps({
    num: String,
    img: String
})
</script>

<style lang="scss" scoped >
.card {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #f6f8fa65;
    backdrop-filter: blur(10px);
    transform-origin: center;
    transform-style: preserve-3d;
    transform: rotateY(calc(var(--i) * 90deg)) translateZ(120px);

    .imgBx {
        position: relative;
        width: 100%;
        height: 240px;

        img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    h2 {
        position: relative;
        top: 10px;
        width: 240px;
        text-align: center;
        font-size: 1em;
        font-weight: 500;
        line-height: 1em;
        transform-style: preserve-3d;
        backface-visibility: hidden;
    }
}
</style>