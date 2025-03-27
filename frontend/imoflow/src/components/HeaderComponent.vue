<template>
  <nav class="navbar navbar-expand-lg bg-black navbar-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link active" to="/" aria-current="page">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link disabled" to="/lista-condominios" aria-disabled="true"
              >Lista de Condominios</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
