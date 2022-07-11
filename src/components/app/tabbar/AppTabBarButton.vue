<script setup lang="ts">
import { computed } from "vue";
import { defineAsyncComponent } from "vue";
import { useRoute } from "vue-router";

interface Props {
  title: string;
  icon: string;
  to: string;
}

const props = defineProps<Props>();

const route = useRoute();

function isActive(path: string) {
  return path === route.fullPath;
}

const iconPath = computed(() => {
  const color = isActive(props.to) ? "pink" : "black";
  return new URL(
    `../../../assets/icons/${props.icon}--${color}.svg`,
    import.meta.url
  ).href;
});
</script>

<template>
  <RouterLink
    class="tabbar__item"
    :class="{ 'tabbar__item-active': isActive(to) }"
    :to="to"
  >
    <img :src="iconPath" />
    <span class="tabbar__item-title">{{ title }}</span>
  </RouterLink>
</template>

<style scoped>
.tabbar__item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  gap: 6px;
  color: #090909;
}

.tabbar__item-active {
  color: transparent;
  background: linear-gradient(90deg, #c5acff 0%, #fbc2eb 100%);
  background-clip: text;
  -webkit-background-clip: text;
}

.tabbar__item-title {
  font-size: 10px;
}
</style>
