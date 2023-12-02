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