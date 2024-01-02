<template>
    <section class="h-screen text-white">
        <div class="h-screen bg-cover bg-center bg-[url('?')]" :style="{ backgroundImage: `url('${bgPhoto}')` }">
            <header>
                <Navbar></Navbar>
            </header>
            <div class="flex justify-center items-center h-full max-md:h-screen max-md:items-start" :class="{'flex-row max-md:pt-24': right, 'flex-row-reverse max-md:pt-24': left, 'max-md:p-0':centre}">            
                <div class="w-1/2 max-md:w-0" :class="{'hidden':centre}"></div>
                <div class="w-1/2 text-center mx-12 max-md:w-full max-md:mx-4" :class="{'w-full max-md:h-full max-md:flex max-md:items-center max-md:justify-center max-md:flex-col':centre}">
                    <h1 class="mb-8 text-5xl font-extrabold leading-none tracking-tight text-white max-md:mb-6 titlefont ">{{ heading }}</h1>
                    <h2 class="mb-6 text-lg font-semibold text-gray-300">{{ subheading }}</h2>
                    
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
const { direction, heading, subheading, bgPhoto } = defineProps(['direction', 'heading', 'subheading', 'bgPhoto']);
const left = ref(false)
const right = ref(false)
const centre = ref(false)

if (direction == "left"){
    left.value = true
}else if(direction == "right"){
    right.value = true
}else if (direction == "centre"){
    centre.value = true
}else{
    print("props hero.vue error")
}

</script>
<style>
.tras{    
    transform: translate(0%, 335%);
}
</style>