<template>
  <header>
    <div class="header__container" id='nav'>
      <img class="header__image" src="../assets/logo.png" alt="Logo Vue">
      <nav>
        <router-link class="link" to="/">Cadastro</router-link>
        <router-link class="link" to="/users">Usuários</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderApp'
}
</script>

<style scoped>

header{
  background-color: #F05E5C;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
}

#nav{
  max-width: 430px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
}

#nav img{
  width: 10%;
}

#nav .link{
  text-decoration: none;
  color: #ffff;
  font-weight: 600;
}

#nav .link:last-child {
  margin-left: 12px;
}

</style>