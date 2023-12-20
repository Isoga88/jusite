<template>
    <section class="relative w-full h-screen flex flex-row justify-center z-10 max-md:flex-col-reverse portrait:flex-col-reverse">
        <div class="w-2/5 h-full items-center justify-center flex max-md:w-full max-md:h-2/6 portrait:w-full portrait:h-2/6">
            <figure class="pl-6 w-full h-full transition-all duration-700 cursor-pointer filter grid grid-cols-6 grid-rows-6 max-md:flex max-md:justify-center mb-8 max-md:pb-9 max-md:pt-2 max-md:px-0 portrait:flex portrait:justify-center portrait:pb-9 portrait:pt-2 portrait:px-0">
                <div class="hover:brightness-200 rounded-lg col-start-1 col-end-6 row-start-2 row-end-5 shadow-xl transition-all hover:scale-105 hover:z-10 transition-all duration-700 max-md:w-5/6 portrait:w-5/6 bg-[url('~/assets/img/taglio2.jpg')] no-repeat bg-cover max-md:bg-opacity-100 max-md:translate-x-0" :class="{ 'bg-opacity-100 translate-x-0 ': animateTransition, 'bg-opacity-0 relative -translate-x-96': !animateTransition }" >
                </div>
                <div class="hover:brightness-200 rounded-lg col-start-3 col-end-7 row-start-3 row-end-7 shadow-xl transition-all hover:scale-105 transition-all duration-1000 max-md:hidden portrait:hidden bg-[url('~/assets/img/taglio1.jpg')] no-repeat bg-cover max-md:bg-opacity-100 max-md:translate-x-0" :class="{ 'bg-opacity-100 translate-x-0 ': animateTransition, 'bg-opacity-0 relative -translate-x-96': !animateTransition }">
                </div>
            </figure>
        </div>
        <div class="w-3/5 h-full flex flex-col pl-12 items-center justify-center pt-8 max-md:w-full max-md:px-4 max-md:h-4/6 portrait:w-full portrait:px-4 portrait:h-4/6">
            <div class="pb-6 transition-all duration-700 max-md:bg-opacity-100 max-md:translate-x-0" :class="{ 'bg-opacity-100 translate-x-0 ': animateTransition, 'bg-opacity-0 relative -translate-x-96': !animateTransition }">
                <h1 class="flex justify-center text-5xl text-amber-500 font-extrabold tracking-wider max-md:text-center portrait:text-center titlefont">
                Cosa puoi trovare?
                </h1>
                <h2 class=" pl-2 text-base font-semibold pt-4 text-gray-300 max-md:px-0 max-md:text-center portrait:px-0 portrait:text-center">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio distinctio deserunt quis.
                </h2>
            </div>
            <AdvantageList class="transition-all duration-1000 max-md:bg-opacity-100 max-md:translate-x-0" :class="{ 'bg-opacity-100 translate-x-0 ': animateTransition, 'bg-opacity-0 relative -translate-x-96': !animateTransition }"></AdvantageList>
        </div>
    </section>
</template>
<script setup>
const animateTransition = ref(false)

const onScroll = () =>{
    let windowHeight = window.top.scrollY;
    if (120 < windowHeight) {
        animateTransition.value= true
    }else {
        animateTransition.value= false
    }
}
onMounted(() => {
    window.addEventListener('scroll', onScroll);
});

onBeforeUnmount(()=>{
    window.removeEventListener('scroll', onScroll)
})

</script>
