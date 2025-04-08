<template>
  <div class="contactform">
    <div class="header">
      <div class="tete">
        <img class="cerveau" src="../assets/images/imggabi/cerveau.svg">
        <h1>Restons en contact</h1>
      </div>
      <div class="slogan">
        <h3>Une équipe disponible pour répondre à vos questions.</h3>
      </div>

    </div>

  <div class="placement">
    <div class="form-container">
      <form class="contact-form-style" @submit.prevent="soumettreFormulaire">

        <div class="form-group">
          <label for="nom">Nom :</label>
          <input v-model="nom" type="text" id="nom" required placeholder="Entrez votre nom" />
        </div>


        <div class="form-group">
          <label for="email">E-mail :</label>
          <input v-model="email" type="email" id="email" required placeholder="Entrez votre e-mail" />
        </div>


        <div class="form-group">
          <label for="telephone">Téléphone :</label>
          <input v-model="telephone" type="tel" id="telephone" required placeholder="Entrez votre téléphone" />
        </div>


        <div class="form-group">
          <label for="objet">Objet :</label>
          <select class="choix" v-model="objet" id="objet" required>
            <option disabled value="">Sélectionnez un objet</option>
            <option value="demande">Demande d'information</option>
            <option value="problème">Question sur une pathologie</option>
            <option value="problème">Question sur un sympthome</option>
            <option value="problème">Problème technique</option>
            <option value="autre">Autre</option>
          </select>
        </div>


        <div class="form-group">
          <label for="message">Message :</label>
          <textarea class="message" v-model="message" id="message" rows="10" required placeholder="Écrivez votre message ici..."></textarea>
        </div>

        <div class="form-group">
          <label>
            <input class="accepte" v-model="offre" type="checkbox" required /><router-link class="accepte" to="">
            "Je souhaite recevoir des offres et actualités" (si Gabitel fait du marketing)</router-link>
          </label>
        </div>


        <div class="form-group">
          <div>
          <label>
            <input class="accepte" v-model="acceptecgu" type="checkbox" required />
            <router-link class="accepte" to="/cgu" target="_blank">J'accepte les conditions générales d'utilisation</router-link>
          </label>
        </div>
        </div>


        <div class="form-group">
          <button class="boutton" type="submit" :disabled="accepteCGU">Envoyer</button>
        </div>

      </form>
    </div>
  </div>
  </div>
</template>

<sript setup>

</sript>

<style scoped>
.contactform {
  background-image: url('../assets/images/imggabi/adn.svg');
  background-repeat: no-repeat;
  background-size: cover;
}

img {
  width: 10%;

}

.tete {
  display: flex;
  align-items: end;
  padding: 15px;
}

h1  {
  font-size: 3rem;
  font-weight: bolder;
  padding-left: 400px;
}

h3  {
  font-size: 3.5rem;
  font-weight: bolder;
  color: rgba(56,163,165,1);
}

.slogan {
  display: flex;
  justify-content: center;
}

.placement {
  text-align: center;
  display: flex;
  justify-content: center;

}

.form-group {
  display: flex;
  flex-direction: column;
  align-items: center;


}

label {
  font-size: 3rem;
}

input {
  font-size: 2rem;
  width: 50%;
  height: 60px;
  border: none;
}

.message {
  width: 50%;

}

.choix {
  width: 50%;
}

.boutton {
  border: none;
  background-color: rgba(0,122,120,1);
  border-radius: 30px;
  font-size: 2.5rem;
  width: 20%;
  margin-bottom: 50px;
}

.accepte {
  font-size: 1.8rem;
  transform: scale(0.7);
  width: 10%;
}

</style>
