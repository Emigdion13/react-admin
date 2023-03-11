import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { User } from '../models';
import Menu from './Menu';
import Nav from './Nav';

function Layout(props: any) {
    const [redirect, setRedirect] = useState(false);
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {

        (async () => {
            try {
                const { data } = await axios.get('admin/user');
                setUser(data);
            } catch (e) {
                setRedirect(true);
            }



        })();

    }, []);

    if (redirect) {
        return <Navigate to="/Login" />
    }


    return (
        <>
            <Nav user = {user} />
            <div className="container-fluid">
                <div className="row">
                    <Menu />
                    <main className="col-lg-12 col-md-9 ms-sm-auto px-md-4">
                        <h2>Section title</h2>
                        <div className="table-responsive">
                            {props.children}
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}

export default Layout;
