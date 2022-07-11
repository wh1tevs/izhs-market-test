<script setup lang="ts">
import { computed } from "vue";

export interface MenuItem {
  icon: string;
  title: string;
}

interface Props {
  item: MenuItem;
}

const props = defineProps<Props>();

const iconPath = computed(
  () =>
    new URL(`../../assets/icons/menu/${props.item.icon}.svg`, import.meta.url)
      .href
);
</script>

<template>
  <div class="menu-list-item">
    <div class="menu-list-item__wrapper">
      <img :src="iconPath" />
      <span class="menu-list-item__title">{{ item.title }}</span>
    </div>
    <img
      class="menu-list-item__arrow"
      src="@/assets/icons/chevron-right.svg?inline"
    />
  </div>
</template>

<style scoped>
.menu-list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid #e0e0e0;
}

.menu-list-item__wrapper {
  display: flex;
  align-items: center;
  gap: 12px;
}

.menu-list-item__title {
  font-family: "Roboto Flex";
  font-style: normal;
  color: #2d2d2d;
  font-size: 16px;
  font-weight: 750;
  line-height: 120%;
  font-variation-settings: "wdth" 151, "GRAD" 0, "slnt" 0, "XTRA" 499, "XOPQ" 96,
    "YOPQ" 79, "YTLC" 514, "YTUC" 712, "YTAS" 750, "YTDE" -203, "YTFI" 738;
}

.menu-list-item__arrow {
  justify-self: flex-end;
}
</style>
