<template>
    <div>
        <Hero class="snap-start snap-always text-white max-md:snap-center"
        :heading = "heading_hero_section"
        :subheading = "subheading_hero_section"
        bgPhoto = "first-min.jpg"
        direction="right"
        ></Hero>
        <div class="bg-[url('~/assets/img/bg_all.svg')] bg-cover">
            <Firstsection class="snap-start snap-always text-white max-md:snap-center "></Firstsection>
            <Secondsection class="snap-start snap-always text-white max-md:snap-center"></Secondsection>
            <Thirdsection class="snap-start snap-always text-white max-md:snap-center"></Thirdsection>
        </div>
        <foot class="snap-start text-white"></foot>
    </div>
</template>
<script setup>
const heading_hero_section = ref("Vediamo cosa riusciamo a fare")
const subheading_hero_section = ref("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex nulla maiores assumenda explicabo soluta vero error, officiis vitae asperiores in tenetur possimus minus officia sit laboriosam odio eos recusandae porro?")

</script>
<style>
</style>
