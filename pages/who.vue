<template>
    <Hero class="snap-start snap-always text-white max-md:snap-center"
    :heading = "heading_hero_section"
    :subheading = "subheading_hero_section"
    bgPhoto = "gruppone.jpg"
    direction = "left"
    ></Hero>
    <Whosection class="snap-start snap-always text-white max-md:snap-center"></Whosection>
    <foot class="snap-start text-white"></foot>
</template>
<script setup>
const heading_hero_section = ref("La sezione di chi siamo")
const subheading_hero_section = ref("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex nulla maiores assumenda explicabo soluta vero error, officiis vitae asperiores in tenetur possimus minus officia sit laboriosam odio eos recusandae porro?")
</script>