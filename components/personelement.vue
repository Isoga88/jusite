<template>
    <div  @mouseover="hover = true" @mouseleave="hover = false" class="w-1/2 flex items-center p-4 transition-all duration-1000 max-md:w-full max-md:h-1/2 max-md:p-2 portrait:w-full portrait:h-1/2 max-md:bg-opacity-100 max-md:translate-x-0" :class="{ 'bg-opacity-100 translate-x-0 ': animateTransition, 'bg-opacity-0 relative -translate-x-full': !animateTransition && edge, 'bg-opacity-0 relative -translate-x-96': !animateTransition && !edge, 'justify-end': edge, 'justify-start flex-row-reverse': !edge }">
        <img class="w-60 p-5 border-2 rounded border-amber-500 max-md:border-0  max-md:shadow-none transition-all duration-500 max-md:w-40 max-md:translate-x-0 portrait:border-0 portrait:shadow-none portrait:w-62 portrait:translate-x-0" :src="getImageUrl(photo)" :alt="`foto ${photo}`"  :class="{'translate-x-44': !hover && edge, '-translate-x-44': !hover && !edge, 'translate-x-0': hover }">
        <div class="p-3 transition-all duration-1000 max-md:opacity-100 portrait:opacity-100" :class="{'opacity-0': !hover, 'opacity-100': hover }">
            <h1 class="text-4xl font-extrabold tracking-wider titlefont text-center text-amber-500">
                {{ name }}
            </h1>
            <h2 class="text-base font-normal pt-4 text-gray-300 text-center">
                {{content}}
            </h2>
        </div>
    </div>
</template>
<script setup>
const { direction, name, content, hover, photo} = defineProps(['direction', 'name', 'content', 'hover', 'photo']);
const edge = ref(null)

const getImageUrl = (path) => {
  return "/_nuxt/" + path;
};

if (direction == "left"){
    edge.value = false
}else if(direction == "right"){
    edge.value = true
}else{
    print("props personelement.vue error")
}

const animateTransition = ref(false)

const onScroll = () =>{
    let windowHeight = window.top.scrollY;
    if (890 < windowHeight) {
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