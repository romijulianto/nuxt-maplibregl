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
      center: [106.7860430983772, -6.114739866386263],
      zoom: 13,
      attributionControl: false,
    });

    map.addControl(new maplibregl.NavigationControl(), "bottom-right");
    map.on("load", () => {
      map.addSource("provinsi-vector-tile", {
        type: "vector",
        tiles: [
          "https://desa-proaktif.app.barraslogi.id/geoserver/gwc/service/tms/1.0.0/Desa-Proaktif:Indonesia@EPSG:900913@pbf/{z}/{x}/{y}.pbf",
        ],
        minzoom: 0,
        maxzoom: 14,
      });

      map.addLayer({
        id: "provinsi-layer",
        type: "fill",
        source: "provinsi-vector-tile",
        "source-layer": "Indonesia",
        paint: {
          "fill-color": "#FF0000",
          "fill-opacity": 0.5,
        },
      });
    });
  }
});
</script>

<style scoped>
.map-container {
  width: 100%;
  height: 100vh;
}
</style>
