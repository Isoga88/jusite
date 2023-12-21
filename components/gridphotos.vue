<template>
    <div class="w-2/5 h-full items-center justify-center flex max-md:w-full max-md:h-2/6 portrait:w-full portrait:h-2/6">
        <figure class="pl-6 w-full h-full transition-all duration-700 cursor-pointer filter grid grid-cols-6 grid-rows-6 max-md:flex max-md:justify-center mb-8 max-md:pb-9 max-md:pt-2 max-md:px-0 portrait:flex portrait:justify-center portrait:pb-9 portrait:pt-2 portrait:px-0">
            <div class="hover:brightness-200 rounded-lg col-start-1 col-end-6 row-start-2 row-end-5 shadow-xl transition-all hover:scale-105 hover:z-10 transition-all duration-700 max-md:w-5/6 portrait:w-5/6 bg-[url('~/assets/img/taglio2.jpg')] no-repeat bg-cover" :class="{ 'bg-opacity-100 translate-x-0 ': animateTransition, 'bg-opacity-0 relative -translate-x-96': !animateTransition }" >
            </div>
            <div class="hover:brightness-200 rounded-lg col-start-3 col-end-7 row-start-3 row-end-7 shadow-xl transition-all hover:scale-105 transition-all duration-1000 max-md:hidden portrait:hidden bg-[url('~/assets/img/taglio1.jpg')] no-repeat bg-cover" :class="{ 'bg-opacity-100 translate-x-0 ': animateTransition, 'bg-opacity-0 relative -translate-x-96': !animateTransition }, ''">
            </div>
        </figure>
    </div>
</template>
<script setup>
defineProps(['animateTransition'])

</script>