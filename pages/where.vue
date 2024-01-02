<template>
    <Hero class="snap-start snap-always text-white max-md:snap-center"
    :heading = "heading_hero_section"
    :subheading = "subheading_hero_section"
    bgPhoto = "capaorizzontal1.png"
    direction = "centre"
    ></Hero>
    <Wheresection class="snap-start snap-always text-white max-md:snap-center"></Wheresection>
    <foot class="snap-start text-white"></foot>
</template>
<script setup>
const heading_hero_section = ref("La sezione della posizione")
const subheading_hero_section = ref("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex nulla maiores assumenda explicabo soluta vero error, officiis vitae asperiores in tenetur possimus minus officia sit laboriosam odio eos recusandae porro?")
</script>