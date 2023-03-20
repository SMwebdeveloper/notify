<template lang="">
  <div class="wrapper-content wrapper-content--fixed home">
    <section>
      <div class="container">

        <!-- wrapper -->
        <div class="notify__wrapper">

          <!-- title -->
          <div class="notify-title">
            <p>Notify App</p>
            <!-- svg -->
          </div>

          <!-- notify -->
          <div class="notify__content">
            <notify :messages="messages"/>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>
<script>
import notify from '@/components/Notify.vue';
export default {
components:{
  notify,
},
data () {
   return {
    messages:[
      {title:'message 1'},
      {title:'message 2'},
      {title:'message 3'},
      {title:'message 4'},
      {title:'message 5'},
      {title:'message 6'},
    ]
   }
},
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

.notify-title p{
  font-size: 24px;
}
</style>
