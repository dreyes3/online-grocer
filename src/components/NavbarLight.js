import logo from '../img/logo.png';

function NavbarLight() {
    return (
        <nav class="navbar navbar-light navbar-expand-lg bg-faded">
            <div class="container">
                <a class="navbar-brand" href="index.html"> <img src={logo} alt="logo" /> </a>

                <button class="navbar-toggler navbar-toggler-white" type="button" data-toggle="collapse"
                    data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="navbar-collapse" id="navbarNavDropdown ">
                    <div class="navbar-nav mr-auto mt-5 mt-lg-2 margin-auto top-categories-search-main">
                        <div class="top-categories-search">
                            <div class="input-group">
                                <input class="form-control" placeholder="Search products in Your City"
                                    aria-label="Search products in Your City" type="text" />
                                <span class="input-group-btn">
                                    <button class="btn btn-secondary" type="button"><i class="mdi mdi-file-find"></i>
                                        Search</button>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="my-2 my-lg-0">
                        <ul class="list-inline main-nav-right">
                            <li class="list-inline-item cart-btn">
                                <a href="#" data-toggle="offcanvas" class="btn btn-link border-none">
                                    <i class="mdi mdi-cart"></i>
                                    My Cart <small class="cart-value">5</small></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavbarLight;