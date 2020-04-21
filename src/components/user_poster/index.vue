<template>
    <div>
        <bgimg/>
        <div class="container">
            <headerimg/>
            <div class="index-content-section">
                <!-- 用户相片 -->
                <img src="../../assets/images/testImage.jpg" class="user" style="width: 100%;">

                <img src="../../assets/images/theme.png" class="theme_logo">
                <img src="../../assets/images/tip2.png" class="tip">
                <div class="message">
                    <p class="content">
                        我的个税我做主,工薪所得是实行七级超额累进税率！
                    </p>
                </div>
                <div class="bottom">
                    <div class="left">
                        <img src="../../assets/images/download.png" class="download">
                        <img src="../../assets/images/more.png" class="more">
                        <img src="../../assets/images/return.png" class="return">
                    </div>

                    <div class="information">
                        <div class="qr_code">
                            <img src="../../assets/images/qr_code.png">
                        </div>
                        <div class="profile">
                            <img src="../../assets/images/testImage.jpg" class="headImg">
                            <div class="userInfo">
                                <span>汤梦佳</span>
                                <span>我是佛山税务第5号减税降费政策宣传员</span>
                                <span>生成了第8888张减税降费宣传海报</span>
                            </div>
                            <img src="../../assets/images/tip_arrow.png" class="arrow">
                        </div>

                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
    import bgimg from "../public/bgimg";
    import headerimg from "../public/header";
    export default {
        data(){
            return {

            }
        },
        components: {
            bgimg,
            headerimg
        },
        methods:{
        }
    }
</script>

<style scoped lang="less">
    .background{
        background: url("../../assets/images/user_poster_header.png") no-repeat !important;
        background-size: 100%!important;
    }
    .index-content-section{
        z-index: -5;
        height: 710px;
        position: relative;
        .theme_logo{
            position: absolute;
            width: 35%!important;
            top:48px!important;
            right: 15px;
        }
        .tip{
            position: absolute;
            top: 155px;
            right: 15px;
            width: 35%;
        }
        .message{
            display: flex;
            justify-content: center;
            position: absolute;
            width: 40%;
            height: 130px;
            right: 10px;
            top: 280px;
            background: url("../../assets/images/mesage_frame.png") no-repeat;
            background-size: 100% 100%;
            .content{
                width: 80%;
                font-size: 17px;
                text-align: left;
                font-weight: bold;
            }
        }
        .bottom{
            position: absolute;
            border: 1px solid green;
            bottom: 0;
            width: 100%;
            height: 430px;
            background: url("../../assets/images/user_poster_bottom.png") no-repeat;
            background-size: 100% 100%;
            .left{
                width: 50px;
                display: flex;
                flex-flow: column;
                justify-content: center;
                margin-top: 110px;
            }
            .download,.more,.return{
                width: 80%;
                height: 50px;
                margin: 10px auto;
            }
            .return{
                width: 60%!important;
            }
            .information{
                width: 88%;
                height: 70px;
                margin: 0 auto;
                .qr_code{float:left;width: 70px;height: 70px;img{width: 100%;}}
                .profile{
                    float: right;
                    width: 74%;
                    height: 70px;
                    position: relative;
                    margin-right: 5px;
                    .headImg{width: 40px;height: 40px;float: left;border-radius: 50%;margin-left: 10px;}
                    .userInfo{
                        width: 75%;height: 50px;float: right;margin-right: 8px;
                        span{padding: 0!important;margin: 0!important;text-align: left;display: block;}
                        span:nth-child(2),span:nth-child(3){font-size: 10px;line-height:12px;}
                    }
                    .arrow{position:absolute;width: 92%;bottom: 3px;left: -5px;}
                }
            }
        }
    }

</style>
