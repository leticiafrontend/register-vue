<template>
  <div class="register">
    <form>
        <label for="name">Nome</label>
        <input name="name" type="text" placeholder="Nome Completo">
        <label for="cpf">CPF</label>
        <input name="cpf" type="text" placeholder="000.000.000-00">
        <label for="phone">Telefone</label>
        <input name="phone" type="text" placeholder="+55 11 99999-9999">
        <label for="email">Email</label>
        <input name="email" type="text" placeholder="email@email.com">
        <button type="submit">Cadastrar</button>
      </form>
  </div>
</template>

<script>
export default {
  name: 'FormRegister'
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
