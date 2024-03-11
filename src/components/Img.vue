<template>
    <div class="img">
        <div class="img-loading">
            <Loading></Loading>
        </div>
        <img class="fade">
    </div>
</template>
<script setup >
import Loading from './Loading.vue';
</script>
<style lang="scss" scoped >
.img{
    position: relative;
    width: 100%;
    &-loading{
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .fade{
        visibility: hidden;
    }
    .hide{
        display: none;
    }
}
</style>