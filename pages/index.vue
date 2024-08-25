<!-- <template>
   <div>
        <Hero class="snap-start snap-always text-white max-md:snap-center"
        :heading = "heading_hero_section"
        :subheading = "subheading_hero_section"
        bgPhoto = "first-min.jpg"
        direction="right"
        ></Hero>
        <div class="bg-[url('~/assets/img/bg_all.svg')] bg-cover">
            <Firstsection class="snap-start snap-always text-white max-md:snap-center "></Firstsection>
            <Secondsection class="snap-start snap-always text-white max-md:snap-center"></Secondsection>
            <Thirdsection class="snap-start snap-always text-white max-md:snap-center"></Thirdsection>
        </div>
        <foot class="snap-start text-white"></foot>
    </div>
</template> 
  

<script setup>
const heading_hero_section = ref("Vediamo cosa riusciamo a fare")
const subheading_hero_section = ref("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex nulla maiores assumenda explicabo soluta vero error, officiis vitae asperiores in tenetur possimus minus officia sit laboriosam odio eos recusandae porro?")

</script>-->
<template>
    <section class="h-screen text-white relative bg-black cursor-default">
      <Transition name="slide-fade">
        <video v-if="videoOpen" class="absolute inset-0 w-full h-full object-cover opacity-75" autoplay loop playsinline>
          <source :src="bgVideo" type="video/mp4">
        </video>
      </Transition>
      <Transition name="slide-fade">
        <div v-if="!videoOpen" class="relative z-10 flex flex-col justify-center items-center h-full gap-24 max-md:h-screen max-md:p-0 max-md:items-start" >
          <div class="text-center pr-4 max-md:w-full max-md:mx-4">
            <h1 class="text-8xl font-bold leading-none tracking-tight text-[#6f7582] max-md:mb-6">Congratulazioni <br/>Lore!</h1>
          </div>
          <div @click="videoOpen = true" class=" flex flex-col items-center animate-bounce cursor-pointer">
            <span class="text-sm text-[#6f7582]">Clicca per una sorpresa!</span>
            <span class="">
                <IconsDoubleArrowRight></IconsDoubleArrowRight>
            </span>
          </div>
        </div>
      </Transition>
<!--       <Transition name="slide-fade">
        <div @click="videoOpen = true" v-if="!videoOpen" class=" flex flex-col items-center absolute top-1/2 right-2 animate-bounce">
          <span class="text-sm text-[#6f7582]">Clicca per una sorpresa!</span>
          <span class="">
              <IconsDoubleArrowRight></IconsDoubleArrowRight>
          </span>
        </div>
      </Transition> -->
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import bgVideoSource from '~/public/videos/videofinale.mp4'
  const videoOpen = ref(false);
  const bgVideo = ref(bgVideoSource);
  </script>
  
  <style>
  .tras {
    transform: translate(0%, 335%);
  }
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

  </style>
