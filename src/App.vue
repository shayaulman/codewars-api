<template>
  <div id="app" class="max-w-5xl mx-auto">
    <header class="mb-24 flex bg-brand-gray-2 rounded-b-lg">
      <div class="relative m-4 p-4 w-full flex flex-col justify-around items-center rounded-b-lg"> 
        <img style="transform:scale(1.3)" class="m-4" :src="`https://www.codewars.com/users/${userName}/badges/large`" alt />
        <h1 class="m-4 text-center text-xl text-brand-gray-4">{{userName === 'Shaya Ulman' ? 'I' : 'you'}} have completed <span class="text-brand-red-1">{{ katas.data.length }} katas</span> so far!</h1>
        <button @mousedown="$confetti.start({defaultDropRate: 20,particlesPerFrame: 5})" @mouseup="$confetti.stop()" class="mt-12 py-2 px-3 absolute bottom-0 left-0  bg-purple-700 rounded-full hover:opacity-75 focus:outline-none">
          🎉
        </button>
      </div>
      <div class="p-6 w-96 flex flex-col items-center bg-brand-black-1 rounded-r-lg">
        <h3 class="text-center text-lg text-brand-gray-4">Check your <a class="text-brand-red-1 hover:underline" href="https://codewars.com" target="_blank">codewars </a>stats!</h3>
        <p class="p-2 text-brand-gray-5 text-center font-thin">Enter your username and click "GO", or create a <a class="text-brand-red-1 hover:underline" href="https://www.codewars.com/users/sign_in" target="_blank">codewars account</a> if you don't have one.</p> <p class="text-brand-gray-5">and don't forget to <a  href="https://www.codewars.com/users/Shaya%20Ulman" class="text-brand-red-1 hover:underline">follow me</a> overthere :) </p>
        <div class="relative m-6">
          <input type="text" @keyup.enter="fetchKatas()" v-model.lazy="userName" placeholder="your codewars username..." class=" p-3 w-84 text-brand-red-1 bg-brand-gray-2 focus:outline-none focus:shadow-outline rounded-lg"/>
          <button @click="fetchKatas()" class="absolute right-0 m-1 px-4 py-2 text-brand-red-1 bg-brand-black-1 rounded-lg hover:opactiy-25 focus:outline-none focus:shadow-outline">GO</button>
        </div>
      </div>
    </header>
    <section v-if="katas" class="grid">
                <transition-group class="collection m-8" name="fade">

      <kata-card v-for="kata in katas.data" :kata="kata" :key="kata.id + Math.random()" />
                </transition-group>
    </section>

  </div>
</template>

<script>
import KataCard from "@/components/KataCard";
 
export default {
  name: "app",
  components: {
    KataCard
  },
  data() {
    return {
      userName: 'Shaya Ulman',
      katas: ""
    };
  },
  methods: {
    async fetchKatas() {
      let response = await fetch(
        `https://heroku-shaya.herokuapp.com/users/${this.userName}/code-challenges/completed?page=0`
      );
      if (response.ok) {
        this.katas = await response.json();
      } else {
        alert("HTTP-Error: " + response.status);
      }
    },


  },

  mounted() {
    this.fetchKatas();
    setTimeout(() => {this.$confetti.start()}, 5000)
    setTimeout(() => {this.$confetti.stop()}, 8000)
     
  }
};
</script>

<style scoped>
.grid {
  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); */
}

.collection {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

img {
  filter: drop-shadow(0 0 0.35rem black);
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

<style src="./assets/tailwind.css">
