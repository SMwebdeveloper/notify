<template lang="">
  <table>
    <transition-group name="list" tag="tbody">
      <tr v-for="message in messages" :key="message.title">
        <td>
          <span> {{ message.title }}</span>
        </td>
      </tr>
    </transition-group>
    <button
      @click="loadMore"
      class="btn-primary"
      :disabled="maxLength === 0"
      :class="{btnDisabled: maxLength === 0}">
      Load More
    </button>
  </table>
</template>
<script>
export default {
  props: {
    messages: {
      type: Array,
      required: true,
    },
  },
  computed: {
    maxLength() {
      return this.$store.getters.getMessageFilter.length;
    },
  },
  methods: {
    loadMore() {
      this.$store.dispatch("loadMessages").catch((err) => {
        console.log(err);
      });
    },
  },
};
</script>
<style lang="css">
table {
  text-align: center;
}

td {
  display: flex;
  justify-content: space-between;
  padding: 12px 6px;
  font-size: 14px;
}

/* Animation */
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.btn-primary {
  padding: 8px 20px;
  background: rgb(7, 76, 122);
  border-radius: 30px;
  font-size: 14px;
  outline: none;
  color: aliceblue;
  border: none;
  margin-top: 20px;
  cursor: pointer;
}

button.btnDisabled {
    cursor: default;
    opacity: .6;
}
</style>
