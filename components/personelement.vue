<template>
    <div  @mouseover="hover = true" @mouseleave="hover = false" class="full flex items-center p-4 px-0 transition-all duration-1000 gap-4 max-md:w-full max-md:h-1/2 max-md:p-2 portrait:w-full portrait:h-1/2" :class="{ 'bg-opacity-100 translate-x-0 ': animateTransition, 'bg-opacity-0 relative -translate-x-full': !animateTransition }">
        <img class="w-60 p-5 border-2 rounded border-[#E1BC54] max-md:border-0  max-md:shadow-none transition-all duration-500 max-md:w-40 max-md:translate-x-0 portrait:translate-x-0 portrait:border-0 portrait:shadow-none portrait:w-62" :src="photo" :alt="`foto ${photo}`">
        <Transition name="slide-fade">
            <div v-if="hover" class=" flex flex-col gap-3 items-center p-3 transition-all duration-1000 max-md:opacity-100 portrait:opacity-100 max-md:gap-1" :class="{'opacity-0': !hover, 'opacity-100': hover }">
                <h1 class="text-4xl font-extrabold tracking-wider titlefont text-center text-[#E1BC54]">
                    {{ name }}
                </h1>
                <h2 class="text-base font-normal text-gray-300 text-center">
                    {{content}}
                </h2>
                <ul>
                    <li>
                        <NuxtLink to="/who">
                            <button type="button" class="text-gray-300 font-semibold bg-transparent font-medium text-sm px-5 py-2 text-center inline-flex items-center justify-center group">
                            Scopri altro
                                <Arrowinfo class="group-hover:translate-x-2.5 transition-all"></Arrowinfo>
                            </button>
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </Transition>
    </div>
</template>
<script setup>
import Arrowinfo from './icons/arrowinfo.vue';

const {name, content, hover, photo} = defineProps(['name', 'content', 'hover', 'photo']);
const edge = ref(null)



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
<style>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s ease-in;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>