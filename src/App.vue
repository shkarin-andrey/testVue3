<template>
  <div class="container">
    <Widget
      v-for="item in widget"
      :key="item.id"
      :item="item"
      v-on:toggleTimer="toggleTimer"
      v-on:resetTimer="resetTimer"
    />
    <CreateWidget v-on:addNewWidget="addNewWidget" />
  </div>
</template>

<script setup>
import { v4 as uuidv4 } from "uuid";
import { ref } from "vue";
import CreateWidget from "./components/CreateWidget.vue";
import Widget from "./components/Widget.vue";

const initialState = [
  { id: uuidv4(), time: 20, isPlay: false, timer: null },
  { id: uuidv4(), time: 1000, isPlay: false, timer: null },
  { id: uuidv4(), time: 2000, isPlay: false, timer: null },
  { id: uuidv4(), time: 4000, isPlay: false, timer: null },
];
const widget = ref(initialState);

const addNewWidget = () => {
  widget.value.push({ id: uuidv4(), time: 0, isPlay: false, timer: null });
};

const toggleTimer = ( id ) => {
  const result = widget.value.find((item) => {
    return item.id === id;
  });

  result.isPlay = !result.isPlay

  if (!result.isPlay) {
    return clearInterval(result.timer)
  }

  result.timer = setInterval(() => {
    result.time++
  },1000)
};

const resetTimer = (id) => {
  const result = widget.value.find((item) => {
    return item.id === id;
  });

  clearInterval(result.timer)
  result.isPlay = false

  result.time = 0
}
</script>

<style>
.container {
  display: grid;
  height: 100%;
  justify-content: center;
  grid-template-columns: repeat(3, 225px);
  grid-auto-rows: 120px;
  grid-gap: 50px;
}

@media (max-width: 768px) {
  .container {
    grid-template-columns: repeat(2, 225px);
    padding: 72px 0px;
  }
}

@media (max-width: 561px) {
  .container {
    grid-template-columns: repeat(1, 225px);
    grid-gap: 45px;
  }
}
</style>
