<template>
    <div :class="'contain bg-third-container'">
        <div :class="'grid lg:grid-cols-2'">
            <!-- Using reusable components and passing props -->
            <Card :title="title" :specs="specs" :color="color1" />
            <Card :title="title2" :specs="specs2" :color="color2" />
           
        </div>      
    </div>
</template>

<script>
import Card from './Card.vue';

export default {
    name: 'ThirdContainer',
    components:{
        Card,
    },
    props:{},
    data() {
        return{
            specs: [
                {
                    info: 'iPhone 15 Pro is the first iPhone to feature an aerospace grade titanium design, using the same alloy that spacecraft use for missions to Mars.',
                },
                {
                    info: 'Titanium has one of the best strength to weight ratios of any metal, making these our lightest Pro models ever. You will notice the difference the moment you pick one up.',
                },
                {
                    info: 'A17 Pro chip. A monster win for gaming.',
                },
                {
                    info: 'The biggest redesign in the history of Apple GPUs.',
                },
                {
                    info: 'A17 Pro is an entirely new class of iPhone chip that delivers our best graphics performance by far.',
                },
                {
                    info: 'Mobile games will look and feel so immersive, with incredibly detailed environments and more realistic characters.',
                },
                {
                    info: 'A camera that captures your wildest imagination.',
                },
                {
                    info: 'With iPhone 15 Pro, you have multiple focal lengths to work with. It is like having seven pro lenses in your pocket, everywhere you go.',
                },
                {
                    info: 'The 48MP Main camera is more advanced than ever, capturing super high resolution photos with a new level of detail and color.',
                },
                {
                    info: 'Shoot magical spatial videos, then relive them on Apple Vision Pro.',
                },
                {
                    info: '120 mm of pure Pro zoom.',
                },
                {
                    info: 'The all new Action button is a fast track to your favorite feature. Once you set the one you want, just press and hold to launch the action.',
                },
                {
                    info: 'iPhone 15 Pro is the first iPhone to support USB 3,6 for a huge leap in data transfer speeds and faster pro workflows than ever before.',
                },
                {
                    info: 'The new USB‑C connector lets you charge your Mac or iPad with the same cable you use to charge iPhone 15 Pro. Bye bye, cable clutter.',
                },
                {
                    info: 'Even with so many advanced new features, iPhone 15 Pro still gives you amazing all‑day battery life.',
                },
            ],
            title: "iPhone 15 Pro",
            color1: "#ff9966",
            specs2: [
                {
                    info: 'Wireless. Effortless. Magical.',
                },
                {
                    info: 'With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case, AirPods deliver an incredible wireless headphone experience. ',
                },
                {
                    info: 'Simply take them out and they’re ready to use with all your devices. Put them in your ears and they connect immediately, immersing you in rich, high-quality sound. Just like magic.',
                },
                {
                    info: 'After a simple one-tap setup, AirPods are automatically on and always connected.',
                },
                {
                    info: 'They sense when they’re in your ears and pause when you take them out.',
                },
                {
                    info: 'AirPods experience is just as amazing whether you’re using them with your iPhone, Apple Watch, iPad, Mac, or Apple TV.',
                },
                {
                    info: 'Need a hand? Simply say “Hey Siri” for assistance without having to reach for your iPhone.',
                },
                {
                    info: 'Siri can automatically read important notifications from Messages, Phone, Calendar, Reminders, and more as they arrive.',
                },
                {
                    info: 'Powered by the Apple H1 headphone chip, AirPods deliver a fast and stable wireless connection to your devices.',
                },
                {
                    info: 'The H1 chip also drives voice-enabled Siri access and delivers up to 30 percent lower gaming latency.',
                },
                {
                    info: 'With the available Wireless Charging Case, charging is as simple as placing the AirPods case on a Qi-certified charging mat.',
                },
            ],
            title2: "AirPods",
            color2: "#9999ff",
        }
    }
}
</script>

<style scoped>
.contain{
    padding-left: 3%;
    padding-right: 3%;
}
</style>