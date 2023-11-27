<template>
    <li @mouseover="menu = true" @mouseleave="menu = false">
        <button class="flex items-center justify-between text-black">{{element}}<svg class="w-2.5 h-2.5 ms-1.5" aria-hidden="true" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/></svg></button>
        <Transition name="slide-fade">
            <div v-if="menu" @mouseover="menu = true" @mouseleave="menu = false" class="absolute z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-36 block opacity-70">
                <ul class="py-2 text-sm text-gray-700">
                    <li v-for="(element, index) in dropdownElements" :key="index">
                        <a href="#" class="block px-4 py-2 hover:bg-gray-300">{{element}}</a>
                    </li>
                </ul>
            </div>
        </Transition>   
    </li>
</template>
<script setup>
const menu = ref(false)
defineProps(['element','dropdownElements'])
</script>
<style>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(10px);
  opacity: 0;
}
</style>