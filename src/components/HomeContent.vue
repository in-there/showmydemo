<template>
    <div class="content" v-for="(val,index) in data" :key="index" >
        <div class="content-details">
            <div class="content-details-text">
                <h2>
                    Build UI components and pages in isolation
                </h2>
                <p>
                    Implement components and pages without needing to fuss with data, APIs, or business logic.
                </p>
            </div>
            <div class="content-details-img">
                <Img v-lazy="val.src" class="content-details-img-detail"/>
            </div>
        </div>
        <div class="content-empty"></div>
    </div>
</template>
<script setup >
// 导入相关库和图片
import { ref,defineAsyncComponent } from 'vue';
import content01 from '../assets/content01.jpg';
import content02 from '../assets/content02.jpg';
import content03 from '../assets/content03.jpg';

const Img = defineAsyncComponent(() => import('./Img.vue'));

// 定义图片数据
const data = ref([
    {
        src: content01,
    },
    {
        src: content02,
    },
    {
        src: content03,
    }
])


</script>
<style lang="scss"  scoped >
.content {
    &-details {
        display: flex;
        gap: 1rem;
        position: sticky;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        top: 20vh;
        box-sizing: border-box;
        padding: 2rem;
        &-img {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width:70vw;
            &-detail {
                width: 100%;
                height: 40vh;
            }
        }

        &-text {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            width: 100%;
            padding: 1rem;
            h2,
            p {
                margin: 0;
                padding: 0;
                color: #fff;
            }

            h2 {
                font-size: 1.1rem;
            }
        }
    }

    &-empty {
        display: block;
        height: 30vh;
    }
}

@media screen and (min-width: 430px) {
    .content {
        &-details {
            flex-direction: row;
            &-text {
                h2 {
                    font-size: 1.5rem;
                }
            }
            &-img{
                &-detail{
                    width: 40vw;
                }
            }
        }
        &-empty {
        display: block;
        height: 70vh;
    }
    }

}</style>