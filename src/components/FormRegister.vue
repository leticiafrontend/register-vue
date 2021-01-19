<template>
  <div class="register">
    <form>
        <label for="name">Nome</label>
        <input @change="nameValidation" name="name" type="text" v-model="name" placeholder="Nome Completo">
        <label for="cpf">CPF</label>
        <input @change="cpfValidation" name="cpf" type="text" v-model="cpf" placeholder="000.000.000-00">
        <label for="phone">Telefone</label>
        <input @change="phoneValidation" name="phone" type="text" v-model="phone" placeholder="+55 11 99999-9999">
        <label for="email">Email</label>
        <input @change="emailValidation" name="email" type="text" v-model="email" placeholder="email@email.com">
        <button @click.prevent="registerUser" type="submit">Cadastrar</button>
      </form>
      <template v-show="{success}">
        <Notification />
      </template>
  </div>
</template>

<script>

import Notification from './Notification.vue'

export default {
  name: 'FormRegister',
  components: {
    Notification
  },
  data(){
    return{
      sucess: false,
    }
  },
  methods: {
    nameValidation(event){
      const input = event.target
      if(input.value.length < 3){
        input.classList.add('error')
      } else{
        input.classList.remove('error')
      }
    },
    cpfValidation(event){
      const input = event.target
      if(input.value.length < 11){
        input.classList.add('error')
      } else{
        input.classList.remove('error')
      }
    },
    phoneValidation(event){
      const input = event.target
      if(input.value.length < 10){
        input.classList.add('error')
      } else{
        input.classList.remove('error')
      }
    },
    emailValidation(event){
      const input = event.target
      if(input.value.length < 10){
        input.classList.add('error')
      } else{
        input.classList.remove('error')
      }
    }
  }
}
</script>

<style scoped>

form{
  display: flex;
  flex-direction: column;
}

form label{
  margin: 8px 0;
  font-weight: 600;
}

form input{
  padding: 10px;
  border-radius: 4px;
  border: 2px solid #E7E7E7;
}

form input:focus{
  border: 2px solid #A0D2DD !important;
}

form input::-webkit-input-placeholder {
  color: #E7E7E7;
}

form input:-moz-placeholder { /* Firefox 18- */
  color: #E7E7E7;  
}

form input::-moz-placeholder {  /* Firefox 19+ */
  color: #E7E7E7;  
}

form input:-ms-input-placeholder {  
  color: #E7E7E7;  
}

form button{
  margin: 20px 0;
  border: none;
  background-color: #F05E5C;
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
  padding: 20px 0;
  box-shadow: 0px 0px 30px 4px rgb(0 0 0 / 14%);
  font-weight: 600;
  cursor: pointer;
  transition: background-color .4s ease-in-out;
}

form button:hover{
  background-color: #C25151;
  box-shadow: 0px 0px 30px 4px rgb(0 0 0 / 20%);
}

form input.error{
  padding: 10px;
  background-color: #FDEFEE;
  border: 2px solid #C25151;
}

</style>
