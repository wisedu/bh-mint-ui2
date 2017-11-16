<template>
    <div class="page-field">
        <h1 class="page-title">Dropdown-Buttons</h1>
        <div class="page-part">
            <mt-dropdown-buttons :options="options"></mt-dropdown-buttons>
        </div>    
  </div>
</template>
<style>

</style>
<script>
    export default {
        name:'page-field',
        data () {
            return {
                itemWidth:'',
                options:[{
                    text:'国家',
                    ddmId:'country'
                },{
                    text:'性别',
                    ddmId:'sex'
                },{
                    text:'交通',
                    ddmId:'traffic'
                },{
                    text:'筛选',
                    ddmId:'filter'
                }]
            }
        },
        props:{
        },
        components:{
            
        },
        created() {
        },
        methods:{

        }
    }
</script>