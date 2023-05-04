<template>
  <div class="s-table">
    <h1 class="s-table__title">Крестики - нолики</h1>
    <div class="s-table__player">
      Сейчас ходит: <strong>игрок №{{ activePlayer }}</strong>
    </div>
    <div class="s-table__points" :class="{ 'game-over': win }">
      <a-point
        v-for="(point, id) in points"
        :key="id"
        :index="id"
        :active-player="activePlayer"
        :clear-all="clearAll"
        @get-point="getPoint"
      />
    </div>
    <div v-if="win || step === points" class="s-table__results">
      <div v-if="win" class="s-table__win">Игра окончена. <br />Выиграл игрок №{{ activePlayer }}</div>
      <div v-if="step === points" class="s-table__win">Ничья</div>
      <button class="s-table__btn" @click="reset">Очистить</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const activePlayer = ref(1);
const points = 9;
const step = ref(0);
const clearAll = ref(false);
const players = ref([
  {
    points: [],
  },
  {
    points: [],
  },
]);
const win = ref(false);
const combinations = [
  [1, 2, 3],
  [1, 5, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [3, 5, 7],
  [4, 5, 6],
  [7, 8, 9],
];

const getPoint = (id) => {
  clearAll.value = false;
  const currentPlayer = players.value[activePlayer.value - 1].points;
  currentPlayer.push(id);

  for (let i = 0; i < combinations.length; i++) {
    const winArray = combinations[i];
    let count = 0;
    if (winArray.indexOf(id) !== -1) {
      for (let j = 0; j < currentPlayer.length; j++) {
        if (currentPlayer.indexOf(winArray[j]) !== -1) {
          count++;
          if (count === 3) {
            win.value = true;
          }
        }
      }
    }
  }

  if (!win.value) {
    activePlayer.value = activePlayer.value === 1 ? 2 : 1;
  }

  step.value += 1;
};

const reset = () => {
  clearAll.value = true;
  players.value[0].points = [];
  players.value[1].points = [];
  activePlayer.value = 1;
  win.value = false;
  step.value = 0;
};
</script>

<style lang="scss" src="./s-table.scss"></style>
