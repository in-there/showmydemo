<template>
    <div class="home">
        <div class="home-head">
            <picture class="home-img">
                <source type="image/webp" srcset="../assets/home.webp" />
                <img src="../assets/home.jpg" alt="home img" />
            </picture>
            <div class="home-content">
                <h1>All you need to create</h1>
                <h1><span>amazing</span> content</h1>
            </div>
            <div class="home-arrow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12.9842 15C12.9842 15.5523 13.4319 16 13.9842 16C14.3416 16 14.6552 15.8125 14.832 15.5305L17.5196 12.8429C17.9101 12.4524 17.9101 11.8192 17.5196 11.4287C17.1291 11.0382 16.4959 11.0382 16.1054 11.4287L14.9842 12.5499L14.9842 5C14.9842 4.44771 14.5364 4 13.9842 4C13.4319 4 12.9842 4.44772 12.9842 5L12.9842 14.9506C12.984 14.9597 12.984 14.9688 12.9842 14.9779V15Z"
                        fill="currentColor" />
                    <path
                        d="M11.016 9C11.016 8.44771 10.5682 8 10.016 8C9.65856 8 9.34496 8.18748 9.16813 8.46947L6.48052 11.1571C6.08999 11.5476 6.08999 12.1808 6.48051 12.5713C6.87104 12.9618 7.5042 12.9618 7.89473 12.5713L9.01596 11.4501L9.01596 19C9.01596 19.5523 9.46367 20 10.016 20C10.5682 20 11.016 19.5523 11.016 19L11.016 9.04945C11.0161 9.04033 11.0161 9.03121 11.016 9.02208V9Z"
                        fill="currentColor" />
                </svg>
            </div>
        </div>
        <HomeContent />
    </div>
</template>

<script setup>
// 导入相关库
import { ref, defineAsyncComponent } from 'vue';
// 异步加载组件
const HomeContent = defineAsyncComponent(() => import('../components/HomeContent.vue'));

</script>

<style lang="scss" scoped>
.home {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &-head {
        width: 100%;
        height: 50vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        z-index: 888;
    }

    &-content {
        text-align: center;
        margin-top: 20vh;
        font-size: 0.5rem;
        color: #fff;
        line-height: 0.7;
        height: 100%;

        span {
            color: #f00;
        }
    }

    &-arrow {
        color: #233;
        position: absolute;
        bottom: 2rem;
        z-index: -1;

        svg {
            width: 3rem;
            height: 3rem;
        }
    }

    &-img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }
    }
}

@media screen and (min-width: 430px) {
    .home {
        &-head {
            height: 50vh;
        }

        &-content {
            font-size: 1rem;
        }

        &-arrow {
            bottom: 3rem;

            svg {
                width: 3rem;
                height: 3rem;
            }
        }
    }
}


@media screen and (min-width: 768px) {
    .home {
        &-head {
            height: 100vh;
        }

        &-content {
            font-size: 1.5rem;
            margin-top: 40vh;
        }

        &-arrow {
            bottom: 10rem;

            svg {
                width: 3rem;
                height: 3rem;
            }
        }

        &-img {
            bottom: 0;
        }
    }
}
</style>