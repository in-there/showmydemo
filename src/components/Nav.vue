<template>
    <nav class="pc">
        <router-link to="/">Home</router-link>
        <router-link to="/slider">Slider</router-link>
        <router-link to="/">Shop</router-link>
        <router-link to="/">Theme</router-link>
        <router-link to="/">Project</router-link>
        <router-link to="/">Personal</router-link>
        <router-link to="/">About</router-link>
    </nav>
    <nav class="mobile">
        <div class="mobile-navdetail" @click="taggleNav">
            <svg class="mobile-svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M2 8C2 7.44772 2.44772 7 3 7H21C21.5523 7 22 7.44772 22 8C22 8.55228 21.5523 9 21 9H3C2.44772 9 2 8.55228 2 8Z"
                    fill="currentColor" />
                <path
                    d="M2 12C2 11.4477 2.44772 11 3 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H3C2.44772 13 2 12.5523 2 12Z"
                    fill="currentColor" />
                <path
                    d="M3 15C2.44772 15 2 15.4477 2 16C2 16.5523 2.44772 17 3 17H15C15.5523 17 16 16.5523 16 16C16 15.4477 15.5523 15 15 15H3Z"
                    fill="currentColor" />
            </svg>
        </div>
        <div :class="navstates">
            <router-link to="/">Home</router-link>
            <router-link to="/slider">Slider</router-link>
            <router-link to="/">Shop</router-link>
            <router-link to="/">Theme</router-link>
            <router-link to="/">Project</router-link>
            <router-link to="/">Personal</router-link>
            <router-link to="/">About</router-link>
        </div>
        <div class="mobile-navcontent">
            Demo
        </div>
    </nav>
</template>
<script setup >
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps({
    navstates: String
});

const emit = defineEmits(['navevent']);

function taggleNav() {
    emit('navevent');
}

</script>
<style lang="scss" scoped >
.pc,
.mobile {
    position: relative;
    z-index: 999;
}

nav.pc {
    display: none;
}

nav.mobile {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff5;
    width: 70%;
    margin: 30px auto;
    padding: 0.4rem;
    border-radius: 15px;
    backdrop-filter: blur(10px);
    top: 10px;
    position: absolute;
    .mobile-navlink {
        opacity: 0;
        z-index: -99;
        height: 0;
        transition: all 1s ease-in;
        position: absolute;
        display: flex;
        flex-direction: column;
        top: 100%;
        left: 0.4rem;
        background-color: #2229;
        backdrop-filter: blur(10px);
        width: calc(100% - 0.8rem);
        border-radius: 15px;
        gap: 0.4rem;
        padding: 0.2rem 0;
        overflow: hidden;

        a {
            text-decoration: none;
            color: #fff;
            width: fit-content;
            margin: 0 auto;

            &:hover {
                color: #f00;
            }
        }
    }

    .mobile-navlink.active {
        z-index: 99999;
        height: 11rem;
        opacity: 1;
    }

    .mobile-navdetail {
        cursor: pointer;
        width: 2rem;
        height: 100%;
        z-index: 999;
    }

    .mobile-navcontent {
        text-align: center;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        left: 0;
    }
}

@media screen and (min-width: 768px) {
    nav.pc {
        display: flex;
        justify-content: center;
        gap: 2rem;
        background-color: #fff5;
        width: 80%;
        margin: 30px auto;
        padding: 1rem;
        border-radius: 15px;
        backdrop-filter: blur(10px);
        position: absolute;
        top: 0;
        a {
            text-decoration: none;
            color: #223;
            position: relative;

            &:hover {
                color: #fff;

                &::before {
                    content: "";
                    display: block;
                    position: absolute;
                    bottom: -0.5rem;
                    border-bottom: #223 4px solid;
                    animation: ease-in 0.3s forwards wave;
                }
            }
        }

    }

    nav.mobile {
        display: none;
    }

    @keyframes wave {
        from {
            width: 0;
        }

        to {
            width: 100%;
        }
    }
}</style>