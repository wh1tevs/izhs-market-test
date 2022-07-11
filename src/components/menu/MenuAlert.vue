<template>
  <div class="menu-alert">
    <p class="menu-alert__text">
      Все инженеры и Росреестр за 0 ₽ — оплатите первый этап строительства до 25
      августа и Genius активируется автоматически
    </p>
    <img class="menu-alert__icon" src="@/assets/icons/status.svg?inline" />
  </div>
</template>

<style scoped>
.menu-alert {
  display: flex;
  padding: 16px;
  gap: 16px;
  border-radius: 16px;
  background-color: #090909;
}

.menu-alert__text {
  word-wrap: unset;
  color: #f9f9f9;
  margin: 0;
  font-size: 12px;
  line-height: 15px;
  font-variation-settings: var(--font-variation-settings);
}

.menu-alert__icon {
  border-radius: 10px;
  width: 64px;
  height: 64px;
}
</style>
