<template>
    <div style="margin-top: 60px;">
        <div>示例一</div>
        <div style="margin-top: 20px;">
            <mt-layout-container-multiple>
                <mt-layout-container-multiple-item style="width: 33.33%">左</mt-layout-container-multiple-item>
                <mt-layout-container-multiple-item style="width: 33.33%">中</mt-layout-container-multiple-item>
                <mt-layout-container-multiple-item style="width: 33.33%">右</mt-layout-container-multiple-item>
            </mt-layout-container-multiple>
        </div>


        <div style="margin-top: 20px;">
            <div>示例二</div>
            <mt-layout-container-multiple>
                <mt-layout-container-multiple-item style="width: 20%">1</mt-layout-container-multiple-item>
                <mt-layout-container-multiple-item style="width: 30%">2</mt-layout-container-multiple-item>
                <mt-layout-container-multiple-item style="width: 10%">3</mt-layout-container-multiple-item>
                <mt-layout-container-multiple-item style="width: 40%">4</mt-layout-container-multiple-item>
            </mt-layout-container-multiple>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'page-layout-container-multiple'
    };
</script>

<style lang="css" scoped>
</style>
