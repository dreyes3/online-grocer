import Icon from '@mdi/react';
import { mdiLock } from '@mdi/js';
import { mdiAccountCircle } from '@mdi/js';

function NavbarTop() {
    return (
        <div class="navbar-top">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <a href="#" class="mb-0 text-white">
                            Code: <strong><span class="text-light">OGOFERS13 <span
                                class="mdi mdi-tag-faces"></span></span> </strong> </a>
                    </div>
                    <div class="col-md-6 text-end">
                        <a href="#" data-target="#bd-example-modal" data-toggle="modal" class="text-white">
                            <i><Icon path={mdiLock} size={.5} /></i>
                            Sign In
                        </a>
                        <a href="#" data-target="#bd-example-modal" data-toggle="modal" class="text-white ms-2">
                            <i><Icon path={mdiAccountCircle} size={.5} /></i>
                            Sign Up</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavbarTop;