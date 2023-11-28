<template>
    <nav class="bg-transparent ">
        <div class="p-4 flex flex-row justify-center items-center h-[55px] fixed top-0 right-0 bottom-0 left-0  bg-white z-20 transition duration-700" :class="{ 'bg-opacity-90 backdrop-blur-sm  ': navBg, 'bg-opacity-0': !navBg }">
            <ul class="flex flex-row justify-center space-x-12 font-medium">
                <li>
                    <Drop
                    element="Informazioni"
                    :dropdownElements="dropdownElements"
                    ></Drop>
                </li>
                <li>
                    <a href="#" class="text-black hover-underline-animation inline-block relative">Servizi</a>
                </li>
            </ul>
            <ul>
                <li class="px-24">
                    <a href="#">
                        <p>Logo ju</p>
                    </a>
                </li>
            </ul>
            <ul class="flex flex-row justify-center space-x-12 font-medium">
                <li v-for="(element, index) in navElements.slice(2,4)" :key="index">
                    <div>
                        <a href="#" class="text-black hover-underline-animation inline-block relative" @click="navBg=true, console.log(navBg)">{{ element }}</a>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
</template>
<script setup>

const navElements = ref(['Informazioni', 'Servizi','Prezzi','Contatti'])
const dropdownElements = ref(['Dove siamo','Chi siamo'])
const navBg = ref(false)

const onScroll = () =>{
    let windowHeight = window.top.scrollY;
    if (70 < windowHeight) {
        navBg.value= true
    }else {
        navBg.value= false
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
.hover-underline-animation:after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: black;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}
.hover-underline-animation:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

</style>