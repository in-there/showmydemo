<template>
    <div class="drop">
        <DropLeft :data="data" @reset="reset" @dragstart="dragstart" />
        <DropRight :data="rightData" @touchstart="touchstart" @touchmove="touchmove" @dragstart="dragstart"
            @drop="drop" />
    </div>
</template>

<script setup>
// 导入相关库和图片
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

// 异步加载组件
const DropLeft = defineAsyncComponent(() => import('../components/DropLeft.vue'));
const DropRight = defineAsyncComponent(() => import('../components/DropRight.vue'));

// 定义初始拼图数据
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

// 备份初始拼图数据
const dataBackup = ref(JSON.parse(JSON.stringify(data.value)));

// 定义右侧拼图数据
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

// 备份右侧拼图数据
const rightDataBackup = ref(JSON.parse(JSON.stringify(rightData.value)));

// 定义拖拽状态
const dropsates = ref("")
// 定义拖拽标签
const droptag = ref(true);
// 定义拖拽图片
const touchReg = ref("");
// 定义拖拽图片id
const img = ref("");
// 定义点击次数
const touchNum = ref(0);

// 随机打乱拼图
onBeforeMount(() => {
    data.value.sort(() => Math.random() - 0.5);
})

/*
* @description 重置拼图
*/
function reset() {
    data.value = JSON.parse(JSON.stringify(dataBackup.value));
    data.value.sort(() => Math.random() - 0.5);
    rightData.value = JSON.parse(JSON.stringify(rightDataBackup.value));
}

/*
* @description 拖拽开始
* @param {Object} e 事件对象
*/
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

/*
* @description 右边拼图点击拖拽事件
* @param {Object} e 事件对象
*/

function dropRight(num) {
    const regImg = rightData.value[num].img;
    const regRefid = rightData.value[num].refid;
    rightData.value[num].img = rightData.value.find((val) => val.refstates === dropsates.value).img;
    rightData.value[num].refid = rightData.value.find((val) => val.refstates === dropsates.value).refid;
    rightData.value.find((val) => val.refstates === dropsates.value).img = regImg;
    rightData.value.find((val) => val.refstates === dropsates.value).refid = regRefid;
}

/*
* @description 左边边拼图拖拽事件
* @param {Object} e 事件对象
*/
function dropLeft(num) {
    if (!data.value.find((val) => val.refstates === dropsates.value)?.img?.backgroundImage) {
        return;
    }
    rightData.value[num].img = data.value.find((val) => val.refstates === dropsates.value).img;
    rightData.value[num].refid = dropsates.value;
    data.value.find((val) => val.refstates === dropsates.value).img = {};
}


/*
* @description 拖拽事件 pc模式下
* @param {Object} e 事件对象
*/
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

/*
* @description 开始点击拖拽事件 移动端模式下
* @param {Object} e 事件对象
*/
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

/*
* @description 移动端拖拽事件
* @param {Number} num 拼图索引
*/

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


/*
* @description 移动端拖拽事件
* @param {Object} e 事件对象
*/
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

<style lang="scss" scoped>
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