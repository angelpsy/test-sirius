<template>
  <div class="rounded-2 bg-white p-6" :class="$style['root']">
    <slot />
  </div>
</template>

<style module>
.root {
  box-shadow: 5.328px 5.328px 19.982px 0px rgba(0, 0, 0, 0.15);
}
</style>