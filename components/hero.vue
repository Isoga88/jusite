<template>
    <section class="h-screen">
        <div class="h-full bg-cover bg-center bg-[url('~/assets/img/first-min.png')] ">
            <header>
                <Navbar></Navbar>
            </header>
            <div class="flex flex-row justify-center items-center h-5/6 ">            
                <div class="w-1/2"></div>
                <div class="w-1/2 text-center mx-12">
                    <h1 class="mb-8 text-5xl font-extrabold leading-none tracking-tight text-gray-900 ">Vediamo cosa è possibile fare</h1>
                    <h2 class="mb-6 text-lg font-normal text-gray-800">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex nulla maiores assumenda explicabo soluta vero error, officiis vitae asperiores in tenetur possimus minus officia sit laboriosam odio eos recusandae porro?</h2>
                </div>
            </div>
        </div>
        <div class="absolute h-64 text-center w-full bottom-0 flex justify-center curve"><img src="~/assets/img/scroll.gif" alt="scroll down" class="z-10 h-14 tras"></div>
    </section>
</template>
<style>
.curve::before {
    content: '';
    display: block;
    position: absolute;
    border-radius: 100% 100%;
    width: 108%;
    height: 60%;
    transform: translate(0%, 115%);
    background-color: white;
}
.tras{    
    transform: translate(0%, 335%);
}
</style>