<script setup lang="ts">
import { ref } from 'vue'
import umuPost from '../api/umuPost'
import umuGet from '../api/umuGet'

const name=ref("null")
const id=ref("null")
const an=ref("null")

withDefaults(defineProps<{ 
  msg: string
}>(),{
})


async function login(){
  name.value = (await umuPost.login("jtabm34","123456")).data.data.user_info.user_name
}
async function getElementId(){
  id.value = (await umuGet.getElementId("2Y8bwb380")).data
}
async function getAnswer(){
  an.value = (await umuGet.getAnswer(43883818,"57397223,57397224,57397225,57397226,57397227,57397228,57397229,57397230,57397231,57397232")).data
}
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="login()">count is {{ name }}</button>
    <button type="button" @click="getElementId()">count is {{ id }}</button>
    <button type="button" @click="getAnswer()">count is {{ an }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
