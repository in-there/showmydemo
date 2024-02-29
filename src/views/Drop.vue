<template>
    <div class="drop">
        <DropLeft :data="data" @reset="reset" @dragstart="dragstart" />
        <DropRight :data="rightData" @touchstart="touchstart" @touchmove="touchmove" @dragstart="dragstart" @drop="drop" />
    </div>
</template>

<script setup>
import { ref, defineAsyncComponent, onBeforeMount } from 'vue';
import img01 from '../assets/drop/1.jpeg';
import img02 from '../assets/drop/2.jpeg';
import img03 from '../assets/drop/3.jpeg';
import img04 from '../assets/drop/4.jpeg';
import img05 from '../assets/drop/5.jpeg';
import img06 from '../assets/drop/6.jpeg';
import img07 from '../assets/drop/7.jpeg';
import img08 from '../assets/drop/8.jpeg';
import img09 from '../assets/drop/9.jpeg';
const DropLeft = defineAsyncComponent(() => import('../components/DropLeft.vue'));
const DropRight = defineAsyncComponent(() => import('../components/DropRight.vue'));
const data = ref([
    {
        img: {
            backgroundImage: `url(${img01})`
        },
        refstates: "leftblock1"
    },
    {
        img: {
            backgroundImage: `url(${img02})`
        },
        refstates: "leftblock2"
    },
    {
        img: {
            backgroundImage: `url(${img03})`
        },
        refstates: "leftblock3"
    },
    {
        img: {
            backgroundImage: `url(${img04})`
        },
        refstates: "leftblock4"
    },
    {
        img: {
            backgroundImage: `url(${img05})`
        },
        refstates: "leftblock5"
    },
    {
        img: {
            backgroundImage: `url(${img06})`
        },
        refstates: "leftblock6"
    },
    {
        img: {
            backgroundImage: `url(${img07})`
        },
        refstates: "leftblock7"
    },
    {
        img: {
            backgroundImage: `url(${img08})`
        },
        refstates: "leftblock8"
    },
    {
        img: {
            backgroundImage: `url(${img09})`
        },
        refstates: "leftblock9"
    }
])

const dataBackup = ref(JSON.parse(JSON.stringify(data.value)));

const rightData = ref([
    {
        refstates: "rightblock1",
        refid: "",
        img: {},
    },
    {
        refstates: "rightblock2",
        refid: "",
        img: {},
    },
    {
        refstates: "rightblock3",
        refid: "",
        img: {},
    },
    {
        refstates: "rightblock4",
        refid: "",
        img: {},
    },
    {
        refstates: "rightblock5",
        refid: "",
        img: {},
    },
    {
        refstates: "rightblock6",
        refid: "",
        img: {},
    },
    {
        refstates: "rightblock7",
        refid: "",
        img: {},
    },
    {
        refstates: "rightblock8",
        refid: "",
        img: {},
    },
    {
        refstates: "rightblock9",
        refid: "",
        img: {},
    }
])

const rightDataBackup = ref(JSON.parse(JSON.stringify(rightData.value)));


const dropsates = ref("")

const droptag = ref(true);

const touchReg = ref("");

const img = ref("");

const touchNum = ref(0);

onBeforeMount(() => {
    data.value.sort(() => Math.random() - 0.5);
})


function reset() {
    data.value = JSON.parse(JSON.stringify(dataBackup.value));
    data.value.sort(() => Math.random() - 0.5);
    rightData.value = JSON.parse(JSON.stringify(rightDataBackup.value));
}

function dragstart(e) {
    dropsates.value = e.target.id;
    if (e.target.id.includes("rightblock") && touchReg.value.includes("rightblock")) {
        droptag.value = false;
        touchReg.value = e.target.id;
    } else {
        droptag.value = true;
        dropsates.value = touchReg.value;
    }
    if (e.target.id.includes("leftblock")) {
        touchNum.value = 2;
        console.log(touchNum.value);
    }
    touchReg.value = e.target.id;
}

