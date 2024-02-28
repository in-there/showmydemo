<template>
    <div class="container">
        <div class="box" ref="box" >
            <ImgCard v-for="(val, index) in imgCardDetail" :img="val.img" :num="val.style" :key="index">
                <template v-slot:text>
                    {{
                        val?.text
                    }}
                </template>
            </ImgCard>
        </div>
        <div class="btns">
            <div class="prev" @click="prevFunc" ></div>
            <div class="next" @click="nextFunc" ></div>
        </div>
    </div>
</template>
<script setup >
import ImgCard from '../components/ImgCard.vue';
import content01 from "../assets/content01.jpg";
import content02 from "../assets/content02.jpg";
import content03 from "../assets/content03.jpg";
import content04 from "../assets/content04.jpg";
import { ref } from 'vue';

const box = ref(null);
const imgCardDetail = [
    {
        img: content01,
        text: 'just first photo',
        style: '--i:0'
    },
    {
        img: content02,
        text: 'just second photo',
        style: '--i:1'
    },
    {
        img: content03,
        text: 'just third photo',
        style: '--i:2'
    },
    {
        img: content04,
        text: 'just fourth photo',
        style: '--i:3'
    }
]



let degree = 0;
let bool = true;


function prevFunc() {
    if (bool) {
        degree += 90;
        bool = false;
        box.value.style.transform = `perspective(1000px) rotateY(${degree}deg)`;
        setTimeout(() => {
            bool = true;
        }, 1500);
    }
}

function nextFunc() {
    if (bool) {
        degree -= 90;
        bool = false;
        box.value.style.transform = `perspective(1000px) rotateY(${degree}deg)`;
        setTimeout(() => {
            bool = true;
        }, 1500);
    }
}

</script>

<style lang="scss" scoped >
.container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #EAECF5;
    .box {
        position: relative;
        top: -60px;
        width: 240px;
        height: 300px;
        transform-style: preserve-3d;
        transition: 1.5s;
        transform: perspective(1000px) rotateY(0deg);

        &::before {
            content: "";
            position: absolute;
            width: 240px;
            height: 240px;
            background: #2225;
            z-index: 1000;
            transform: translateY(240px) rotateX(90deg) scale(1.1);
            filter: blur(40px);
        }
    }

    .btns {
        position: absolute;
        bottom: 4em;
        display: flex;
        gap: 30px;

        div {
            position: relative;
            width: 60px;
            height: 60px;
            border: 2px solid #333;
            border-radius: 50%;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;

            &:active {
                background: #333;
            }

            &::before {
                content: "";
                position: absolute;
                width: 15px;
                height: 15px;
                border-top: 3px solid #333;
                border-right: 3px solid #333;
                transform: rotate(45deg) translate(-2.5px, 2.5px);
            }

            &.prev::before {
                transform: rotate(225deg) translate(-2.5px, 2.5px);
            }

            &:active::before {
                border-color: #fff;
            }
        }


    }
}
</style>