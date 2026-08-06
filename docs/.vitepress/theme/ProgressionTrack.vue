<template>
  <section class="progression-track" aria-label="Progression overview">
    <div class="progression-rail" aria-hidden="true"></div>
    <div class="progression-grid"><slot /></div>
  </section>
</template>

<style scoped>
.progression-track {
  position: relative;
  margin: 30px 0 38px;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  border-radius: 20px;
  padding: 20px;
  background:
    linear-gradient(115deg, var(--game-accent-soft), transparent 48%),
    var(--vp-c-bg-elv);
  box-shadow: var(--mys-shadow-sm);
}

.progression-rail {
  position: absolute;
  top: 50%;
  right: 25px;
  left: 25px;
  height: 2px;
  background: linear-gradient(90deg, var(--mys-blue), var(--game-accent), var(--mys-yellow));
  opacity: 0.34;
}

.progression-grid {
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

@media (max-width: 640px) {
  .progression-grid {
    grid-template-columns: 1fr;
  }

  .progression-rail {
    top: 25px;
    bottom: 25px;
    left: 35px;
    width: 2px;
    height: auto;
  }
}
</style>
