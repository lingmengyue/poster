<template>
    <div>
        <bgimg/>
        <div class="container">
            <headerimg/>
            <img class="theme" src="../../assets/images/theme.png">
            <div class="index-content-section">

            </div>
<!--            <img src="../../assets/images/bt-began.png" class="bt-began" @click="clickImage()">-->
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

    }
    .theme{margin: 35px 0!important;}

</style>
