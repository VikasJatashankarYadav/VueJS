<template>
    <div :class="'contain bg-first-container text-center'">
        <p>If you can dream it, Mac can do it.</p>
        <p>Apple unveils M3, the most advanced chips for a personal computer.</p>

        <!-- Adding media with the help of icons to avoid large files and copyright issues -->
        <div :class="'flex place-content-center'">
            <img width="48" height="48" src="https://img.icons8.com/color/48/workstation.png" alt="workstation"/>
            <img width="48" height="48" src="https://img.icons8.com/color/48/laptop--v3.png" alt="laptop--v3"/>
            <img width="48" height="48" src="https://img.icons8.com/fluency/48/iphone14-pro--v1.png" alt="iphone14-pro--v1"/>
        </div>
        
        <div :class="'text-justify inline-block'">
            <li>The industry’s first 3-nanometer chips for a personal computer debut a next-generation GPU architecture and deliver dramatic performance improvements, a faster CPU and Neural Engine, and support for more unified memory.</li>
            <li>Apple silicon has completely redefined the Mac experience. Every aspect of its architecture is designed for performance and power efficiency.</li>
            <li>With 3-nanometer technology, a next-generation GPU architecture, a higher-performance CPU, faster Neural Engine, and support for even more unified memory, M3, M3 Pro, and M3 Max are the most advanced chips ever built for a personal computer.</li>
            <li>The M3 family of chips features a next-generation GPU that represents the biggest leap forward in graphics architecture ever for Apple silicon.</li>
            <li>The GPU is faster and more efficient, and introduces a new technology called Dynamic Caching, while bringing new rendering features like hardware-accelerated ray tracing and mesh shading to Mac for the first time.</li>
            <li>Rendering speeds are now up to 2.5x faster than on the M1 family of chips.</li>
            <li>You can answer calls or messages from your iPhone directly on your Mac. </li>
            <li>Copy images, video, or text on your iPhone, then paste into another app on your nearby Mac.</li>
            <li>Sketch on your iPad and have it appear instantly on your Mac.</li>
            <li>Use your iPad as a second display, so you can work on one screen while you reference the other.</li>
            <li>Automatically log in to your Mac when you’re wearing your Apple Watch with Auto Unlock. No password typing required.</li>
        </div>    
    </div>
</template>

<script>
export default {
    name: 'FirstContainer',
    props:{}
}
</script>

<style scoped>
.contain{
    flex: auto;
    padding-left: 3%;
    padding-right: 3%;
    height: 325px;
    overflow: auto;
}

.contain::-webkit-scrollbar {
    width: 0.1em;
}

.contain::-webkit-scrollbar-thumb {
    background-color: #888;
}

.contain::-webkit-scrollbar-track {
    background-color: #f1f1f1;
}


p{
    margin-top: 1%;
    margin-bottom: 1%;
    font-size: 32px;
    font-weight: 400;
    font-family: 'Times New Roman', Times, serif;
}
</style>