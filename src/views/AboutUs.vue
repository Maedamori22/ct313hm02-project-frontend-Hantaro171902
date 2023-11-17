<template>
    <div class="about_1">
        <div class="about_banner_1">
            <img src="@/assets/picture/ABOUT-CAREER_1.jpg" alt="">
        </div>
        <div class="box_mid_1">
            <div class="title">
                <h2>ORIGIN</h2>
            </div>
            <div class="mid-content">
                <div class="the-content desc">
                    <p>THIS STORY IS OURS</p>
                    <p>
                        Highlands Coffee® was established in 1999 and born out of love for Vietnam, its coffee and its communities. 
                        The spirit of community is in our Vietnamese DNA. 
                        Since the beginning, our goal has been to serve and uplift society by enriching human connections and social togetherness. 
                        Today, with hundreds of stores in Vietnam and abroad, we serve more than just coffee. 
                        We stand for a place of belonging. We act as the hub that brings people together, placing Highlands Coffee® at the heart of communities everywhere.
                    </p> 
                    <p>
                        As we look to the future we see a growing Vietnam and an ever evolving Highlands Coffee®. 
                        A hub of the community where people can connect and bond over a shared love of delicious, coffee, teas and food. 
                        At Highlands Coffee® we stand with you, we stand for you, we stand together as one community.
                    </p>
                    <h3>Highlands Coffee® Is Ours.</h3>
                    
                </div>
            </div>
        </div>
    </div>

    <div class="about_2">
        <div class="about_banner_2">
            <img src="@/assets/picture/ABOUT-CAREER_2.jpg" alt="">
        </div>
        <div class="box_mid_2">
            <div class="title">
                <h2>CUSTOMER SERVICE</h2>
            </div>
            <div class="mid-content">
                <div class="the-content desc">
                    <p>THIS SERVICE IS OURS</p>
                    <h3>What can we do to improve our hub?</h3>
                    <p>
                        Highlands Coffee® is our space so everything in there is for our satisfaction.
                        Don’t keep it to yourself, share with us what you want to make our Highlands Coffee® a better place.
                    </p> 
                    <h3>Feel free to share your opinions at:</h3>
                    <p>
                        Facebook: https://www.facebook.com/highlandscoffeevietnam/
                        Or you can send an email us at customerservice@highlandscoffee.com.vn, we will reply to you as quickly as possible.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Agbalumo&family=Anton&display=swap');
.box_mid_1 {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    float: left;;
}

.title {
    margin-bottom: 20px;
}

.title h2 {
    text-align: center;
    font-weight: bold;
    font-family: Agbalumo;
    font-size: 40px;
    font-weight: bold;
    color: #53382c;
}

.about_banner_1 img{
    width: 800px;
    float: right;
}

.mid-content {
    padding: 20px;
}

.the-content.desc {
    text-align: justify;
    color: #53382c;
}

.the-content.desc h3{
    font-size: 20px;
    color: #4f2c1c;
    font-weight: bold;
}

.the-content.desc p {
    font-size: 16px;
    line-height: 24px;
}
.the-content.desc p:first-child {
    font-size: 18px;
} 
.about_2{
    padding-top: 450px;
}
.box_mid_2 {
    width: 100%;
    max-width: 780px;
    margin: 0 auto;
    float: right;;
}

.about_banner_2 img{
    width: 800px;
    float: left;
}

</style>

