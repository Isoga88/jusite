<template>
    <section class="relative w-full h-screen bg-stone-300 flex flex-row justify-center z-10 max-md:flex-col-reverse">
        <div class="w-2/5 h-full items-center justify-center flex max-md:w-full">
            <figure class="ml-6 pt-16 w-full h-full trans cursor-pointer filter grid grid-cols-12 grid-rows-6 max-md:hidden">
                <img class="  hover:grayscale grayscale-0 rounded-lg col-start-3 col-end-9 row-start-2 shadow-xl transition-all hover:scale-125 hover:z-10"  src="~/assets/img/taglio3.jpg" alt="taglio capelli">
                <img class="  hover:grayscale grayscale-0 rounded-lg col-start-4 col-end-12 row-start-4 shadow-xl transition-all hover:scale-125"  src="~/assets/img/taglio1.jpg" alt="taglio capelli">
<!--                 <figcaption class="absolute px-4 text-lg text-white top-6">
                    <p>Il tuo taglio deve essere affidato a persone competenti che amano il loro lavoro</p>
                </figcaption> -->
            </figure>
        </div>
        <div class="w-3/5 h-full flex flex-col pl-12 items-center justify-center max-md:w-full">
            <div class="pb-4">
                <h1 class="flex justify-center text-4xl font-extrabold tracking-wider max-md:text-center max-md:pt-8">
                Cosa puoi trovare?
            </h1>
            <h2 class=" pl-2 text-base font-normal text-gray-800 pt-4 max-md:px-6">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio distinctio deserunt quis sit libero exercitationem aliquid saepe ut vel tempore?
            </h2>
            </div>
            <AdvantageList></AdvantageList>
        </div>
    </section>
</template>
<style>
.trans{
    transition: grid-column-end 0.5s ease-in-out;
}
</style>
