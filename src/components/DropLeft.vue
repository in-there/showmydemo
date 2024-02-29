<template>
    <div class="drop-left">
        <div class="drop-left-box" v-for="(val, index) in data" :key="index">
            <div @touchstart="touchstart" @dragstart="dragstart" class="images" draggable="true" :id="val.refstates"
                :style="val.img"></div>
        </div>
        <button @click="reset">
            reset
        </button>
    </div>
</template>
<script setup >
import { ref, onBeforeMount } from 'vue';

const props = defineProps({
    data: Array
})

const emits = defineEmits(['reset', 'dragstart']);

function reset() {
    emits('reset');
}

function dragstart(event) {
    emits('dragstart', event);
}
function touchstart(event) {
    emits('dragstart', event);
}


</script>

<style lang="scss" scoped>
.drop-left {
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

    button {
        padding: 1.1rem;
        border-radius: 15px;
        margin-top: 10px;
        border: none;
        background-color: #fff5;
        backdrop-filter: blur(10px);
        cursor: pointer;
        color: #fff;
    }
}

@media screen and (min-width: 430px) {
    .drop-left {
        width: 30vw;
        gap: 1vw;

        &-box {
            width: calc(30vw / 3 - 2vw);
            height: calc(30vw / 3 - 2vw);
        }
    }
}</style>