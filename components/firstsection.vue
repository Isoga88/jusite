<template>
    <section class="relative w-full h-screen bg-white flex flex-row justify-center">
        <div class="w-1/2 h-full items-center justify-center flex ml-12">
            <figure class="relative max-w-xs transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
                <img class="rounded-lg" src="~/assets/img/taglio3.jpg" alt="taglio capelli">
                <figcaption class="absolute px-4 text-lg text-white top-6">
                    <p>Il tuo taglio deve essere affidato a persone competenti che amano il loro lavoro</p>
                </figcaption>
            </figure>
        </div>
        <div class="w-1/2 h-full mr-12 flex flex-col items-center justify-center">
            <h1 class="flex justify-center mb-6 text-5xl font-extrabold leading-none tracking-tight text-gray-900">
                Le basi di pollo
            </h1>
            <AdvantageList></AdvantageList>
        </div>
    </section>
</template>