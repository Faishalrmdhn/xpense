<template>
  <v-container class="expense-list">
      <hr class="my-3">
      <v-row justify="center">
          <v-col cols="12">
              <!-- {{expense}} -->
              <ExpenseItem v-for="a in expense" :key="a.id" :expenseDetail="a" @delete-item="deleteItem"/>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
import ExpenseItem from './ExpenseItem.vue'
export default {
    components:{
        ExpenseItem
    },
    props:{
        expense : Array
        // sortedExpenseFinal : Array
    },
    methods:{
        deleteItem(val){
            this.$emit('remove-item', val)
        }
    }
}
</script>

<style>
    .expense-list{
        margin: 0px;
        margin-top: 10px;
        padding: 1px;
    }
</style>