<template>
    <div>
        <bgimg/>
        <div class="container">
            <headerimg/>
            <img class="theme" src="../../assets/images/theme.png">
            <div class="index-content-section">
                <div class="index-content">1. 点击开始，选取角色后，可生成系统随机匹配的海报（自动生成海报）或自己上传照片生成海报（自定义海报）。</div>
                <div class="index-content">2. 转发自己的专属海报到朋友圈、微信群，邀请好友扫专属海报上的二维码加入减税降费宣传大军，邀请的越多排行榜排名越高。</div>
                <div class="index-content">3. 动的最终解释权归国家税务总局佛山市税务局所。</div>
            </div>
            <button class="app-btn bottom-btn"> 开始 </button>
        </div>

    </div>
</template>

<script>
    import bgimg from "../public/bgimg";
    import headerimg from "../public/header";
    export default {
        components: {
            bgimg,
            headerimg
        }
    }
</script>

<style scoped>
    .index-content-section{
        height:280px;
        overflow:hidden;
    }
    .index-content{
        width:280px;
        padding-left:25px;
        color:#fff;
        margin:25px auto;
        color:#fff;
        font-size:14px;
        text-align:left;
        font-weight:bold;
        text-indent:-30px;
    }
    .bottom-btn{
        margin-top:10px;
    }

</style>
