<template>            
    <div @mouseover="stopScroll()" @mouseleave="startScroll()" ref="gallery" class="grid grid-flow-col scroll-smooth gap-4 overflow-y-auto overscroll-x-contain carrousel">
        <div v-for="(element, index) in photos" :key="index" class="snap-center snap-always flex items-center justify-center card">
            <img class="rounded-lg" :src="element.source" :alt="`${element.name}`">
        </div>
    </div>
</template>
<script setup>
defineProps(['photos'])
const gallery = ref(null)
const moveLeft = () =>{
    gallery.value.scrollBy(300,0)
}

const animateTransition = ref(null)
let intervalId
const onScroll = () =>{
    let windowHeight = window.top.scrollY;

    if(1948 == Math.ceil(windowHeight)){
        startScroll()
    }else if(1400 < windowHeight) {
        animateTransition.value= true
        stopScroll()
    }else {
        animateTransition.value= false
        stopScroll()
    }
}

const stopScroll = () =>{
    if (intervalId) {
        clearInterval(intervalId)
        intervalId = null;
    }
}
const startScroll = () =>{
    if (!intervalId) {
        intervalId = setInterval(moveLeft, 6000)
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