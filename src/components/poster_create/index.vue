<template>
    <div>
        <bgimg/>
        <div class="container">
            <headerimg/>
            <img class="theme" src="../../assets/images/theme.png">
            <div class="index-content-section">
                <!--                    <p v-for="(item,key) in imageList" :key="key">-->
                <!--                        {{item}}&#45;&#45;{{i}}-->
                <!--                    </p>-->
                <!-- 原始方框 -->
                <div class="item">
                    <img :src="imageList.zero" class="zero">
                </div>
                <!-- 规费 -->
                <div class="item">
                    <img :src="imageList.fees_active" class="fees">
                </div>
                <!-- 小微企业 -->
                <div class="item">
                    <img :src="imageList.enterprise_active" class="enterprise" @click="clickImages('test',$event)">
                </div>
                <!-- 减税降费 -->
                <div class="item">
                    <img :src="imageList.tax_reduction_active" class="tax_reduction">
                </div>
                <!-- 所得税 -->
                <div class="item">
                    <img :src="imageList.income_tax" class="income_tax">
                </div>
                <!-- 增值税 -->
                <div class="item">
                    <img :src="imageList.add_tax" class="add_tax">
                </div>
                <!-- 创业人士 -->
                <div class="item">
                    <img :src="imageList.entrepreneurship_active" class="entrepreneurship">
                </div>
                <!-- 工薪一族 -->
                <div class="item">
                    <img :src="imageList.wage_earners" class="wage_earners">
                </div>
                <!-- 财务人员 -->
                <div class="item">
                    <img :src="imageList.staff_active" class="staff">
                </div>
                <!-- 非居民 -->
                <div class="item">
                    <img :src="imageList.non_resident" class="non_resident">
                </div>
            </div>
            <img src="../../assets/images/create_poster.png" class="create_poster" @click="clickImage()">
            <div class="tip">
                <span class="sort">
                    <span>落</span>
                    <span>实</span>
                    <span>减</span>
                    <span>税</span>
                    <span>降</span>
                    <span>费</span>
                </span>
                <span>促进经济高质量发展</span>
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
                    'zero':require('../../assets/images/create_zero.png'),
                    //增值税图片
                    'add_tax':require('../../assets/images/create_add_tax.png'),
                    'add_tax_active':require('../../assets/images/create_add_tax_active.png'),
                    //小微企业图片
                    'enterprise':require('../../assets/images/create_enterprise.png'),
                    'enterprise_active':require('../../assets/images/create_enterprise_active.png'),
                    //创业人士图片
                    'entrepreneurship':require('../../assets/images/create_entrepreneurship.png'),
                    'entrepreneurship_active':require('../../assets/images/create_entrepreneurship_active.png'),
                    //规费图片
                    'fees':require('../../assets/images/create_fees.png'),
                    'fees_active':require('../../assets/images/create_fees_active.png'),
                    //所得税图片
                    'income_tax':require('../../assets/images/create_income_tax.png'),
                    'income_tax_active':require('../../assets/images/create_income_tax_active.png'),
                    //非居民图片
                    'non_resident':require('../../assets/images/create_non_resident.png'),
                    'non_resident_active':require('../../assets/images/create_non_resident_active.png'),
                    //财务人员图片
                    'staff':require('../../assets/images/create_staff.png'),
                    'staff_active':require('../../assets/images/create_staff_active.png'),
                    //减税降费图片
                    'tax_reduction':require('../../assets/images/create_tax_reduction.png'),
                    'tax_reduction_active':require('../../assets/images/create_tax_reduction_active.png'),
                    //工薪一族图片
                    'wage_earners':require('../../assets/images/create_wage_earners.png'),
                    'wage_earners_active':require('../../assets/images/create_wage_earners_active.png'),
                }
            }
        },
        components: {
            bgimg,
            headerimg
        },
        methods:{
            clickImage(){
                console.log("fdghfh");
            },
            clickImages(msg,event){
                console.log(msg);
                console.log(event)
            }
        }
    }
</script>

<style scoped>
    .theme{margin: 30px 0 0!important;width: 190px!important;}
    .index-content-section{margin-top:-2px;position: relative;width: 100%;height:300px;background:rgba(0, 0, 0, 0) url("../../assets/images/light-border2.png") no-repeat;background-size: 100%;}
    .item{}
    .zero{position:absolute;width: 62px;top: 135px;left: 20px;right:0;bottom: 0;}
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
    .tip{display: flex;justify-content: center;flex-direction: column;color: #ffffff;width: 150px;margin: 10px auto;}
    .sort{display: flex;justify-content: space-around;}
</style>
