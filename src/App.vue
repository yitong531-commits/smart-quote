
<script setup>
</script>

<template>
  <main class="welcome">
    <div class="logo">SQ</div>

    <h1>Smart Quote</h1>

    <p>Smart Pricing Made Simple</p>

    <div class="description">
      Manage your products, costs, and quotes in one place.
    </div>
  </main>
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f8fafc;
  color: #1e293b;
}

.welcome {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 24px;
}

.logo {
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #4f46e5;
  color: white;
  font-size: 24px;
  font-weight: bold;
  border-radius: 16px;
  margin-bottom: 20px;
}

h1 {
  font-size: 36px;
  margin: 0 0 12px;
}

p {
  font-size: 18px;
  color: #4f46e5;
  margin: 0 0 16px;
}

.description {
  color: #64748b;
  font-size: 14px;
}
</style>
