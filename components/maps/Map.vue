<template>
  <div ref="mapContainer" class="map-container"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import maplibregl from "maplibre-gl";

const mapContainer = ref<HTMLDivElement | null>(null);

onMounted(() => {
  if (mapContainer.value) {
    const map = new maplibregl.Map({
      container: mapContainer.value,
      style: "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json",
      center: [117.9213, -0.7893],
      zoom: 4.2,
      attributionControl: false,
    });

    map.addControl(new maplibregl.NavigationControl(), "top-right");
  }
});
</script>

<style scoped>
.map-container {
  width: 100%;
  height: 100vh;
}
</style>
