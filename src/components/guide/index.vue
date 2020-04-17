<template>
    <div>
        <bgimg/>
        <div class="container">
            <headerimg/>
            <img class="theme" src="../../assets/images/theme.png">
            <div class="index-content-section">
                <div class="index-content">1. <span>点击开始，选取角色后，点击“生成海报”系统会随机匹配内容，自动生成海报。</span></div>
                <div class="index-content">2. <span>活动设有“邀请排行榜”，用户分享个人专属海报，邀请好友加入“税收宣传员”队伍，可实时刷新排名。</span></div>
                <div class="index-content">3. <span>活动的最终解释权归主办方所有。</span></div>
            </div>
            <img src="../../assets/images/bt-began.png" class="bt-began" @click="clickImage()">
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
                id: Config.config.appsecret
            }
        },
        components: {
            bgimg,
            headerimg
        },
        methods:{
            clickImage(){
                console.log("fdghfh");
            }
        }
    }
</script>

<style scoped>
    .index-content-section{
        width: 250px;
        height:200px;
        overflow:hidden;
        border:2px solid #FBD41B;
        margin: 0 auto 40px;
        background: rgba(253,236,164,0.5);
        border-radius: 15px;
    }
    .index-content{
        display: flex;
        justify-content: left;
        width: 92%;
        color:#E94909;
        font-size:14px;
        font-weight:bold;
        padding: 10px 10px;
        margin: 0 auto;
        text-align: left;
        line-height: 20px
    }
    .bottom-btn{
        margin-top:10px;
    }
    .bt-began{
        width: 33%;
    }

</style>
