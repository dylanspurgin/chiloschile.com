<style lang="scss" scoped>
    .header-image {
        background-image: url('/static/about_header.jpg');
    }
    .map {
        border: solid 1px $black;
        border-radius: 5px;
    }
</style>

<template>
    <section class="site-content boxed">

        <section class="header-image">
            <h1 class="page-title">Chilo's Story</h1>
        </section>

        <section class="content-row content-padding">

            <section class="two-columns">
                <section>
                    <h3>Mesilla, NM</h3>
                    <p>If you draw a triangle between Mesilla, Deming, and Hatch, NM
                        you will find the area where approximately 70% of all domestic
                        chile production and processing occurs. This area, known
                        as the Mesilla Valley, is where our salsa is made and where
                        the ingredients that goes in to it are grown.</p>
                    <img v-bind:src="mapImage" class="map hidden-tablet" width="100%"/>
                    <h3>Our Salsa</h3>
                    <p>Chilo's Chile was formed in 2004 when a love for cooking
                        and chile turned into a hobby that never stopped
                        growing.</p>
                    <p>The products we ship are the same we sell locally.
                        Our customers from New Mexico to New York, choose Chilo's
                        because it is the real deal. Those local to the area have
                        many choices and they choose Chilo's for it's quality.
                        And now even the New Mexico expatriats can enjoy the
                        same fresh salsa they used to get back home.</p>
                    <p>No secrets. No preservatives. Just tomatoes, jalepenos, garlic and salt.
                        You get fresh salsa delivered to you in every jar.</p>
                </section>
                <section class="hidden-mobile">
                    <h3>The Mesilla Valley</h3>
                    <img v-bind:src="mapImage" class="map" width="100%"/>
                </section>
            </section>
        </section>

    </section>
</template>

<script>
const mapImage = require('../assets/map.png')

export default {
    name: 'about',
    data: () => {
        return {
            mapImage
        }
    }
}
</script>
