<template>
    <section class="flex flex-row w-full h-screen max-md:flex-col-reverse max-md:items-center">
        <div class="w-9/12 flex justify-center items-center relative pl-3">
            <div ref="galleria" class="grid grid-flow-col scroll-smooth gap-4 overflow-y-auto overscroll-x-contain carrousel">
                <div class="snap-start flex items-center justify-center card">
                    <img class="rounded-lg" src="~/assets/img/first-min.png" alt="">
                </div>
                <div class="snap-start flex items-center justify-center card ">
                    <img class="rounded-lg" src="~/assets/img/taglio1.jpg" alt="">
                </div>
                <div class="snap-start flex items-center justify-center card">
                    <img class="rounded-lg" src="~/assets/img/taglio2.jpg" alt="">
                </div>
                <div class="snap-start flex items-center justify-center card">
                    <img class="rounded-lg" src="~/assets/img/taglio3.jpg" alt="">
                </div>
                <div class="snap-start flex items-center justify-center rounded-lg card">
                    <img class="rounded-lg" src="~/assets/img/first-min.png" alt="">
                </div>
                <div class="snap-start flex items-center justify-center card">
                    <img class="rounded-lg" src="~/assets/img/first-min.png" alt="">
                </div>
            </div>
        </div>
        <div class="w-3/12 flex flex-col justify-center items-center p-5 max-md:w-full">
            <h1 class="flex justify-center text-right text-7xl text-amber-500 font-extrabold tracking-wider max-md:text-center portrait:text-center titlefont max-md:w-full">
                Cosa ci piace
            </h1>
            <h2 class="text-base font-normal pt-12 text-gray-300 text-right max-md:w-full max-md:px-3 max-md:text-center portrait:px-3 ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat sunt at temporibus unde vero odit provident architecto omnis consectetur cumque.
            </h2>
        </div>
    </section>
</template>
<script>

</script>
<style>
.carrousel{
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
}

.carrousel::-webkit-scrollbar {
  height: 6px; 
  margin-top: 3px;
}
.carrousel::-webkit-scrollbar-thumb {
  background-color: #eab308;
  border-radius: 6px;
}
.carrousel::-webkit-scrollbar-thumb:hover {
  background-color: #b58905; 
}
.card{
    border-radius: 30px;
    min-height: 400px;
    min-width: 300px;
}
</style>