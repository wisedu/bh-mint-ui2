<template>
    <div class="layout-container-multiple">
        <div>
            <div style="padding:10px 0">示例一：</div>
            <mt-layout-container-multiple>
                <mt-layout-container-multiple-item width="33.33%" class="mt-bg-primary">左(1/3)</mt-layout-container-multiple-item>
                <mt-layout-container-multiple-item width="33.33%" class="mt-bg-warning">中(1/3)</mt-layout-container-multiple-item>
                <mt-layout-container-multiple-item width="33.33%" class="mt-bg-danger">右(1/3)</mt-layout-container-multiple-item>
            </mt-layout-container-multiple>
        </div>


        <div>
            <div style="padding:10px 0">示例二：</div>
            <mt-layout-container-multiple @click="handleclick">
                <mt-layout-container-multiple-item width="20%" class="mt-bg-primary">10%</mt-layout-container-multiple-item>
                <mt-layout-container-multiple-item width="30%" class="mt-bg-warning">30%</mt-layout-container-multiple-item>
                <mt-layout-container-multiple-item width="10%" class="mt-bg-danger">10%</mt-layout-container-multiple-item>
                <mt-layout-container-multiple-item width="40%" class="mt-bg-green">40%</mt-layout-container-multiple-item>
            </mt-layout-container-multiple>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'page-layout-container-multiple',
        methods:{
            handleclick:function(val){
                console.log(val);
            }
        }
    };
</script>

<style lang="css" scoped>
    .layout-container-multiple {
        margin-top: 45px;
    }
</style>
