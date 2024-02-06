<template>
    <div :class="'contain bg-second-container'">
        <div :class="'grid lg:grid-cols-2'">
           <Card :title="title" :specs="specs" :color="color1" />
           <Card :title="title2" :specs="specs2" :color="color2" />
           
        </div>    
    </div>
</template>

<script>

import Card from './Card.vue';

export default {
    name: 'SecondContainer',
    components:{
        Card,
    },
    props:{},
    data() {
        return{
            specs: [
                {
                    info: 'MacBook Pro blasts forward with the M3, M3 Pro, and M3 Max chips.',
                },
                {
                    info: 'Up to 16-core CPU.',
                },
                {
                    info: 'Up to 40-core GPU.',
                },
                {
                    info: 'Up to 128 GB unified memory.',
                },
                {
                    info: 'The best display ever in a laptop.',
                },
                {
                    info: 'Game-changing graphics performance.',
                },
                {
                    info: 'Dynamic Caching optimizes fast on-chip memory to dramatically increase average GPU utilization.',
                },
                {
                    info: 'Games will look more detailed than ever thanks to hardware-accelerated mesh shading.',
                },
                {
                    info: 'Hardware-accelerated ray tracing.',
                },
                {
                    info: 'Up to 80% faster CPU multithreaded performance than 16‑inch MacBook Pro with M1 Max.',
                },
                {
                    info: 'Over 18 trillion operations per second.',
                },
                {
                    info: 'With thousands of apps optimized to unlock the full power of macOS and Apple silicon, M3 chips accelerate performance like never before.',
                },
                {
                    info: 'Extreme Dynamic Range (XDR) brings refined specular highlights, incredible detail in shadows, and vibrant, true to life colors. ',
                },
                {
                    info: 'Calibrated in the factory, each Liquid Retina XDR display also features ProMotion and pro reference modes',
                },
            ],
            title: "MacBook Pro",
            color1: "#ffcc00",
            specs2: [
                {
                    info: 'Strikingly thin and fast so you can work, play, or create anywhere.',
                },
                {
                    info: 'Up to 8-core CPU.',
                },
                {
                    info: 'Up to 10-core GPU.',
                },
                {
                    info: 'Up to 24 GB unified memory.',
                },
                {
                    info: 'The most affordable Mac laptop to get things done on the go.',
                },
                {
                    info: '2TB Maximum configurable storage.',
                },
                {
                    info: 'Up to 18 hours battery life.',
                },
                {
                    info: '1080p FaceTime HD camera.',
                },
                {
                    info: 'Three-mic array Six-speaker sound system with Spatial Audio.',
                },
                {
                    info: 'Just trade in your eligible computer for credit or recycle it for free. It is good for you and the planet.',
                },
                {
                    info: 'Get the power to take your business to the next level.',
                },
                {
                    info: 'Empowering educators and students to move the world forward.',
                },
                {
                    info: 'Enjoy two-hour delivery from an Apple Store, free delivery, or easy pickup.',
                },
            ],
            title2: "MacBook Air",
            color2: "#ff99ff",
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