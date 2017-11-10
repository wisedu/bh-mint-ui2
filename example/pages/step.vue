<template>
    <div class="page-select">
        <mint-steps :active="2">
            <mint-step>买家下单</mint-step>
            <mint-step>商家接单</mint-step>
            <mint-step>买家提货</mint-step>
            <mint-step>交易完成</mint-step>
        </mint-steps>

        <mint-steps direction="vertical" :active="1" active-color="#f60">
            <mint-step>
                <h3>【城市】物流状态1</h3>
                <p>2016-07-12 12:40</p>
            </mint-step>
            <mint-step>
                <h3>【城市】物流状态2</h3>
                <p>2016-07-11 10:00</p>
            </mint-step>
            <mint-step>
                <h3>快件已发货</h3>
                <p>2016-07-10 09:30</p>
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
