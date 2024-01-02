<template>
    <nav class="bg-transparent max-md:hidden w-full">
        <div class="p-4 flex flex-row justify-center items-center h-[50px] fixed top-0 right-0 bottom-0 left-0  bg-black z-20 transition duration-700 rounded-2xl" :class="{ 'bg-opacity-90 backdrop-blur-sm w-fit mx-auto mt-2 px-16': navBg, 'bg-opacity-0': !navBg }">
            <ul class="flex flex-row justify-center space-x-12 font-medium">
                <li>
                    <ClientOnly><Drop
                    element="Informazioni"
                    :dropdownElements="dropdownElements"
                    ></Drop></ClientOnly>
                </li>
                <li>
                    <NuxtLink to="/service"><div class="hover-underline-animation inline-block relative">Servizi</div></NuxtLink>
                </li>
            </ul>
            <ul>
                <li class="px-24">
                    <NuxtLink to="/"><div>Logo ju</div></NuxtLink>
                </li>
            </ul>
            <ul class="flex flex-row justify-center space-x-12 font-medium">
                <li v-for="(element, index) in navElements.slice(2,4)" :key="index">
                    <div>
                        <NuxtLink :to="element.page"><div @click="navBg=true" class="hover-underline-animation inline-block relative">{{ element.name }}</div></NuxtLink>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
</template>
<script setup>
defineProps(['navElements','dropdownElements','navBg'])
</script>
<style scoped>
.hover-underline-animation:after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #eab308;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}
.hover-underline-animation:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>