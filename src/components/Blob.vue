<script setup>
import { computed, reactive } from 'vue';

const props = defineProps({
  top: { required: true, type: Number },
  right: { required: true, type: Number },
  bottom: { required: true, type: Number },
  left: { required: true, type: Number },
});

const boundsWidth = computed(() => props.right - props.left);
const boundsHeight = computed(() => props.bottom - props.top);
const top = computed(() => Math.random() * boundsHeight + props.top);
const left = computed(() => Math.random() * boundsWidth + props.left);
const width = computed(() => Math.random() * boundsWidth * 0.8 + boundsWidth / 6);
const height = computed(() => Math.random() * boundsHeight * 0.8 + boundsHeight / 6);

const style = reactive({
  top: props.top,
  left: props.left,
});
</script>

<template>
  <div class="blob" :style="style"></div>
</template>

<style>
.blob {
  position: fixed;
}
</style>
