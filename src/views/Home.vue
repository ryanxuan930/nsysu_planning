<template>
    <div class="box">
        <div class="text-2xl">小工具</div>
        <hr>
        <div class="p-1">鹽埕區座標查詢</div>
        <div class="input_flex">
            <div>經度座標</div>
            <div>
                <input type="text" class="input_blank" maxlength="10" v-model.number="longtitude">
            </div>
            <div>緯度座標</div>
            <div>
                <input type="text" class="input_blank" maxlength="9" v-model.number="latitude">
            </div>
            <div class="flex-grow">
                <button class="bg-green-600 text-white px-2 py-0.5 rounded" @click="calPos">送出</button>
            </div>
        </div>
        <div class="p-1 mt-5">
            <div v-if="isYC" class="text-white bg-green-600 rounded text-center p-2 text-lg">調查範圍內</div>
            <div v-if="!isYC" class="text-white bg-red-600 rounded text-center p-2 text-lg">非調查範圍</div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import { YanChengPos as YCPos } from '@/components/YanChengPos'; 
const pos = new YCPos;

export default defineComponent({
    name: 'Home',
    setup(props) {
        //120.280241
        //22.622753
        const longtitude = ref("120.280241");
        const latitude = ref("22.622753");
        const isYC = ref(true);
        function calPos(){
            //console.log(pos.getPosition(longtitude.value, latitude.value));
            isYC.value = pos.getPosition(longtitude.value, latitude.value);
        }
        return {
            longtitude,
            latitude,
            isYC,
            calPos,
        }
    },
});
</script>

<style lang="less" scoped>
.box {
    @apply m-auto w-5/6 p-10 bg-white shadow;
}
.input_flex {
    @apply w-full flex flex-row items-center;
    div {
        @apply p-1;
    }
    .input_blank {
        border-bottom: #E0E0E0 2px solid;
    }
}
</style>
