<template>
  <section class="waypoint-steps" aria-label="Journey overview">
    <div class="waypoint-route" aria-hidden="true"></div>
    <div class="waypoint-grid">
      <slot />
    </div>
  </section>
</template>

<style scoped>
.waypoint-steps {
  position: relative;
  margin: 30px 0 38px;
}

.waypoint-route {
  position: absolute;
  top: 25px;
  right: 7%;
  left: 7%;
  z-index: 0;
  height: 2px;
  background: repeating-linear-gradient(
    90deg,
    color-mix(in srgb, var(--game-accent) 60%, transparent) 0 9px,
    transparent 9px 17px
  );
}

.waypoint-grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 12px;
}

@media (max-width: 720px) {
  .waypoint-route {
    top: 24px;
    bottom: 24px;
    left: 25px;
    width: 2px;
    height: auto;
    background: repeating-linear-gradient(
      180deg,
      color-mix(in srgb, var(--game-accent) 60%, transparent) 0 9px,
      transparent 9px 17px
    );
  }

  .waypoint-grid {
    grid-template-columns: 1fr;
  }
}
</style>
