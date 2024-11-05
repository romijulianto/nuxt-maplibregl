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
    <div id="layer-manager">
      <LayerManager />
    </div>
  </div>
</template>