function dropRight(num) {
    const regImg = rightData.value[num].img;
    const regRefid = rightData.value[num].refid;
    rightData.value[num].img = rightData.value.find((val) => val.refstates === dropsates.value).img;
    rightData.value[num].refid = rightData.value.find((val) => val.refstates === dropsates.value).refid;
    rightData.value.find((val) => val.refstates === dropsates.value).img = regImg;
    rightData.value.find((val) => val.refstates === dropsates.value).refid = regRefid;
}

function dropLeft(num) {
    if (!data.value.find((val) => val.refstates === dropsates.value)?.img?.backgroundImage) {
        return;
    }
    rightData.value[num].img = data.value.find((val) => val.refstates === dropsates.value).img;
    rightData.value[num].refid = dropsates.value;
    data.value.find((val) => val.refstates === dropsates.value).img = {};
}

function drop(e) {
    e.preventDefault();
    if (droptag.value) {
        switch (e.target.id) {
            case "rightblock1":
                dropLeft(0);
                break;
            case "rightblock2":
                dropLeft(1);
                break;
            case "rightblock3":
                dropLeft(2);
                break;
            case "rightblock4":
                dropLeft(3);
                break;
            case "rightblock5":
                dropLeft(4);
                break;
            case "rightblock6":
                dropLeft(5);
                break;
            case "rightblock7":
                dropLeft(6);
                break;
            case "rightblock8":
                dropLeft(7);
                break;
            case "rightblock9":
                dropLeft(8);
                break;
        }
    } else {
        switch (e.target.id) {
            case "rightblock1":
                dropRight(0);
                break;
            case "rightblock2":
                dropRight(1);
                break;
            case "rightblock3":
                dropRight(2);
                break;
            case "rightblock4":
                dropRight(3);
                break;
            case "rightblock5":
                dropRight(4);
                break;
            case "rightblock6":
                dropRight(5);
                break;
            case "rightblock7":
                dropRight(6);
                break;
            case "rightblock8":
                dropRight(7);
                break;
            case "rightblock9":
                dropRight(8);
                break;
        }
    }
}


function touchstart(e) {
    dragstart(e);
    if (e.target.id.includes("rightblock")
        && rightData.value.find((val) => val.refstates === img.value)?.img?.backgroundImage
    ) {
        touchNum.value++;
        if (touchNum.value > 1) touchNum.value = 0;
        touchmove(e);
        img.value = e.target.id;
    } else {
        touchNum.value = 0;
        img.value = e.target.id;
        touchmove(e);
    }
}

function touch(num) {
    if (img?.value?.includes("rightblock") && touchNum.value === 1) {
        const regImg2 = rightData.value[num].img;
        const regRefid2 = rightData.value[num].refid;
        const regStartImg2 = rightData.value.find((val) => val.refstates === img.value).img;
        const regStartRefid2 = rightData.value.find((val) => val.refstates === img.value).refid;
        rightData.value[num].img = regStartImg2;
        rightData.value[num].refid = regStartRefid2;
        rightData.value.find((val) => val.refstates === img.value).img = regImg2;
        rightData.value.find((val) => val.refstates === img.value).refid = regRefid2;
    }

}

function touchmove(e) {
    drop(e);
    e.preventDefault();
    if (img.value.includes("leftblock")) return;
    switch (e.target.id) {
        case "rightblock1":
            touch(0);
            break;
        case "rightblock2":
            touch(1);
            break;
        case "rightblock3":
            touch(2);
            break;
        case "rightblock4":
            touch(3);
            break;
        case "rightblock5":
            touch(4);
            break;
        case "rightblock6":
            touch(5);
            break;
        case "rightblock7":
            touch(6);
            break;
        case "rightblock8":
            touch(7);
            break;
        case "rightblock9":
            touch(8);
            break;
    }
}

</script>

<style lang="scss" scoped >
.drop {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;
}

@media screen and (min-width: 430px) {
    .drop {
        flex-direction: row;
    }
}
</style>