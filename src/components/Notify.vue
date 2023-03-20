<template lang="">
    <table>
        <transition-group name="list" tag="tbody">
            <tr v-for="message in messages" :key="message.title">
               <td>
                <span> {{message.title}}</span>
               </td>
            </tr>
        </transition-group>
    </table>
</template>
<script>
export default {
    props:{
        messages:{
            type:Array,
            required:true
        }
    }
}
</script>
<style lang="css">
table{
    text-align: center;
}

td{
    display: flex;
    justify-content: space-between;
    padding: 12px 6px;
    font-size: 14px;
}

/* Animation */
.list-item{
    display: inline-block;
    margin-right: 10px;
}
.list-enter-active, .list-leave-active {
    transition: all 1s;
}
.list-enter, .list-leave-to {
    opacity: 0;
    transform: translateY(30px);
}
</style>