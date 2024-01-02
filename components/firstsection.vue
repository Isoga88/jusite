<template>
    <section class="relative w-full h-screen flex flex-row justify-center z-10 max-md:flex-col-reverse portrait:flex-col-reverse">
        <Gridphotos
        :animateTransition = "animateTransition"
        :photos = "photos"
        ></Gridphotos>
        <div class="w-3/5 h-full flex flex-col pl-12 items-center justify-center pt-8 max-md:w-full max-md:px-4 max-md:h-4/6 portrait:w-full portrait:px-4 portrait:h-4/6">
            <div class="pb-6 transition-all duration-700" :class="{ 'bg-opacity-100 translate-x-0 ': animateTransition, 'bg-opacity-0 relative -translate-x-96': !animateTransition }">
                <h1 class="flex justify-center text-5xl text-amber-500 font-extrabold tracking-wider max-md:text-center portrait:text-center titlefont">
                Cosa puoi trovare?
                </h1>
                <h2 class=" pl-2 text-base font-semibold pt-4 text-gray-300 max-md:px-0 max-md:text-center portrait:px-0 portrait:text-center">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio distinctio deserunt quis.
                </h2>
            </div>
            <AdvantageList class="transition-all duration-1000" :class="{ 'bg-opacity-100 translate-x-0 ': animateTransition, 'bg-opacity-0 relative -translate-x-96': !animateTransition }"></AdvantageList>
        </div>
    </section>
</template>
<script setup>
const animateTransition = ref(false)
const photos = ref([{source:"taglio2.jpg", name:"Taglio 1"}, {source:"taglio1.jpg", name:"Taglio 2"}])

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
