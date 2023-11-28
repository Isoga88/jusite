<template>
    <section class="relative w-full h-screen bg-white flex flex-row justify-center z-10">
        <div class="w-2/5 h-full items-center justify-center flex">
            <figure class="ml-6 max-w-xs transition-all duration-300 cursor-pointer filter hover:grayscale grayscale-0">
                <img class="rounded-lg" src="~/assets/img/taglio3.jpg" alt="taglio capelli">
<!--                 <figcaption class="absolute px-4 text-lg text-white top-6">
                    <p>Il tuo taglio deve essere affidato a persone competenti che amano il loro lavoro</p>
                </figcaption> -->
            </figure>
        </div>
        <div class="w-3/5 h-full flex flex-col items-center justify-center ">
            <div class="mb-4">
                <h1 class="flex justify-center text-5xl font-extrabold tracking-wider">
                Cosa puoi trovare?
            </h1>
            <h2 class="text-lg font-normal text-gray-800 mt-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio distinctio deserunt quis sit libero exercitationem aliquid saepe ut vel tempore?
            </h2>
            </div>
            <AdvantageList></AdvantageList>
        </div>
    </section>
</template>