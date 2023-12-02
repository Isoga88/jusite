<template>
    <section class="relative w-full h-screen bg-stone-300 flex flex-row justify-center z-10 max-md:flex-col-reverse">
        <div class="w-2/5 h-full items-center justify-center flex max-md:w-full">
            <figure class="ml-6 max-w-xs transition-all duration-300 cursor-pointer filter hover:grayscale grayscale-0 max-md:hidden">
                <img class="rounded-lg" src="~/assets/img/taglio3.jpg" alt="taglio capelli">
<!--                 <figcaption class="absolute px-4 text-lg text-white top-6">
                    <p>Il tuo taglio deve essere affidato a persone competenti che amano il loro lavoro</p>
                </figcaption> -->
            </figure>
        </div>
        <div class="w-3/5 h-full flex flex-col items-center justify-center max-md:w-full">
            <div class="mb-4">
                <h1 class="flex justify-center text-5xl font-extrabold tracking-wider max-md:text-center max-md:pt-8">
                Cosa puoi trovare?
            </h1>
            <h2 class="text-lg font-normal text-gray-800 mt-4 max-md:px-6">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio distinctio deserunt quis sit libero exercitationem aliquid saepe ut vel tempore?
            </h2>
            </div>
            <AdvantageList></AdvantageList>
        </div>
    </section>
</template>
