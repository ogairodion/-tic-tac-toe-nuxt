<template>
  <div class="a-point" :class="{ clicked: clicked }" @click="getPoint">
    <div v-if="clicked" class="a-point__wrapper">
      <div v-if="icon === 'cross'" class="a-point__icon">&#10006;</div>
      <div v-else class="a-point__icon">&#9898;</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits('get-point');

const props = defineProps({
  activePlayer: {
    type: Number,
    default: 1,
  },
  index: {
    type: Number,
    default: 0,
  },
  clearAll: {
    type: Boolean,
    default: true,
  },
});

const clicked = ref(false);
const icon = ref('cross');

const getPoint = () => {
  clicked.value = true;
  icon.value = props.activePlayer === 1 ? 'cross' : 'circle';

  emit('get-point', props.index + 1);
};

watch(
  () => props.clearAll,
  (newValue) => {
    if (newValue) {
      clicked.value = false;
    }
  },
);
</script>

<style lang="scss" src="./a-point.scss"></style>
