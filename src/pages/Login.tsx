import axios from 'axios';
import { SyntheticEvent, useRef, useState } from 'react';
import { Navigate } from 'react-router-dom';
import './Login.css';

const Login = () => {

    const originalClass = 'btn d-block w-100 btn-primary fw-bold pb-2 ps-3 pe-3 pt-2';
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const [btnSubmitClass, setBtnSubmitClass] = useState(originalClass);
    const [redirect, setRedirect] = useState(false);


    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();
        setBtnSubmitClass((currentVal) =>  {
            return `${currentVal} disabled`
        });

        try {
            await axios.post("admin/login", {

                email : emailRef.current?.value ,
                password : passwordRef.current?.value ,

            });

            setRedirect(true);
        } catch (e) {

            console.log(e);
            //alert(e);
        }


        setBtnSubmitClass(originalClass);
    };

    if (redirect) {
        return <Navigate to="/" />
    }

    return (

        <>
            <section className="pb-5 pt-5">
                <div className="container pb-5 pt-5">
                    <div className="col-md-9 col-xl-8 ms-auto me-auto">
                        <div className="bg-light p-4 p-lg-5">
                            <h2 className="mb-1 text-dark">Sign In</h2>
                            <p className="mb-4">Login to your own System</p>
                            <form onSubmit={submit}>
                                <div className="mb-3">
                                    <div className="input-group"><span className="bg-light input-group-text" id="addon-wrapping1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
                                        <g>
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                            <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 4.238l-7.928 7.1L4 7.216V19h16V7.238zM4.511 5l7.55 6.662L19.502 5H4.511z"></path>
                                        </g>
                                    </svg></span>
                                        <input ref={emailRef} type="email" className="form-control" placeholder="Email" aria-label="User Email" aria-describedby="addon-wrapping1"  />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <div className="input-group"><span className="bg-light input-group-text" id="addon-wrapping2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
                                        <g>
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                            <path d="M10.758 11.828l7.849-7.849 1.414 1.414-1.414 1.415 2.474 2.474-1.414 1.415-2.475-2.475-1.414 1.414 2.121 2.121-1.414 1.415-2.121-2.122-2.192 2.192a5.002 5.002 0 0 1-7.708 6.294 5 5 0 0 1 6.294-7.708zm-.637 6.293A3 3 0 1 0 5.88 13.88a3 3 0 0 0 4.242 4.242z"></path>
                                        </g>
                                    </svg></span>
                                        <input ref={passwordRef} type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="addon-wrapping2"  />
                                    </div>
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1" >Remember me</label>
                                </div>
                                <button type="submit" className={btnSubmitClass}>Sign In</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>


    );



};

export default Login;