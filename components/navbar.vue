<template>
    <nav class="bg-transparent">
        <div class="p-4 flex flex-row justify-center">
            <ul class="flex flex-row justify-center space-x-12 font-medium">
                <li>
                    <Dropdown
                    element="Informazioni"
                    :dropdownElements="dropdownElements"
                    ></Dropdown>
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
                        <a href="#" class="text-black hover-underline-animation inline-block relative">{{ element }}</a>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
</template>
<script setup>

const navElements = ref(['Informazioni', 'Servizi','Prezzi','Contatti'])
const dropdownElements = ref(['Dove siamo','Chi siamo'])

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