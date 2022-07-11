<script setup lang="ts">
import { IonTabBar } from "@ionic/vue";
import AppTabBarButton from "./AppTabBarButton.vue";

interface Props {
  items: { icon: string; title: string; to: string }[];
}

const props = defineProps<Props>();
</script>

<template>
  <IonTabBar class="tabbar" slot="bottom">
    <div class="tabbar__items">
      <AppTabBarButton
        v-for="item of items"
        :key="item.title"
        :icon="item.icon"
        :title="item.title"
        :to="item.to"
      />
    </div>
  </IonTabBar>
</template>

<style scoped>
.tabbar {
  background-color: rgba(154, 152, 154, 0.94);
  backdrop-filter: blur(20px);
  border-radius: 16px 16px 0 0;
  height: 40px;
  padding: 22px 12.5px;
}

.tabbar__items {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
</style>
