<script setup lang="ts">
import Map from "~/components/maps/Map.vue";
import LayerManager from "~/components/maps/LayerManager.vue";
import { useRoute, useAppConfig } from "nuxt/app";

const route = useRoute();
const appConfig = useAppConfig();
</script>

<template>
  <div id="container">
    <div id="map">
      <Map />
    </div>
    <div
      id="layer-manager"
      class="bg-gray-400 absolute top-2 right-2 rounded-md p-1 w-[20%] h-[80%]"
    >
      <LayerManager />
    </div>
  </div>
</template>
