<template lang="">
  <div class="connect">
    <div class="rentre">
      <h4>Formulaire d'inscription</h4>
    </div>


    <div class="fond">
      <form class="stile" @submit.prevent="seConnecter">
        <div class="email">
          <label for="pseudo">Pseudo :</label>
          <input v-model="pseudo" type="text" id="pseudo" required placeholder="Entrez votre pseudo" />
        </div>
      <div class="email">
        <label for="email">E-mail :</label>
        <input v-model="email" type="email" id="email" required placeholder="Entrez votre email" />
      </div>
    <div class="motpasse">
      <label for="motdepasse">Mot de passe :</label>
      <input v-model="motDePasse" type="password" id="motdepasse" required placeholder="Entrez votre mot de passe" />
    </div>
    <div class="motpasse">
          <label for="confirmeMotdepasse">Confirmer le mot de passe :</label>
          <input v-model="confirmeMotDePasse" type="password" id="confirmeMotdepasse" required placeholder="Confirmez le mot de passe" />
        </div>
    <div class="boutton">
      <button type="submit">Comfirmer</button>
    </div>
    </form>
    </div>

  </div>
</template>
<script setup>

</script>
<style scoped>
.rentre {
  width :100%;
  height: 150px;
  background-color: rgba(188,224,210,1);
  text-align: center;
  padding-top: 50px;
}

h4 {
  font-size: 2rem;
  color: white;
}

.fond {
  background-image: url('../assets/images/imggabi/adn.svg');
  background-repeat: no-repeat;
  background-size: cover;
}

.stile {
  max-width: 400px;
  margin: auto;
  padding: 2rem;

}

.email {
  display: flex;
  flex-direction: column;
  font-size: 2rem;
}

.motpasse {
  display: flex;
  flex-direction: column;
  font-size: 2rem;
}

input {
  font-size: 2rem;
  width: 120%;
  height: 60px;
  border: none;
}

.boutton {
  display: flex;
  justify-content: center;
  padding-top: 30px;
}

button {
  border: none;
  background-color: rgba(0,122,120,1);
  border-radius: 30px;
  font-size: 2.5rem;
}
</style>

