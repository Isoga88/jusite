<template>
    <div class="bg-black flex flex-col h-screen w-full">
        <div class="flex flex-col justify-center pt-20">
            <h1 class="text-5xl font-extrabold tracking-wider titlefont text-center text-amber-500">Lo staff</h1>
            <h2 class="text-base font-normal pt-4 text-gray-300 text-center max-md:px-3 portrait:px-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptates placeat nemo eveniet explicabo. Iusto.</h2>
        </div>
        <div class="flex flex-row h-full items-center max-md:flex-col portrait:flex-col">
            <Personelement
            name="Jurgen"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam necessitatibus ducimus natus voluptatem sequi iste nemo quos? Est, repellendus ut."
            direction="right"
            :hover="hoverImg1"
            photo="/assets/img/tipo3.png"
            ></Personelement>
            <Personelement
            name="Manuel"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ex saepe modi quae impedit quis vitae, sequi maxime ipsa odio at excepturi laboriosam, dolorem dicta!"
            direction="left"
            :hover="hoverImg2"
            photo="/assets/img/tipo3.png"
            ></Personelement>
            
        </div>
    </div>
</template>
<script setup>
const hoverImg1 = ref(false)
const hoverImg2 = ref(false)
</script>
<style>
@media only screen 

and (orientation : portrait) { 
    .flexver{
    flex-direction: column;
}
}
</style>
