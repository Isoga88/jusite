<template>
    
<ul class="flex flex-wrap gap-y-14 max-md:pl-3 items-center text-center justify-center">
    <li v-for="(element, index) in feature" :key="index" class="flex w-1/2 items-center text-gray-300 px-4 justify-center space-x-3 flex-col container">
        <div class="rounded-full border-2 border-[#E1BC54] p-3"> 
            <IconsScissors class="hover:scale-50 transition-all"></IconsScissors>
        </div>
        <span >{{element}}</span>
    </li>
</ul>

</template>
<script setup>
const feature = ref(['Lorem ipsum, dolor sit amet consectetur adipisicing elit', 'No setup, or hidden fees','Team size: 1 developer','Premium support'])
</script>
<style>
</style>