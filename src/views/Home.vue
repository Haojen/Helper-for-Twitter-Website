<template>
    <main class="w-full h-full">
        <article class="relative z-10 w-full h-full flex flex-col justify-center items-center">
            <h2 class="text-2xl text-center font-semibold md:w-5/12 mx-2">
                <img src="../assets/Helper-for-Twitter-en-white.png" alt="">
            </h2>
            <section class="mt-12 mx-2 flex justify-center items-center flex-wrap">
                <a class="mx-4 my-4" :href="chromeDownloadURL">
                    <img class="rounded-lg border" style="height: 54px;" src="../assets/chrome-webstore.svg" alt="">
                </a>
                <a class="mx-2" :href="appleDownloadURL">
                    <img style="height: 52px;" src="../assets/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg" alt="">
                </a>
            </section>
        </article>
    </main>
</template>

<script lang="ts" setup>
const appleDownloadURL = 'itms-apps://itunes.apple.com/app/id6444109404'
const chromeDownloadURL = 'https://chrome.google.com/webstore/detail/推特助手/bfliajokeloclanhljkkahefonnphilj'
</script>
