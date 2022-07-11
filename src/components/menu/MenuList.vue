<script setup lang="ts">
import MenuListItem, { type MenuItem } from "./MenuListItem.vue";

interface Props {
  items: MenuItem[];
}

const props = defineProps<Props>();
</script>

<template>
  <div>
    <MenuListItem v-for="(item, index) of items" :key="index" :item="item" />
  </div>
</template>
