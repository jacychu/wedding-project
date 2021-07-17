<template>
  <div class="recieved-color h-screen flex">
    <div class="m-auto">
      <p class="text-2xl">We have recieved your reply. Thank you!</p>
      <button @click="goBack" type="submit" class="mt-8 py-3 px-8 form-olive-bg text-white font-bold">Back</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.push({ path: '/' })
    },
  },
};
</script>

<style>
.recieved-color {
  position: fixed;
  background: #F1F1E8;
  width: 100%;
  height: 100%;
}
</style>