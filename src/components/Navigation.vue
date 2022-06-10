<script lang="ts"></script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <img class="navbar-brand" src="@/assets/pictures/logo.png" />
            <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <RouterLink class="nav-item nav-link" to="/">Home</RouterLink>
                    <RouterLink class="nav-item nav-link" to="/HowItWorks">How it works</RouterLink>
                    <RouterLink class="nav-item nav-link" to="/Bicycles">Bicycles</RouterLink>
                    <RouterLink class="nav-item nav-link" to="/RentABike">Rent a Bike</RouterLink>
                </div>
            </div>
        </nav>
    </header>
</template>

<style scoped>
.navbar-brand {
    max-width: 160px;
    height: auto;
}

nav {
    padding: 20px;
    font-size: larger;
}

.nav-item.nav-link.router-link-active {
    text-decoration: underline;
}

#navbarNavAltMarkup {
    justify-content: right;
}
</style>
