<style lang="scss" scoped>
    .map {
        border: solid 2px $brown-x-light;
        border-radius: 5px;
    }
</style>

<template>
    <section class="site-content boxed header-padding">

        <section class="content-row content-padding">

            <h2 class="section-header">Our Story</h2>

            <section class="two-columns">
                <section>
                    <p>Chilo's Chile was formed in 2004 when love for cooking
                        and chile turned into a hobby that never stopped
                        growing.</p>
                    <p>The products we ship are the same we sell locally.
                        Our customers from New Mexico to New York, choose Chilo's
                        because it is the real deal. Those local to the area have
                        many</p>
                    <p>No secrets. No preservatives. Just tomatoes, jalepenos, garlic and salt.
                        You get fresh salsa delivered to you in every jar.</p>
                    <h3>Mesilla, NM</h3>
                    <p>If you draw a triangle between Mesilla, Deming, and Hatch, NM
                        you will find the area where approximately 70% of all domestic
                        chile production and processing occurs. This area, known
                        as the Mesilla Valley, is where our salsa is made and where
                        the ingredients that goes in to it are grown.</p>
                </section>
                <section><img v-bind:src="mapImage" class="map" width="100%"/></section>
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
