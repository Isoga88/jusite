<template>
    <section class="flex flex-row w-full h-screen max-md:flex-col-reverse max-md:items-center max-md:justify-center">
        <div class="w-9/12 flex justify-center items-center relative pl-3 transition-all duration-1000" :class="{ 'bg-opacity-100 translate-x-0 ': animateTransition, 'bg-opacity-0 relative -translate-x-96': !animateTransition }" >
            <Gallery
            :photos="photos"
            ></Gallery>
        </div>
        <div class="w-3/12 flex flex-col justify-center items-center p-5 max-md:w-full">
            <h1 class="flex justify-center text-right text-7xl text-amber-500 font-extrabold tracking-wider max-md:text-center portrait:text-center titlefont max-md:w-full transition-all duration-600" :class="{ 'bg-opacity-100 translate-x-0 ': animateTransition, 'bg-opacity-0 relative -translate-x-96': !animateTransition }">
                Cosa ci piace
            </h1>
            <h2 class="text-base font-semibold pt-12 text-gray-300 text-right max-md:w-full max-md:px-3 max-md:text-center max-md:pt-3 portrait:px-3 transition-all duration-500" :class="{ 'bg-opacity-100 translate-x-0 ': animateTransition, 'bg-opacity-0 relative -translate-x-96': !animateTransition }">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat sunt at temporibus unde vero odit provident architecto omnis consectetur cumque.
            </h2>
        </div>
    </section>
</template>
<script setup>
let photos = ref([{source:"first-min.png", name:"Taglio 1"}, {source:"taglio1.jpg", name:"Taglio 2"}, {source:"taglio2.jpg", name:"Taglio 3"}, {source:"taglio3.jpg", name:"Taglio 4"},{source:"first-min.png", name:"Taglio 5"},{source:"first-min.png", name:"Taglio 6"}])

const animateTransition = ref(false)

const onScroll = () =>{
    let windowHeight = window.top.scrollY;
    if (1400 < windowHeight) {
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
<style>
.carrousel{
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
}

.carrousel::-webkit-scrollbar {
  height: 6px; 
  margin-top: 3px;
}
.carrousel::-webkit-scrollbar-thumb {
  background-color: #eab308;
  border-radius: 6px;
}
.carrousel::-webkit-scrollbar-thumb:hover {
  background-color: #b58905; 
}
.card{
    border-radius: 30px;
    min-height: 400px;
    min-width: 300px;
}
</style>