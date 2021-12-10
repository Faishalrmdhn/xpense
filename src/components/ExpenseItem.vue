<template>
  <!-- <v-container> -->
      <v-row align="center" justify="center" class="expense-item">
          <v-col cols="4">photo</v-col>
          <v-col cols="4">
              <v-row class="expense-detail">
                  <v-col cols="12">
                      {{expenseDetail.desc}}
                  </v-col>
              </v-row>
              <v-row>
                  <v-col cols="12">
                      {{expenseDetail.price}}
                  </v-col>
              </v-row>

          </v-col>
          <v-col cols="4">
              {{expenseDetail.date}}
              <span @click="deleteItem(expenseDetail.id)">
                  <v-icon
                    dark
                    right
                    >
                    mdi-cancel
                    </v-icon>
              </span>
          </v-col>
      </v-row>
  <!-- </v-container> -->
</template>

<script>
export default {
    props:{
        expenseDetail : Object
    },
    methods:{
        deleteItem(val){
            console.log(val)
            this.$emit('delete-item', val)
        }
    }
}
</script>

<style>
    .expense-item{
        background-color: #f66516;
        color: white;
        margin: 0px;
        border-radius: 10px;
    }
    .setPadding{
        padding: 5px 5px;
    }

    .expense-detail{
        border-bottom: 1px solid seashell;
    }
</style>