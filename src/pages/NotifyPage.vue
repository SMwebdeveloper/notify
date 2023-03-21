<template lang="">
  <div class="wrapper-content wrapper-content--fixed home">
    <section>
      <div class="container">

        <!-- wrapper -->
        <div class="notify__wrapper">

          <!-- title -->
          <div class="notify-title">
            <p>Notify App</p>
            <svg @click="getNotifyLazy" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M18.537 19.567A9.961 9.961 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c0 2.136-.67 4.116-1.81 5.74L17 12h3a8 8 0 1 0-2.46 5.772l.997 1.795z"/></svg>
            <!-- svg -->
          </div>

          <!-- notify -->
          <div class="notify__content">
            <notify v-if="!loading" :messages="messages"/>
            <h4 v-if="loading">Loading...</h4>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>
<script>
import notify from '@/components/Notify.vue';

import axios from 'axios'
export default {
components:{
  notify,
},
data () {
   return {
    loading:false,
   }
},
computed:{
   messages() {
    return this.$store.getters.getMessage
   }
},
mounted () {
  this.getNotifyLazy()
},
methods:{
  getNotifyLazy(){
    this.loading = true
    setTimeout(()=>{
      this.getNotify()
    }, 1800)
  },
  getNotify () {
    this.loading = true
    axios.get('http://localhost:3000/notify')
       .then(response => {
        let res = response.data
        this.$store.dispatch('setMessage', res)
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => (this.loading = false))
  }
}
};
</script>
<style lang="css" scoped>
.notify__wrapper{
  width: 400px;
  background-color: #dddada;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 12px 22px 0 rgba(0,0,0,.1);
}

.notify__content{
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 300px;
}

.notify-title{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.notify-title p{
  font-size: 24px;
}

h4{
  margin-top: 20px;
  font-size: 25px;
  font-weight: 400;
}
</style>
