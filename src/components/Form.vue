<template>
    <v-container>
        <v-form @submit.prevent="onSubmit">
            <v-row>
                <v-col cols="12">
                    <v-text-field
                    v-model="formData.desc"
                    :counter="10"
                    label="Description"
                    placeholder="What do you spend?"
                    required
                    ></v-text-field>
                    <!-- <input type="text" placeholder="Description" required v-model="formData.desc" > -->
                    <v-text-field
                        v-model="formData.price"

                        label="Price"
                        type="number"
                        placeholder="how much it costs?"
                        />
                    <!-- <input type="number" placeholder="Price" required v-model="formData.price"> -->
                    <input class="mt-3" type="date" placeholder="Date" required v-model="formData.date">
                    
                </v-col>
            </v-row>

            <v-row class="mt-2">
                <v-btn small type="submit">Submit</v-btn>
            </v-row>
        </v-form>        
    </v-container>

</template>

<script>
export default {
    data(){
        return {
            formData: {
                desc: '',
                price: null,
                date: null
            },
            // onDisabled: false
        }
    },
    watch:{
        // onDisabled(){
        //     if (this.formData.desc == null || this.formData.price == null || this.formData.date == null){
        //         return true
        //     } else {
        //         return false
        //     }
        // }
    },
    methods:{
        onSubmit(){
            this.$emit('add-expense', this.formData)

            this.formData.desc = null
            this.formData.price = null
            this.formData.date = null
        },
        
    }
}
</script>