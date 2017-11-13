<template>
    <div class="page-select">
        <mt-steps direction="horizontal" description="步骤的描述">
            <mt-step status="finish">买家下单</mt-step>
            <mt-step :status="status">商家接单</mt-step>
            <mt-step status="process">买家提货</mt-step>
            <mt-step>交易完成</mt-step>
        </mt-steps>

        <mt-steps direction="vertical" description="步骤的描述">
            <mt-step>
                <h3>【城市】物流状态3</h3>
                <p slot="left">12:40<br>2016-07-12</p>
            </mt-step>
            <mt-step :status="status">
                <h3>【城市】物流状态2</h3>
                <p slot="left">10:00<br>2016-07-11</p>
            </mt-step>
            <mt-step status="process">
                <h3>【城市】物流状态1</h3>
                <p slot="left">10:00<br>2016-07-11</p>
            </mt-step>
            <mt-step status="finish">
                <h3>快件已发货</h3>
                <p slot="left">09:30<br>2016-07-10</p>
            </mt-step>
        </mt-steps>
        <mt-button @click="changeStatus">第二步</mt-button>
    </div>
</template>

<script>
export default {
    data:function(){
        return {
            status: "error"
        }
    },
    methods: {
        changeStatus: function() {
            switch (this.status) {
                case "":
                    this.status = "process";
                    break;
                case "process":
                    this.status = "finish";
                    break;
                case "finish":
                    this.status = "error";
                    break;
                case "error":
                    this.status = "";
                    break;
            }
        }
    }
}
</script>

<style>
.page-select{
    padding-top: 50px;
}
</style>
