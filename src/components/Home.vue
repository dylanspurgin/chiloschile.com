<style lang="scss" scoped>
    section.hero {
        width: 100%;
        height: 400px;
        background-image: url('/static/hero.jpg');
        background-position: center;
        background-size: cover;
        position: relative;

        .hero-lead-in {
            position: absolute;
            right: 0;
            bottom: 0;
            padding: 0 20px 20px 0;
            text-align: center;
            width: 60%;
            display: flex;
            flex-direction: column;
            h1 {
                color: $white;
                font-weight: bold;
                -webkit-text-stroke: 1px $black;
                margin-bottom: 20px;
            }
            .button {
                align-self: center;
            }
        }
    }
    section.salsa-ctas-container {
        margin: 40px 0;
    }

    section.salsa-cta {
        display: flex;
        flex-direction: row;
        flex-grow: 1;
        justify-content: space-around;
        padding: 0 40px;
        margin: 40px 20px;
        height: 180px;

        img.salsa-cta-image {
            height: 280px;
            margin-top: -50px;
        }

        .salsa-cta-copy {
            text-align: center;
        }

        h2 {
            margin: 20px 0 10px 0;
        }
        h3 {
            margin: 10px 0 20px 0;
            padding: 0;
            font-style: italic;
        }
    }

    // Mobile specific styling
    @media (max-width: $mobile-max-width) {
        section.hero {
            .hero-lead-in {
                position: relative;
                padding: 20px;
                text-align: center;
                width: 100%;
                display: flex;
                flex-direction: column;
            }
        }

        section.salsa-cta {
            padding: 0 20px;
            margin: 40px 0px 80px;
            height: 180px;

            img.salsa-cta-image {
                height: 60vw;
                margin-top: -50px;
            }
        }
    }
</style>

<template>
    <section class="site-content boxed">
        <section class="hero">
            <section class="hero-lead-in">
                <h1>Authentic salsa made from fresh ingredients and no preservatives.</h1>
                <a href="http://shop.chiloschile.com/" class="button button-lg button-red">Shop Now</a>
            </section>
        </section>

        <section class="content-row content-padding">

            <h2 class="section-header">Highway 28 Salsa</h2>
            <p>We make our world famous salsa in both heat levels: Hot and
                Not-quite-as-hot. Both are made with the same honest ingredients.
                Choose your favorite below or grab a
                <a href="http://shop.chiloschile.com/">mixed case</a> containing
                half red and half green!</p>

            <section class="salsa-ctas-container stacked-on-mobile">
                <section class="salsa-cta cc-panel">
                    <img class="salsa-cta-image" v-bind:src="salsaRedImage" />
                    <section class="salsa-cta-copy red-xdark">
                        <h2>Red Lid</h2>
                        <h3>Original Red Hot</h3>
                        <a class="button button-red" href="http://shop.chiloschile.com/">Shop Now</a>
                    </section>
                </section>

                <section class="salsa-cta cc-panel">
                    <img class="salsa-cta-image" v-bind:src="salsaRedImage" />
                    <section class="salsa-cta-copy green-xdark">
                        <h2>Green Lid</h2>
                        <h3 class="hidden-mobile">Milder but not Mild</h3>
                        <h3 class="hidden-tablet">Milder, not Mild</h3>
                        <a class="button button-green" href="http://shop.chiloschile.com/">Shop Now</a>
                    </section>
                </section>
            </section>

            <h2 class="section-header">Did you know?</h2>
            <p>
                <img v-bind:src="jalapenoImage" class="inline-image"/>
                The chile (or chili) pepper is the fruit of plants from the genus
                <span class="italic">Capsicum</span>, members of the nightshade
                family. <span class="italic">Capsicum annuum</span> is
                the most common and extensively cultivated species and includes
                many common varieties such as bell peppers, wax, cayenne,
                jalapeños, chiltepin, and all forms of New Mexico chile.</p>
            <p>Want to know more? Check out our
                <router-link :to="{name: 'Trivia'}">chile
                    trivia page</router-link>.</p>

        </section>

    </section>
</template>

<script>
const salsaRedImage = require('../assets/salsa-red.png')
const jalapenoImage = require('../assets/jalapeno.jpg')
export default {
    name: 'home',
    data: () => {
        return {
            salsaRedImage,
            jalapenoImage
        }
    }
}
</script>
