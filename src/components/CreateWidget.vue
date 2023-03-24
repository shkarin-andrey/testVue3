<template>
  <div class="create-widget">
    <svg
      @click="addNewWidget"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="create-widget__add"
    >
      <rect x="8.5" width="3" height="20" fill="#9E9E9E" />
      <rect
        y="11.5"
        width="3"
        height="20"
        transform="rotate(-90 0 11.5)"
        fill="#9E9E9E"
      />
    </svg>
  </div>
</template>

<script setup>
const emit = defineEmits();

const addNewWidget = () => {
  emit("addNewWidget");
};
</script>

<style scoped>
.create-widget {
  background: #696969;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
}

.create-widget__add rect {
  cursor: pointer;
}
</style>
