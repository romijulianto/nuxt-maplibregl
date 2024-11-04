<script setup lang="ts">
import Map from "~/components/maps/Map.vue";
import { useRoute, useAppConfig } from "nuxt/app";

const route = useRoute();
const appConfig = useAppConfig();

</script>

<template>
  <div>
    <Map />
  </div>
</template>
