<template>
    <div>
        <bgimg/>
        <div class="container">
            <headerimg/>
            <div class="index-content-section">
                <div class="my_poster">
                    <img src="../../assets/images/my_poster.png">
                </div>
                <div class="poster_image">

                </div>
            </div>
            <div class="bottom">
                <div class="btn">
                    <img src="../../assets/images/refresh.png">
                    <img src="../../assets/images/poster_mange.png">
                </div>
                <div class="help">
                    <img src="../../assets/images/help.png">
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
    .theme{margin: 30px 0 0!important;width: 190px!important;}
    .index-content-section{
        border: 1px solid red;
        margin-top: 80px;
        .my_poster{
            width: 70%;
            margin: 0 auto;
            img{width: 100%;}
        }
        .poster_image{
            width: 72%;
            height: 375px;
            border: 1px solid blue;
            margin: 15px auto 0;
            border-radius: 15px;
        }
    }
    .bottom{
        width: 55%;
        margin: 20px auto 0;
        .btn{
            height: 72px;
            display: flex;
            justify-content: space-around;
            img{width: 35%;}
        }
        .help{
            img{width: 25%;margin: -15px 0 25px 235px;}
        }
    }

</style>
