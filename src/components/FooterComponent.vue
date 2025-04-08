<template>
  <div>

    <div class="adresse">
      <P class="siege">Siége social: GABITELLE</P>
      <p class="siege">83 rue des cerisiers 59200 Tourcoing</p>
      <p class="siege">Télèphone : 0800000000</p>
      <p class="siege">Adresse mail : gabitelle@gmail.com</p>
    <div class="ange">
      <router-link class="grandi" to="/"><img class="aug" src="../assets/images/imggabi/logo.svg"></router-link>
  </div>

  <div class="blocbas">
    <div class="ligne">
      <div class="site">
      <a href="https://instagram.com"
      target="instagram" rel="instagram"><img class="lien" src="@/assets/images/imggabi/instagram.png"></a>
      <a href="https://x.com" target="x" rel="x"><img class="lien" src="../assets/images/imggabi/twitter.png"></a>
      <a href="https://linkedin.com"  target="linkedin" rel="linkedin"><img class="lien" src="../assets/images/imggabi/linkedin.png"></a>
    <a href="https://facebook.com"
    target="facebook" rel="facebook"><img class="lien" src="../assets/images/imggabi/facebook.png"></a>
  </div>
    <p class="reserve">Gabitelle, 2025 Tout droit réservé.</p>
  </div>

  <div class="partenaire">
    <p class="partenaires">Nos parteniares</p>
    <div class="epsm">
    <a href="" target=""><img class="liendeux" src="../assets/images/imggabi/mental.svg"></a>
    <a href="https://www.lenvol.asso.fr/" target="lenvol"><img class="liendeux" src="../assets/images/imggabi/lenvol.png 1.svg"></a>
    <a href="https://www.epsm-lille-metropole.fr/" target="epsm"><img class="liendeux" src="../assets/images/imggabi/epsm.svg"></a>
    <a href="https://www.saintvincentdepaul-lille.fr/" target="stvincent"><img class="liendeux" src="../assets/images/imggabi/stvincent.svg"></a>
    <a href="https://littleangelscenter.com/" target="littleange"><img class="liendeux" src="../assets/images/imggabi/littleange.svg"></a>
  </div>
</div>
    <div>
      <ul class="bas">
        <li class="fin"><router-link class="enleve" to="cgu">CGU</router-link></li>
        <li class="fin"><router-link class="enleve" to="rgpd">RGPD</router-link></li>
        <li class="fin"><router-link class="enleve" to="qui">Qui sommes-nous</router-link></li>
        <li class="fin"><router-link class="enleve" to="faq">FAQ</router-link></li>
        <li class="fin"><router-link class="enleve" to="formulaire">Formulaire de contact</router-link></li>
      </ul>
    </div>
</div>
</div>
</div>
</template>
<script setup>

</script>
<style  scoped>


.adresse {
  width: 100%;
  height: 235px;
  background-color: rgba(0,122,120,1);
}

.siege {
  font-size: 1.5rem;
  padding: 0 0 0 30px;
}

.ange {
  display: flex;
  justify-content: end;
  padding-right: 80px;

}
 .aug{
  width: 270%;
 }

.blocbas {
  width: 100%;
  height: 362px;
  background-color: rgba(250,229,125,1);
}

.site {
  width: 50%;
  display: flex;



}

.lien {
width: 25%;
margin: 20px;

}

.ligne {
  display: flex;
  align-items: center;
}


.reserve {
  font-size: 2rem;
  padding-left: 200px;
}

.partenaire {
  font-size: 2rem;
  padding-left: 5px;
}

.partenaires {
  padding-left: 15px;
}

.epsm {
  display: flex;
  align-items: center;
  padding: 20px;
  gap: 80px;
}

.liendeux {
  width: 200%;
}

.bas {
  display: flex;
  justify-content: space-evenly
}

.fin, .enleve {
  list-style-type: none;
  text-decoration-line: none;
  font-size: 1.5rem;
}

</style>



