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
                    <a class="nav-item nav-link active" href="index.html">Home</a>
                    <a class="nav-item nav-link" href="howItWorks.html">How it works</a>
                    <a class="nav-item nav-link" href="bicycles.html">Bicycles</a>
                    <a class="nav-item nav-link" href="rentBike.html">Rent a Bike</a>
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

.nav-item.nav-link.active {
    text-decoration: underline;
}

#navbarNavAltMarkup {
    justify-content: right;
}
</style>
