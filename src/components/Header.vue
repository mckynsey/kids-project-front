<template>
  <div class="navbar">
    <div>
      <ul class="head">
        <li><router-link class="deco" to="">ACCUEILLE</router-link></li>
        <li><router-link class="deco" to="">CONNEXION</router-link></li>
        <li><router-link class="deco" to="">INSCRIPTION</router-link></li>
        <li><router-link class="deco" to="">PATHOLOGIE</router-link></li>
      </ul>
    </div>
    <div class="retour">
      <h5><router-link class="deco" to="">Gabitelle</router-link></h5>
      <router-link class="deco" to=""
        ><img class="ange" src="../assets/images/logo.svg"
      /></router-link>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.head {
  display: flex;
  justify-content: right;
  gap: 100px;
  padding-top: 100px;
  padding-right: 150px;
  padding-bottom: 28px;
}

li {
  list-style: none;
  font-size: 2rem;
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

.navbar {
  width: 100%;
  height: 200px;
  background-color: rgba(56, 163, 165, 1);
}

.retour {
  background-image: url('@/assets/images/famille.svg');
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h5 {
  color: white;
  font-size: 4rem;
  font-family: 'Lemonada';
}

.ange {
  width: 8rem;
  height: auto;
}
</style>
