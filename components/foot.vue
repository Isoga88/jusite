<template>
    <footer class="h-52 bg-[#666666] flex flex-row max-md:flex-col-reverse max-md:items-center max-md:h-max">
        <div class="w-4/12 flex flex-col justify-center items-center gap-12 max-md:w-full">
            <div class="max-md:hidden">logo ju</div>
            <div class="flex flex-row gap-2">
                <IconsWhatsapp class="w-10"></IconsWhatsapp>
                <IconsInstagram class="w-10"></IconsInstagram>
                <IconsFacebook class="w-10"></IconsFacebook>
            </div>
        </div>
        <div class="w-8/12 flex flex-row justify-center items-center py-3 max-md:flex-col max-md:w-full max-md:gap-3">
            <div class="w-1/2 flex flex-col justify-center items-center gap-4 max-md:w-full">
                <h1 class="flex justify-center text-right text-4xl text-amber-500 font-extrabold tracking-wider max-md:text-center portrait:text-center titlefont max-md:w-full transition-all duration-600">
                    Contatti
                </h1>
                <div class="flex flex-col gap-4 items-center">
                    <div class="flex items-center gap-1">
                        <span class="font-semibold">Indirizzo: </span>
                        <span> Via romana 112, Capannori</span>
                    </div>
                    <div class="flex items-center gap-1">
                        <span class="font-semibold">Telefono: </span>
                        <span> 0583 987629</span>
                    </div>
                    <div class="flex  items-center gap-1">
                        <span class="font-semibold">Email: </span>
                        <span>parrucchierebello@virgilio.it</span>
                    </div>
                </div>
            </div>
            <div class="w-1/2 flex flex-col justify-center items-center gap-4 max-md:w-full">
                <h1 class="flex justify-center text-right text-4xl text-amber-500 font-extrabold tracking-wider max-md:text-center portrait:text-center titlefont max-md:w-full transition-all duration-600">
                    Orario
                </h1>
                <div class="flex flex-col items-center gap-4">
                    <div class="flex items-center gap-1">
                        <span class="font-semibold">Lunedì-Venerdì:</span><span> 9-13/14:30-19</span>
                    </div>
                    <div class="flex items-center gap-1 ">
                        <span class="font-semibold">Sabato:</span><span> 9-13/14:30-17</span>
                    </div>
                    <div class="flex items-center gap-1">
                        <span class="font-semibold">Domenica:</span><span> chiuso</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="md:hidden">logo ju</div>
    </footer>

</template>
<script setup>

</script>