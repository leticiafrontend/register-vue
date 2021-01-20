<template>
  <div v-if="users != 0" class="users">
    <div class="box-user" v-for="(user, index) in users" :key="index">
        <p>Nome: <span>{{user.name}}</span></p>
        <p>CPF: <span>{{user.cpf}}</span></p>
        <p>Telefone: <span>{{user.phone}}</span></p>
        <p>Email: <span>{{user.email}}</span></p>
        <button @click.prevent="deleteUser(index)" type="submit">Apagar</button>
      </div>
  </div>
  <div v-else>
    <p>Sem Usuários</p>
  </div>
</template>

<script>
export default {
  name: 'BoxUsers',
  data() {
    return {
        users: []
      };
  },
  methods: {
    listUsers(){
      if(!localStorage.users){
        fetch('https://private-21e8de-rafaellucio.apiary-mock.com/users')
        .then(response => response.json())
        .then(response => {
          this.users = response
          localStorage.setItem('users', JSON.stringify(this.users))
        })
      } else{
        this.users = JSON.parse(localStorage.getItem('users'))
      }
    },
    deleteUser(user){
      this.users.splice(user, 1)
      localStorage.setItem('users', JSON.stringify(this.users))
    }
  },
  created(){
    this.listUsers()
    console.log(this.users.length)
  }
}
</script>

<style>
.users{
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  column-gap: 20px;
  margin: 20px 0;
}

.box-user{
  background-color: #fff;
  box-shadow: 0px 0px 30px 4px rgb(0 0 0 / 14%);
  padding: 30px;
  border-radius: 4px;
}

.box-user p{
  font-weight: 600;
}

.box-user span{
  font-weight: initial;
}

.box-user button{
  width: 100%;
  margin: 20px 0 0;
  border: none;
  background-color: #fff;
  border-radius: 4px;
  color: #F05E5C;
  font-size: 16px;
  padding: 20px 0;
  box-shadow: 0px 0px 30px 4px rgb(0 0 0 / 14%);
  font-weight: 600;
  cursor: pointer;
  transition: background-color .4s ease-in-out;
}

.box-user button:hover{
  background-color: #FDEFEE;
  box-shadow: 0px 0px 30px 4px rgb(0 0 0 / 20%);
}
</style>