import axios from "axios";
import { Link } from "react-router-dom";
import { User } from "../models";

const Nav = (props: { user: User | null }) => {

    return (


        <nav className="bg-dark navbar navbar-dark navbar-expand-lg pb-3 position-relative pt-3 shadow-none" data-pg-collapsed>
            <div className="bg-secondary col-lg-8 end-0 h-100 position-absolute top-0">
            </div>
            <div className="container position-relative"> <a className="fw-bold navbar-brand text-uppercase" href="">Logo</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown-2" aria-controls="navbarNavDropdown-2" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNavDropdown-2">
                    <ul className="ms-auto navbar-nav">
                        <li className="nav-item"> <a className="active nav-link pb-lg-3 pe-lg-4 ps-lg-4 pt-lg-3" aria-current="page" href="">Home</a>
                        </li>
                        <li className="nav-item"> <a className="nav-link pb-lg-3 pe-lg-4 ps-lg-4 pt-lg-3" href="" target="_pg_blank">About</a>
                        </li>
                        <li className="nav-item"> <a className="nav-link pb-lg-3 pe-lg-4 ps-lg-4 pt-lg-3" href="">Features</a>
                        </li>
                        <li className="nav-item"> <a className="nav-link pb-lg-3 pe-lg-4 ps-lg-4 pt-lg-3" href="">Services</a>
                        </li>
                        <li className="nav-item"> <a className="nav-link pb-lg-3 pe-lg-4 ps-lg-4 pt-lg-3" href="">Blog</a>
                        </li>
                        <li className="nav-item"> <a className="nav-link pb-lg-3 pe-lg-4 ps-lg-4 pt-lg-3" href="">Contact</a>
                        </li>
                        <li className="nav-item"><Link to={'/profile'} className="nav-link pb-lg-3 pe-lg-4 ps-lg-4 pt-lg-3"> {props.user?.first_name} {props.user?.last_name} </Link>
                        </li>
                        <li className="nav-item"><Link to={'/logout'} className="nav-link pb-lg-3 pe-lg-4 ps-lg-4 pt-lg-3"> Log Out </Link>
                        </li>

                        
                    </ul>
                </div>
            </div>
        </nav>

    );


};

export default Nav;