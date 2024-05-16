<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid mx-4">
            <a class="navbar-brand fs-3" href="#">Grab a shoe</a>
            <div class="search-container">
                <form class="">
                    <input class="search-input" type="search" placeholder="Search for different Products and Brands"
                        aria-label="Search">
                    <button class="search-button" type="submit">
                        <i class="bi bi-search"></i>
                    </button>
                </form>
            </div>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 py-4 float-end">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Category
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">Cart</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            EN
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Login</a>
                    </li>
                    <button type="button" class="btn signup-btn">Sign Up</button>
                </ul>

            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        </div>
    </nav>
    <div class="note-container d-flex justify-content-center align-items-center py-2">
        <p class="m-0">Free shipping for orders above $299</p>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.navbar-brand {
    color: #1DC801;
}

.navbar-collapse {
    flex-grow: 0;
}

.note-container {
    color: aliceblue;
    background-color: black;
}

.search-container {
    border-radius: 30px;
    position: relative;
    width: 30%;
}

.search-input {
    width: 100%;
    height: 45px;
    display: block;
    border-radius: 30px;
    padding-left: 20px;
    font-size: 14px;
    border: none;
    outline: none;
    background-color: #EDEDED;
}

.search-button {
    position: absolute;
    right: 0;
    top: 0;
    width: 64px;
    height: 100%;
    background-color: #1DC801;
    color: white;
    border-radius: 50px;
    border: none;
    outline: none;
    font-size: 20px;

}

.signup-btn {
    background-color: #1DC801;
    color: white;
}

@media (max-width: 991px) {
    .navbar-collapse {
        flex-grow: 1;
        flex-basis: 100%;
    }

    .search-container {
        width: 100%;
        order: 1;
    }

    .navbar-nav {
        width: 100%;
        flex-direction: column;
    }

    .navbar-nav .nav-item,
    .navbar-nav .dropdown,
    .navbar-nav .btn {
        width: 100%;
    }

    .search-container {
        margin-top: 16px;
    }
}
</style>