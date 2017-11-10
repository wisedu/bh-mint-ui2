<template>
    <div class="page-select">
        <mint-steps direction="horizontal">
            <mint-step status="finish">买家下单</mint-step>
            <mint-step status="finish">商家接单</mint-step>
            <mint-step status="process">买家提货</mint-step>
            <mint-step>交易完成</mint-step>
        </mint-steps>

        <mint-steps direction="vertical">
            <mint-step>
                <h3>【城市】物流状态1</h3>
                <p slot="left">12:40<br>2016-07-12</p>
            </mint-step>
            <mint-step status="process">
                <h3>【城市】物流状态2</h3>
                <p slot="left">10:00<br>2016-07-11</p>
            </mint-step>
            <mint-step status="finish">
                <h3>快件已发货</h3>
                <p slot="left">09:30<br>2016-07-10</p>
            </mint-step>
        </mint-steps>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.page-select{
    padding-top: 50px;
}
</style>
