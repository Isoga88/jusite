<template>
    <TypenavBigNav
    :navElements="navElements"
    :dropdownElements="dropdownElements"
    :navBg="navBg"
    ></TypenavBigNav>
    <TypenavSmallNav
    :navElements="navElements"
    :dropdownElements="dropdownElements"
    :navBg="navBg"
    ></TypenavSmallNav>

</template>
<script setup>
const navElements = ref([{name:"Informazioni", page:"/"}, {name:"Servizi", page:"/service"},{name:"Prezzi", page:"/prices"},{name:"Contatti", page:"/contact"}])
const dropdownElements = ref([{name:"Chi siamo", page:"/who"}, {name:"Dove siamo", page:"/where"}])
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