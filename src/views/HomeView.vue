<template>
  <div class="adn">
    <div class="texteaccueille">
        <h1>NOTRE HISTOIRE</h1>
        <img class="vector" src="../assets/images/imggabi/Vector.svg">
      <div class="para">
        <p>Découvrir, comprendre, apprivoiser ce qui, parfois,
          fait peur l’intérieur.</p>
        <p>Gabitelle s’adresse à ceux qui veulent apprendre à déterrer des trésors de connaissances.</p>
        <h5>“Choisissez d’être l’archéologue de votre vie.”</h5>
        <p>Un accompagnement enrichi par l’IA et chaleureux par la médecine, qui ne donne pas de leçon.</p>
        <p>Oser aller de l’avant… sans se presser, sans se comparer au autres, mais avec fierté et conscience. </p>
      </div>
      <div class="slogan">
        <h4> “L’intelligence inspirée, entre raison et émotion une intelligence pour le foyer.”</h4>
      </div>

     </div>
    <div class="blocknews">
        <h1 class="newsletter">News letter</h1>
    </div>
    <div class="conception">
      <p class="design">✨Conception & Direction artistique : Hélène</p>
      <p class="design">🎨Design : Julien, Esteban Concept Design</p>
      <p class="design">🛠Développement Backend : Yahia</p>
      <p class="design">💻Développement Frontend : Okba & Mohamed</p>

      <p class="design">🌟Une création pensée et portée par l’équipe.</p>

      <p class="design">"Réalisée par l’équipe Gabitelle."</p>

    </div>
</div>

</template>
<script setup>



</script>
<style scoped>

.adn {
  background-image: url('@/assets/images/imggabi/adn.svg');
  background-repeat: no-repeat;
  background-size: cover;
}

.texteaccueille {
  text-align: center;
  padding: 5rem;
}

h1 {font-size: 4rem;}

.vector {
  width: 10%;
  padding-top: 25px;
}

p {
  font-size: 2rem;
  white-space: pre-line;
  padding-top: 50px;
}

h5 {
  font-size: 2.8rem;
  padding-top: 55px;
}

h4 {
  padding-top: 100px;
  font-size: 4rem;
}

.blocknews {
  width: 100%;
  height: 250px;
  background-color: rgba(0,122,120,1);

}

.newsletter {
  text-align: center;
  padding-top: 50px;
  color: white;
  font-size: 6rem;
  font-weight: bolder;
  text-decoration: underline;
}

.conception {
  background-color: rgba(250,229,125,1);
  text-align: center;
}

.design {
  font-size: 1.5rem;
  font-weight: bold;
}


</style>
