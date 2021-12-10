<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <h2>Xpense</h2>
      </div>

      <v-spacer></v-spacer>

      <!-- <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn> -->
      <!-- <v-btn color='warning'>
        WADIDAWWWWW
      </v-btn> -->
      <div class="total">
        Rp. {{totalExpense}}
      </div>
    </v-app-bar>

    <v-main>
      <Form class="mt-2" @add-expense='addExpense' />
      <ExpenseList :expense='expense'/>
    </v-main>
  </v-app>
</template>

<script>
import Form from './components/Form.vue';
import ExpenseList from './components/ExpenseList.vue';

export default {
  name: 'App',

  components: {
    Form,
    ExpenseList
  },

  data(){
    return {
      expense : [],
      sortedExpense: []
    }
  },
  watch:{
    sortingExpense(){
      let temp = this.sortedExpense
        
        temp = this.expense.sort(function (a, b) {
          return b.date - a.date;
        });
        return this.sortedExpense = temp;
    },
  },
  computed:{
    
    totalExpense(){
      let temp = 0

      if(this.expense.length > 0){
        
        for (let i = 0; i < this.expense.length; i++){
          temp += this.expense[i].price
        }
        return temp
      } else {
        return 0;
      }

      
    }
  },
  methods:{
    addExpense(val){
      // let d = val.date.split("-");
      // let newD = new Date(d[0], d[1], d[2]);
      console.log(typeof val)
      this.expense = [...this.expense, {
        id: Date.now(),
        desc : val.desc,
        price : parseInt(val.price),
        date : val.date
      }]
      // console.log(this.expense)
    },
    removeItem(id) {
      this.income = this.income.filter(data => data.id != id);
    }
  }
  
};
</script>

<style scoped>
  .total{
    min-width: 100px;
    background-color: #f66516;
    border-radius: 30px;
    text-align: center;
    box-shadow: inset 0px 0px 6px rgba(0, 0, 0, 0.25);
    font-size: 14px;
  }
</style>