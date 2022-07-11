<template>
  <div class="menu-header">
    <span class="menu-header__title">Мой ИЖС</span>
    <div class="menu-header__wrapper">
      <img
        class="menu-header__status-icon"
        src="@/assets/icons/status.svg?inline"
      />
      <span class="menu-header__status-text">статус</span>
    </div>
  </div>
</template>

<style scoped>
.menu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
}

.menu-header__title {
  font-size: 26px;
  font-variation-settings: var(--font-variation-settings);
}

.menu-header__wrapper {
  display: flex;
  align-items: center;
  gap: 4px;
}

.menu-header__status-icon {
  width: 24px;
  height: 24px;
  margin: 4px;
  border-radius: 50%;
}

.menu-header__status-text {
  font-size: 14px;
  font-variation-settings: var(--font-variation-settings);
}
</style>
