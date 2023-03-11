import { SyntheticEvent, useEffect, useRef, useState } from "react";
import { User } from "../models";
import { addUser } from "./store/feautures/userSlice";
import { useAppDispatch } from "./store/store";


function RedusTestAdd() {
    const dispatch = useAppDispatch();

    const userName_ref = useRef<HTMLInputElement>(null);
    const lastName_ref = useRef<HTMLInputElement>(null);
    const email_ref = useRef<HTMLInputElement>(null);
    const id_ref = useRef<HTMLInputElement>(null);


    const mySubmit = async (e: SyntheticEvent) => {
        e.preventDefault();

        const user: User = { id: +(id_ref.current?.value ?? 0), 
            first_name: userName_ref.current?.value ?? "", 
            last_name: lastName_ref.current?.value ?? "", 
            email: email_ref.current?.value ?? "" };
        dispatch(addUser(user));

    };


    return (
        <section className="bg-light pb-5 pt-5" data-pg-collapsed>
            <div className="container pb-5 pt-5">
                <div className="bg-white p-4 p-lg-5">
                    <h2 className="mb-4"></h2>
                    <form onSubmit={mySubmit}>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="inputId">Id</label>
                            <input type="number" className="form-control rounded-0" id="inputId" ref={id_ref} placeholder="What Id Should it has" />
                        </div>
                        <div className="row">
                            <div className="mb-3 col-md-6">
                                <label className="form-label" htmlFor="inputName">Name</label>
                                <input type="text" className="form-control rounded-0" id="inputName" ref={userName_ref} placeholder="Enter name..." />
                            </div>
                            <div className="mb-3 col-md-6">
                                <label className="form-label" htmlFor="lastName">LastName</label>
                                <input type="text" className="form-control rounded-0" id="lastName" ref={lastName_ref} placeholder="Enter Last Name..." />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="inputEmail">Email</label>
                            <input type="email" className="form-control rounded-0" id="inputEmail" ref={email_ref}  placeholder="Enter Email.." />
                        </div>
                        <div className="text-end">
                            <button type="submit" className="btn btn-primary ps-4 pe-4 rounded-0 rounded-pill text-uppercase">
                                <span className="align-middle">Submit</span>
                                <svg viewBox="0 0 24 24" fill="currentColor" height="16" width="16" className="ms-1">
                                    <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default RedusTestAdd;
