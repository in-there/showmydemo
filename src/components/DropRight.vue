<template>
    <div class="drop-right">
        <div @drop="drop" @touchend="touchend" @touchstart="touchstart" @dragover="(event) => {
            event.preventDefault();
        }" class="drop-right-box" v-for="(val, index) in data" :key="index">
            <div @dragstart="dragstart" class="images" draggable="true" :id="val?.refstates" :style="val?.img"></div>
        </div>
    </div>
</template>
<script setup>
// 定义props和emit
const props = defineProps({
    data: Array
})
const emits = defineEmits(['drop', 'dragstart', 'touchstart', 'touchmove']);


/*
* @description: 拖拽事件
*/
function drop(event) {
    emits('drop', event);
}

/*
* @description: 拖拽开始事件
*/
function dragstart(event) {
    emits('dragstart', event);
}

/*
* @description: 点击结束事件
*/
function touchend(event) {
    event.preventDefault();
    // emits('touchmove', event);
}

/*
* @description: 点击开始事件
*/
function touchstart(event) {
    emits('touchstart', event);
}

</script>
<style lang="scss" scoped >
.drop-right {
    width: 60vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1vw;

    &-box {
        width: calc(60vw / 3 - 2vw);
        height: calc(60vw / 3 - 2vw);
        background: #0003;
        cursor: grab;

        .images {
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: center;
        }
    }
}

@media screen and (min-width: 430px) {
    .drop-right {
        width: 40vw;
        margin-top: 8vh;
        &-box {
            width: calc(40vw / 3 - 2vw);
            height: calc(40vw / 3 - 2vw);
        }
    }

}</style>