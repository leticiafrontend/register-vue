<template>
  <div class="notification">
    <p>{{text}}</p>
  </div>
</template>

<script>
export default {
  name: 'Notification',
  props: ['text']
}
</script>

<style scoped>

.notification {
  background-color: #e8f9f1;
  box-shadow: 0px 0px 30px 4px rgb(0 0 0 / 14%);
  padding: 20px 0;
  border-radius: 4px;
  border: 2px solid #41B883;
  margin: 10px 0;
  transition: 1s;
}

.notification p {
  text-align: center;
  color: #41B883;
  font-weight: 600;
}

</style>