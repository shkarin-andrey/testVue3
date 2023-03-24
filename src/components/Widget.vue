<template>
  <div class="widget" :class="{ active: item.isPlay }">
    <div class="widget__time">{{ formatTime(item.time) }}</div>
    <hr class="widget__line" />
    <div class="widget__controls">
      <div class="widget__toggle">
        <svg
          @click="toggleTimer(item.id)"
          v-if="!item.isPlay"
          width="17"
          height="20"
          viewBox="0 0 17 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="widget__play"
        >
          <path d="M0 20V0L17 10L0 20Z" fill="#9E9E9E" />
        </svg>

        <svg
          @click="toggleTimer(item.id)"
          v-else-if="item.isPlay"
          width="10"
          height="20"
          viewBox="0 0 10 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="widget__pause"
        >
          <rect x="7" width="3" height="20" fill="#9E9E9E" />
          <rect width="3" height="20" fill="#9E9E9E" />
        </svg>
      </div>

      <svg
        @click="resetTimer(item.id)"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="widget__stop"
      >
        <rect width="20" height="20" fill="#9E9E9E" />
      </svg>
    </div>
  </div>
</template>

<script setup>
import { formatTime } from '../utils/formatTime';

const emit = defineEmits();
const props = defineProps({
  item: Object,
});


const toggleTimer = (currentId) => {
  emit("toggleTimer", currentId );
};

const resetTimer = (currentId) => {
  emit("resetTimer", currentId );
};


</script>

<style scoped>
.widget {
  background: #696969;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
}

.widget__time {
  font-family: "Gotham Pro";
  font-weight: 400;
  font-size: 22px;
  line-height: 21px;
  text-align: center;
  color: #9e9e9e;
}

.widget__line {
  width: 100%;
  border: 1px solid#9e9e9e;
}
.widget__controls {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 48px;
}

.widget__play,
.widget__stop,
.widget__pause rect {
  cursor: pointer;
}

.widget.active {
  color: white;
}

.widget.active .widget__time {
  color: white;
}
.widget.active .widget__line {
  border-color: white;
}

.widget.active .widget__stop rect,
.widget.active .widget__pause rect {
  fill: white;
}
</style>
