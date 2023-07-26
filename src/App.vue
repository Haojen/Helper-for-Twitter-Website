<style>
#app {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: Avenir, Helvetica, Arial, sans-serif;
}

.fade-enter-active,
.fade-leave-active{
    transition: opacity .18s ease-in;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
<template>
    <div class="flex flex-col w-screen h-screen bg-white">
        <transition name="fade">
            <router-view class="flex-1"/>
        </transition>
        <footer class="flex flex-col justify-center items-center font-semibold text-gray-500 mb-4">
            <div class="flex justify-center items-center">
                <router-link to="/" class="mx-2 border-b-4 border-transparent" :class="routerTargetName === 'home' && 'border-gray-400'">Home</router-link>
                <router-link to="help" class="mx-2 border-b-4 border-transparent" :class="routerTargetName === 'help' && 'border-gray-400'">Help</router-link>
                <router-link to="privacy" class="mx-2 border-b-4 border-transparent" :class="routerTargetName === 'privacy' && 'border-gray-400'">Privacy</router-link>
                <a href="https://github.com/Haojen/planet-tab" class="mx-2 flex justify-center items-center border-b-4 border-transparent">
                    <span class="ml-1">Github</span>
                </a>
            </div>
            <div class="my-2 text-sm text-gray-500 font-semibold">
                <span>Copyright © {{ new Date().getFullYear() }} HAOZHEN MA</span>
            </div>
        </footer>
    </div>
</template>
<script lang="ts" setup>
import { routerTargetName } from "@/reactiveConsts";
</script>
