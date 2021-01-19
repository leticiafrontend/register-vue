<template>
  <div class="users">
    <div class="box-user">
        <p>Nome: <span>Letícia Alexandre</span></p>
        <p>CPF: <span>46158410861</span></p>
        <p>Telefone: <span>+55 11 94010-6659</span></p>
        <p>Email: <span>leticia.alesilva@outlook.com</span></p>
        <button type="submit">Apagar</button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'BoxUsers'
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