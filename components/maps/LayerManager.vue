<script setup lang="ts">

</script>

<template>
  <div id="container" class="w-full h-full">
    <div
      id="header-layer-manager"
      v-show="true"
      class="bg-[#F8F8F8] absolute top-2 right-2 rounded-t-md w-[25%] h-11 px-2 mt-1 py-2"
    >
      <div class="flex justify-between items-center">
        <div class="flex">
          <img src="/assets/icons/ic-layer-manager.png" alt="layer-manager" />
          <div class="text-black font-sora text-xs ml-3">Layer Manager</div>
        </div>
        <div id="button">
          <Select
            optionLabel="name"
            placeholder="Add Layer"
            size="small"
            class="font-sora px-2 py-1 text-xs bg-[#0D99FF] rounded-md text-white w-[100px]"
          />
        </div>
      </div>
    </div>
    <div
      id="content"
      class="bg-white absolute top-[3.3rem] right-2 rounded-b-lg w-[25%] h-[70%] px-2 py-2"
    >
    </div>
  </div>
</template>

<style scoped></style>
