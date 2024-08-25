<template>
    <li @mouseover="menu = true" @mouseleave="menu = false">
        <button class="flex items-center justify-between group">
          <span>
            {{element}}
          </span>
          <svg class="w-2.5 h-2.5 ms-1.5" aria-hidden="true" fill="none" viewBox="0 0 10 6"><path :class="{'stroke-[#E1BC54]':menu}" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/></svg>
        </button>
        <Transition name="slide-fade">
            <div v-if="menu" @mouseover="menu = true" @mouseleave="menu = false" class="absolute z-10 font-normal divide-y divide-gray-100 rounded-b-lg shadow w-32 block transition-all" :class="navBg ? 'bg-black':'bg-transparent border-2 border-t-0 border-white'">
                <ul class="pb-2 text-sm text-white items-center">
                    <li v-for="(element, index) in dropdownElements" :key="index" class="relative first:pt-2">
                      <NuxtLink :to="element.page">
                        <div class="block px-3 py-2 transition-all  hover-underline-animation">{{ element.name }}</div>
                      </NuxtLink>
                    </li>
                </ul>
            </div>
        </Transition>   
    </li>
</template>
<script setup>
const menu = ref(false)
defineProps(['element','dropdownElements','navBg'])
</script>
<style>
.hover-underline-animation:after {
  content: '';
  position: absolute;
  width: 90%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #E1BC54;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}
.hover-underline-animation:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
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