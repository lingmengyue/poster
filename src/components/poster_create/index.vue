<template>
    <div>
        <bgimg/>
        <div class="container">
            <headerimg/>
            <img class="theme" src="../../assets/images/theme.png">
            <div class="index-content-section">
                <div class="item">
                    <img src="../../assets/images/create_zero.png" class="zero">
                </div>
                <div v-for="(item,key) in imageList" :key="key">
                    <img :src="item.status? item.active:item.default" class="fees" :class="key" @click="changeStatus(key)">
                </div>
            </div>
            <img src="../../assets/images/create_poster.png" class="create_poster" @click="createPoster()">
            <div class="tip">
                <img src="../../assets/images/tip.png">
            </div>
        </div>

    </div>
</template>

<script>
    import bgimg from "../public/bgimg";
    import headerimg from "../public/header";
    import Config from "../../assets/js/config.js";//配置文件
    export default {
        data(){
            return {
                id: Config.config.appsecret,
                imageList: {
                    //增值税图片
                    'add_tax':{
                        'default': require('../../assets/images/create_add_tax.png'),
                        'active': require('../../assets/images/create_add_tax_active.png'),
                        'status': false
                    },
                    //工薪一族图片
                    'wage_earners':{
                        'default': require('../../assets/images/create_wage_earners.png'),
                        'active': require('../../assets/images/create_wage_earners_active.png'),
                        'status': false
                    },
                    //减税降费图片
                    'tax_reduction':{
                        'default': require('../../assets/images/create_tax_reduction.png'),
                        'active': require('../../assets/images/create_tax_reduction_active.png'),
                        'status': false
                    },
                    //财务人员图片
                    'staff':{
                        'default': require('../../assets/images/create_staff.png'),
                        'active': require('../../assets/images/create_staff_active.png'),
                        'status': false
                    },
                    //创业人士图片
                    'entrepreneurship':{
                        'default': require('../../assets/images/create_entrepreneurship.png'),
                        'active': require('../../assets/images/create_entrepreneurship_active.png'),
                        'status': false
                    },
                    //所得税图片
                    'income_tax':{
                        'default': require('../../assets/images/create_income_tax.png'),
                        'active': require('../../assets/images/create_income_tax_active.png'),
                        'status': false
                    },
                    //非居民图片
                    'non_resident':{
                        'default': require('../../assets/images/create_non_resident.png'),
                        'active': require('../../assets/images/create_non_resident_active.png'),
                        'status': false
                    },
                    //小微企业图片
                    'enterprise':{
                        'default': require('../../assets/images/create_enterprise.png'),
                        'active': require('../../assets/images/create_enterprise_active.png'),
                        'status': false
                    },
                    //规费图片
                    'fees':{
                        'default': require('../../assets/images/create_fees.png'),
                        'active': require('../../assets/images/create_fees_active.png'),
                        'status': false
                    }

                }
            }
        },
        components: {
            bgimg,
            headerimg
        },
        methods:{
            //点击生成海报按钮触发
            createPoster(){
                console.log(this.imageList['fees']);
            },
            //改变图片选中状态
            changeStatus(imageKey){
                this.imageList[imageKey].status = !this.imageList[imageKey].status;
            }
        }
    }
</script>

<style scoped>
    .theme{margin: 30px 0 0!important;width: 190px!important;}
    .index-content-section{margin-top:-2px;position: relative;width: 100%;height:300px;background:rgba(0, 0, 0, 0) url("../../assets/images/light-border2.png") no-repeat;background-size: 100%;}
    .item{}
    .zero{position:absolute;width: 65px;top: 135px;left: 20px;right:0;bottom: 0;}
    .fees{position:absolute;width: 77px;top: 63px;left: 40px;right:0;bottom: 0;}
    .enterprise{position:absolute;width: 92px;top: 18px;left: 100px;right:0;bottom: 0;}
    .tax_reduction{position:absolute;width: 100px;top: 105px;left: 93px;right:0;bottom: 0;}
    .income_tax{position:absolute;width: 70px;top: 200px;left: 115px;right:0;bottom: 0;}
    .add_tax{position:absolute;width: 105px;top: 55px;left: 172px;right:0;bottom: 0;}
    .entrepreneurship{position:absolute;width: 105px;top: 150px;left: 172px;right:0;bottom: 0;}
    .wage_earners{position:absolute;width: 77px;top: 32px;left: 261px;right:0;bottom: 0;}
    .staff{position:absolute;width: 105px;top: 105px;left: 255px;right:0;bottom: 0;}
    .non_resident{position:absolute;width: 62px;top: 200px;left: 263px;right:0;bottom: 0;}
    .create_poster{width: 120px;}
    .tip{margin: 10px auto;width: 150px;}
    .tip img{width: 100%;}
    .sort{display: flex;justify-content: space-around;}
</style>
