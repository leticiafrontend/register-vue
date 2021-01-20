<template>
  <div class="register">
    <form @submit.prevent="checkForm">
      <label for="name">Nome</label>
      <input @change="nameValidation" name="name" type="text" v-model="name" placeholder="Nome Completo">
      <template v-if="errorName.length">
        <p class="error" v-for="error in errorName" :key="error">{{ error }}</p>
      </template>
      <label for="cpf">CPF</label>
      <input @change="cpfValidation" name="cpf" type="text" v-model="cpf" placeholder="000.000.000-00" maxlength="11">
      <template v-if="errorCpf.length">
        <p class="error" v-for="error in errorCpf" :key="error">{{ error }}</p>
      </template>
      <label for="phone">Telefone</label>
      <input @change="phoneValidation" name="phone" type="text" v-model="phone" placeholder="(11) 99999-9999" maxlength="11">
      <template v-if="errorPhone.length">
        <p class="error" v-for="error in errorPhone" :key="error">{{ error }}</p>
      </template>
      <label for="email">Email</label>
      <input @change="emailValidation" name="email" type="text" v-model="email" placeholder="email@email.com">
      <template v-if="errorEmail.length">
        <p class="error" v-for="error in errorEmail" :key="error">{{ error }}</p>
      </template>
      <button type="submit">Cadastrar</button>
    </form>
    <Notification v-if="success" text="Usuário cadastrado com sucesso!" />
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
      errorName: [],
      errorCpf: [],
      errorPhone: [],
      errorEmail: [],
      name: '',
      cpf: '',
      phone: '',
      email: '',
      userData: JSON.parse(localStorage.getItem('users')) || [],
      success: false
    }
  },
  methods: {
    nameValidation(event){
      const input = event.target
      if(input.value.length < 3){
        this.errorName = []
        input.classList.add('error')
        this.errorName.push('Preencha o nome corretamente!')
      } else{
        input.classList.remove('error')
        this.errorName = []
      }
    },
    cpfValidation(event){
      const input = event.target
      if(input.value.length < 11){
        this.errorCpf = []
        input.classList.add('error')
        this.errorCpf.push('Preencha o CPF corretamente!')
      } else{
        input.classList.remove('error')
        this.errorCpf = []
      }
    },
    phoneValidation(event){
      const input = event.target
      if(input.value.length < 10){
        this.errorPhone = []
        input.classList.add('error')
        this.errorPhone.push('Preencha o telefone corretamente!')
      } else{
        input.classList.remove('error')
        this.errorPhone = []
      }
    },
    emailValidation(event){
      const input = event.target
      if(input.value.length < 10){
        this.errorEmail = []
        input.classList.add('error')
        this.errorEmail.push('Preencha o email corretamente!')
      } else{
        input.classList.remove('error')
        this.errorEmail = []
      }
    },
    checkForm(event){
      this.errorName = []
      this.errorCpf = []
      this.errorPhone = []
      this.errorEmail = []

      if(this.name < 3){
        this.errorName.push('Preencha o nome corretamente!')
        event.target[0].classList.add('error')
      }

      if(this.cpf < 11){
        this.errorCpf.push('Preencha o CPF corretamente!')
        event.target[1].classList.add('error')
      }

      if(this.phone < 10){
        this.errorPhone.push('Preencha o telefone corretamente!')
        event.target[2].classList.add('error')
      }

      if(this.email < 10){
        this.errorEmail.push('Preencha o email corretamente!')
        event.target[3].classList.add('error')
      }

      if(this.errorName.length === 0 && this.errorCpf.length === 0 && this.errorPhone.length === 0 && this.errorEmail.length === 0){

        this.userData.push({name: this.name, cpf: this.cpf, phone: this.phone, email: this.email})

        localStorage.setItem('users', JSON.stringify(this.userData))

        this.name = ''
        this.cpf = ''
        this.phone = ''
        this.email = ''

        this.activateNotification()

      }
    },
    activateNotification(){
      this.success = true
      setTimeout(() => {this.success = false}, 2000)
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
  outline: none !important;
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

p.error{
  color: #C25151;
  font-weight: 600;
}


</style>
