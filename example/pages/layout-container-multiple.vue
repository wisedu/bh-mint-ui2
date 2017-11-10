<template>
    <div style="margin-top: 60px;">
        <div>示例一</div>
        <div style="margin-top: 20px;">
            <mint-layout-container-multiple>
                <mint-layout-container-multiple-item style="width: 33.33%">左</mint-layout-container-multiple-item>
                <mint-layout-container-multiple-item style="width: 33.33%">中</mint-layout-container-multiple-item>
                <mint-layout-container-multiple-item style="width: 33.33%">右</mint-layout-container-multiple-item>
            </mint-layout-container-multiple>
        </div>


        <div style="margin-top: 20px;">
            <div>示例二</div>
            <mint-layout-container-multiple>
                <mint-layout-container-multiple-item style="width: 20%">1</mint-layout-container-multiple-item>
                <mint-layout-container-multiple-item style="width: 30%">2</mint-layout-container-multiple-item>
                <mint-layout-container-multiple-item style="width: 10%">3</mint-layout-container-multiple-item>
                <mint-layout-container-multiple-item style="width: 40%">4</mint-layout-container-multiple-item>
            </mint-layout-container-multiple>
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
