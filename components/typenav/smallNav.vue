<template>
    <nav class="bg-transparent md:hidden ">
        <div class="p-4 flex flex-row justify-between px-4 py-2 items-center h-[55px] fixed top-0 right-0 bottom-0 left-0 bg-white z-20 transition duration-700" :class="{ 'bg-opacity-90 backdrop-blur-sm shadow-inner rounded-2xl mx-2 mt-2': navBg, 'bg-opacity-0 ': !navBg }" >
            <p>
                Logo ju
            </p>
            <div>
                <div @click="openSm = !openSm">
                    <svg class="w-7 h-7 fill-black" :class="openSm ? 'rotation fill-white' : 'norot'" aria-hidden="true"  viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </div>
            </div>
        </div>
    </nav>
    <div class="fixed top-0 left-0 z-30 h-screen bg-black w-full transition-all" :class="{'translate-x-full': !openSm }">
        <div @click="openSm = !openSm" class="flex flex-row justify-end pr-4 pt-4">
            <svg class="w-7 h-7 fill-white" :class="openSm ? 'rotation fill-white' : 'norot'" aria-hidden="true"  viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </div>
        <ul class="flex flex-col gap-20 items-center justify-center w-full h-full text-5xl pb-20 font-bold text-white">
            <li v-for="(element, index) in navElements" :key="index">
                <NuxtLink to="/"><div class="block font-medium textNav bg-gradient-to-r from-yellow-500 to-yellow-500 bg-no-repeat py-0.5 px-3.5">{{ element }}</div></NuxtLink>
            </li>
        </ul>
    </div>
</template>
<script setup>
const openSm = ref(false)
defineProps(['navElements','dropdownElements','navBg'])
</script>
<style scoped>
.textNav {
  background-size: 100% 2px;
  background-repeat: no-repeat;
  background-position: 0% 100%;
  transition: background-size .7s, background-position .5s ease-in-out;
}
.textNav:hover {
  background-size: 100% 100%;
  background-position: 100% 0%;
  transition: background-position .7s, background-size .5s ease-in-out;
}
.rotation{
    animation-name: rotate;
    animation-duration: 0.2s;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(90deg);
  }
}
.norot{
    animation-name: norotate;
    animation-duration: 0.2s;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
}

@keyframes norotate {
  from {
    transform: rotate(90deg);
  }
  to {
    transform: rotate(0deg);
  }
}
</style>