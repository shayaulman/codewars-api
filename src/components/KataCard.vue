<template>
  <transition name="fade">
    <section
      class="card relative m-2 bg-brand-gray-2 h-56 text-brand-red-1 rounded-lg"
    >
      <div
        class="p-6 h-16 flex justify-between items-center text-sm bg-brand-black-1 rounded-t-lg"
      >
        <h1 class="w-48">{{ kata.name }}</h1>
        <rank-badge
          v-if="kataContent"
          :rank="+kataContent['rank']['name'].match(/\d+/)[0]"
        />
      </div>

      <div v-if="kata">
        <p
          class="p-4 font-thin font-sans text-sm text-brand-white-1 overflow-hidden"
        >
          {{ slicedDescription }}
        </p>
        <div
          class="w-full px-4 absolute bottom-0 flex justify-between items-center"
        >
          <p class="py-3  text-brand-blue-1 text-xs font-hairline">
            completed at
            {{
              kata.completedAt
                .split("")
                .splice(0, 10)
                .join("")
            }}
          </p>
          <a :href="'https://www.codewars.com/kata/' + kata.id" target="_blank"
            ><external-icon
          /></a>
        </div>
      </div>
    </section>
  </transition>
</template>

<script>
import RankBadge from "@/components/RankBadge";
import ExternalIcon from "@/components/UI/ExternalIcon.vue";
export default {
  props: {
    kata: Object
  },
  components: {
    ExternalIcon,
    RankBadge
  },
  data() {
    return {
      kataContent: "",
      apiUrl: "https://heroku-shaya.herokuapp.com/"
    };
  },

  methods: {
    async fetchKataContent(url) {
      const send = this.apiUrl + "/code-challenges/" + url;
      let response = await fetch(send);

      if (response.ok) {
        let json = await response.json();
        this.kataContent = await json;
      } else {
        alert("HTTP-Error: " + response.status);
      }
    }
  },

  computed: {
    slicedDescription() {
      if (!this.kataContent) return;
      const formatted = this.kataContent.description.replace(/[^\w\s]/gi, "");
      const sliced = formatted
        .split(" ")
        .splice(0, 25)
        .join(" ");

      return sliced + "...";
    }
  },

  mounted() {
    this.fetchKataContent(this.kata.slug);
  }
};
</script>

<style lang="scss" scoped>
.card {
  transition: 0.3s ease;
  &:hover {
    transform: translateY(-1px);
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.15s ease;
  opacity: 1;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: scale(0.5);
}
</style>
