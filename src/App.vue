<script setup lang="ts">
import { IonApp, IonContent, IonTabs, IonRouterOutlet } from "@ionic/vue";
import AppTabBar from "@/components/app/tabbar/AppTabBar.vue";

const tabBarItems = [
  { icon: "house", title: "Главная", to: "/home" },
  { icon: "open-book", title: "Каталог", to: "/catalog" },
  { icon: "tree", title: "Landscape", to: "/landscape" },
  { icon: "double-circle", title: "Стройка", to: "/construction" },
  { icon: "human", title: "Меню", to: "/menu" },
];
</script>

<template>
  <IonApp>
    <IonContent>
      <IonTabs>
        <IonRouterOutlet />
        <AppTabBar :items="tabBarItems" />
      </IonTabs>
    </IonContent>
  </IonApp>
</template>
