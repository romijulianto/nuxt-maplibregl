<script setup lang="ts">
import Base from "~/components/maps/Base.vue";
import { useRoute, useAppConfig } from "nuxt/app";

const route = useRoute();
const appConfig = useAppConfig();

//console.log(appConfig.theme);
</script>

<template>
  <div>
    <Base />
  </div>
</template>
