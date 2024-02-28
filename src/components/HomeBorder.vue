<template>
    <div class="border">
        just my demo
    </div>
</template>

<style lang="scss" scoped >
.border {
    width: 100%;
    height: 60px;
    background-color: #000;
    display: flex;
    color: aliceblue;
    justify-content: center;
    align-items: center;
}

@media screen and (min-width: 430px){
    .border{
        height: 100px;
    }
}
</style>