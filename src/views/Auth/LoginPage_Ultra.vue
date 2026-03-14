<template>
  <div>
    <h1>Test Ultra Simple</h1>
    <button onclick="alert('Test 1: JavaScript fonctionne!')">Test 1: Alert</button>
    <br><br>
    <button onclick="document.getElementById('test').style.display = 'block'">Test 2: Afficher</button>
    <button onclick="document.getElementById('test').style.display = 'none'">Test 2: Masquer</button>
    <br><br>
    <div id="test" style="display: none; background: red; color: white; padding: 20px;">
      CONTENU VISIBLE !
    </div>
    <br><br>
    <button onclick="this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'none' ? 'block' : 'none'">Test 3: Toggle</button>
    <div style="display: none; background: blue; color: white; padding: 20px;">
      TOGGLE FONCTIONNE !
    </div>
  </div>
</template>

<script>
console.log('LoginPage_Ultra chargé')
</script>
