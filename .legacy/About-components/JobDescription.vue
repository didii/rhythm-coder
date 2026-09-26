<script setup lang="ts">
defineProps<{ isOpen?: boolean; stripe?: boolean }>();
</script>

<template>
  <div
    class="col-span-2 pt-2 pb-4 px-2 border-y border-neutral-100 job-description transition-all"
    :class="{ 'bg-neutral-100 border-white': stripe, 'job-description--closed': !isOpen }"
  >
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempus eget sapien non tincidunt. Nunc dapibus,
      felis ac gravida accumsan, risus orci placerat arcu, ut euismod sapien arcu quis ipsum. Sed accumsan et elit id
      imperdiet. Donec sed justo ante. Proin sed justo consequat, mollis mauris sit amet, tincidunt felis. Quisque
      dapibus sed erat et malesuada. Praesent libero tellus, varius vitae odio sit amet, facilisis posuere sapien. Lorem
      ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus nibh at sem pretium, vitae fringilla neque
      suscipit. Integer egestas vehicula dictum. Donec eleifend eros a leo vulputate, eget volutpat velit porta.
      Maecenas auctor eros ligula, quis viverra mi volutpat at. Sed elementum dignissim diam sed vulputate. Donec
      accumsan sem odio, finibus ultrices magna tempor eget. Aliquam fermentum ultrices tempus. Maecenas maximus, libero
      vel tincidunt varius, est ipsum porta sapien, convallis blandit ante elit id mi.
    </p>
  </div>
</template>

<style lang="css" scoped>
.job-description {
  display: block;
  animation: 150ms ease-out forwards reveal-down;
  clip-path: rect(0 100% 100% 0);
}
.job-description--closed {
  display: none;
  clip-path: rect(0 100% 0 0);
}
</style>
