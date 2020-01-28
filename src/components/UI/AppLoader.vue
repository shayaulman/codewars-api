<template>
  <div class="loader-wrapper w-full h-full flex justify-center items-center">
    <div class="loader" style="height: 24px; width: 24px;">
      <svg height="100%" viewBox="0 0 32 32" width="100%">
        <circle
          class="stroke-current text-brand-red-1"
          cx="16"
          cy="16"
          fill="none"
          r="14"
          stroke-width="4"
          style="opacity: 0.2;"
        />
        <circle
          class="stroke-current text-brand-red-1"
          cx="16"
          cy="16"
          fill="none"
          r="14"
          stroke-width="4"
          style=" stroke-dasharray: 80px; stroke-dashoffset: 60px;"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loader"
};
</script>

<style lang="scss">
.loader {
  animation: rotate 0.75s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
