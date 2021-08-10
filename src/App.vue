<template>
  <div id="toggler" @click="showForm = !showForm">
    <svg v-if="showForm" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1024 1024"><path d="M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4l-66.1-.3c-4.4 0-8 3.5-8 8c0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 0 0-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4l66 .3c4.4 0 8-3.5 8-8c0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z" fill="currentColor"></path><path d="M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448s448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z" fill="currentColor"></path></svg>
    <svg v-else xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 21V8a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H8l-4 4"></path><path d="M8 9h8"></path><path d="M8 13h6"></path></g></svg>
  </div>

  <div id="form-wrapper" v-if="showForm">
    <div class="header">Send a Message</div>
    <div id="form">
      <div class="form-input">
        <div>
          <label>Subject</label>
        </div>
        <input type="text" v-model="formValue.subject" class="w-full">
      </div>
      <div class="form-input">
        <label>How can we help?</label>
        <textarea v-model="formValue.description" cols="50" class="w-full"></textarea>
      </div>
      <div class="submit-button-wrapper">
        <button type="button" class="submit-button" @click="handleSubmit">Submit</button>
      </div>
    </div>


  </div>
</template>

<script setup>
import {ref, inject} from 'vue'



const formValue = ref({});

const showForm = ref(false);




const axios = inject('axios');

const handleSubmit = () => {
  const url = document.getElementById('curiosityForm').dataset.url;
  axios.post(url, formValue).then(({data}) => {
    console.log(data);

  }).catch(err=>{
    console.log(err);
  })
}
</script>

<style scoped>
#toggler {
  width: 50px;
  height: 50px;
  background-color: aqua;
  position: fixed;
  bottom: 10px;
  right: 10px;
  border-radius: 15px;
  padding: 5px;
}

#form-wrapper {
  width: 300px;
  height: 400px;
  border: 1px solid black;
  position: fixed;
  bottom: 80px;
  right: 10px;
}

.header{

  padding: 10px 5px;
  background-color: darkcyan;
}

#form {
  padding: 20px;

}

.submit-button-wrapper {
  display: flex;
  justify-items: end;
}

.submit-button {

}

.w-full {
  width: 100%;
}
</style>
