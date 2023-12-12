<template>
    <Hero class="section" ></Hero>
    <div class="h-full w-full bg-[url('~/assets/img/bg_all.svg')] bg-cover">
        <Firstsection class="section"></Firstsection>
        <Secondsection class="section"></Secondsection>
        <Thirdsection class="section"></Thirdsection>
    </div>
    <foot class="section h-screen"></foot>
</template>
<script setup>
import Thirdsection from '~/components/thirdsection.vue';


</script>
<style>
.section{
    scroll-snap-align:start ;
    scroll-snap-stop: always;
    color: white;
}

</style>
