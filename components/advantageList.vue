<template>
    
<ul class="flex flex-col items-start space-y-4 text-left text-gray-700 ">
    <li v-for="(element, index) in feature" :key="index" class="flex items-center justify-center space-x-3 pr-4 ">
        <IconsCheck class="hover:scale-50 transition-all"></IconsCheck>
        <span class="text-lg">{{element}}</span>
    </li>
</ul>

</template>
<script setup>
const feature = ref(['Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt omnis doloremque dolore nesciunt vel!', 'No setup, or hidden fees','Team size: 1 developer','Premium support'])

</script>