<template>
    
<ul class="flex flex-col space-y-4 max-md:pl-3 items-center text-center">
    <li v-for="(element, index) in feature" :key="index" class="flex items-center text-gray-300 px-4 justify-center space-x-3 flex-col">
        <IconsCheck class="hover:scale-50 transition-all "></IconsCheck>
        <span>{{element}}</span>
    </li>
</ul>

</template>
<script setup>
const feature = ref(['Lorem ipsum, dolor sit amet consectetur adipisicing elit', 'No setup, or hidden fees','Team size: 1 developer','Premium support'])

</script>