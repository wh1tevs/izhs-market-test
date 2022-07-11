<script setup lang="ts">
import { IonContent, IonPage, IonText } from "@ionic/vue";

const props = defineProps<{ title: string }>();
</script>

<template>
  <IonPage>
    <IonContent>
      <IonText>
        <h1>{{ title }}</h1>
      </IonText>
    </IonContent>
  </IonPage>
</template>
