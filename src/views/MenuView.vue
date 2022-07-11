<script setup lang="ts">
import { IonContent, IonPage } from "@ionic/vue";
import MenuHeader from "@/components/menu/MenuHeader.vue";
import MenuAlert from "@/components/menu/MenuAlert.vue";
import MenuList from "@/components/menu/MenuList.vue";

const items = [
  { title: "Как это работает", icon: "hiw" },
  { title: "ИЖС Стадарт", icon: "standart" },
  { title: "Договоры", icon: "documents" },
  { title: "Росреестр", icon: "registry" },
  { title: "Помощь", icon: "help" },
  { title: "Промокоды", icon: "promo" },
  { title: "Партнерам", icon: "partners" },
  { title: "Избранное", icon: "favorites" },
];
</script>

<template>
  <IonPage>
    <IonContent>
      <div class="menu">
        <MenuHeader />
        <div class="menu__body">
          <MenuAlert />
          <MenuList :items="items" />
        </div>
      </div>
    </IonContent>
  </IonPage>
</template>

<style scoped>
.menu__body {
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 0 20px;
  margin-top: 24px;
}
</style>
