<template>
    <div class="box">
        <p>show you a box</p>
    </div>
</template>

<style scoped>
        .box{
            width: 400px;
            height: 200px;
            background: linear-gradient(to right, #ff0000, #0000ff);
            position: relative;
        }
        p{
            color: #fff;
            font-size: 20px;
            text-align: center;
            position: relative;
            line-height: 200px;
            z-index: 888;
        }
        .box::after{
            display: block;
            content: '';
            inset: 4px;
            background: #000;
            position: absolute;
        }
</style>
