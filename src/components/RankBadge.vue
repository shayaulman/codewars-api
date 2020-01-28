<template>
  <svg
    width="50"
    height="35"
    viewBox="0 0 112 57"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.809104 23.1832L15.088 1.05244L79.3412 0.490266L91.7992 23.0474L79.7403 46.1073L15.4871 46.6694L0.809104 23.1832Z"
      class="stroke-current"
      :class="'text-' + kyuColor"
      stroke-width="3"
    />

    <foreignObject
      class="fill-current"
      :class="'text-' + kyuColor"
      x="27"
      y="9"
      width="260"
      height="260"
    >
      <div class="text-lg" xmlns="http://www.w3.org/1999/xhtml">
        {{ rank }} kyu
      </div>
    </foreignObject>
  </svg>
</template>

<script>
export default {
  props: {
    rank: Number
  },
  computed: {
    kyuColor() {
      if (this.rank > 6) {
        return "white";
      } else if (this.rank > 4) {
        return "brand-yellow-1";
      } else if (this.rank > 2) {
        return "brand-blue-1";
      } else if (this.rank > 0) {
        return "brand-purple-1";
      }
    }
  }
};
</script>

<style lang="postcss">
/* should not be purged!
@apply text-brand-yellow-1 text-brand-blue-1 text-brand-purple-1 */
</style>
