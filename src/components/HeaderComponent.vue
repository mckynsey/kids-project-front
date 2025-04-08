<template>
    <div>
      <ul class="head">
        <div class="log">
        <router-link to="/"><img src="../assets/images/imggabi/logohoriz.svg"></router-link>
      </div>
        <li><router-link class="deco" to="/">ACCUEIL</router-link></li>
        <li><router-link class="deco" to="/connexion">CONNEXION</router-link></li>
        <li><router-link class="deco" to="/inscription">INSCRIPTION</router-link></li>
        <li><router-link class="deco" to="/pathologie">PATHOLOGIE</router-link></li>
      </ul>

    </div>

</template>

<script setup>

</script>
<style scoped>
.head {
  display: flex;
  justify-content: right;
  gap: 100px;
  padding-top: 80px;
  padding-right: 120px;
  padding-bottom: 28px;
  background-color: rgba(0,122,120,1);
}

.log {
  width: 550px;
}


li {
  list-style: none;
  font-size: 1rem;
  cursor: pointer;
  padding: 10px;
  background: rgba(87, 204, 153, 1);
  border-radius: 30px;
  text-align: center;
  display: inline-block;

}

.deco {
  text-decoration: none;
  color: white;
  font-family: 'Lemonadaregular';
}


</style>
