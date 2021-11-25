<template>
    <div id="nav">
        <router-link to="/">目前只有這個可以用的啦</router-link>
    </div>
    <div class="w-full h-screen py-10 bg-gray-50 text-gray-500">
        <router-view/>
    </div>
</template>

<style lang="less">
#nav {
    display: none;
}
</style>
