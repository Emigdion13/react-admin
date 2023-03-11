import axios from 'axios';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const Logout = () => {
    const [Redirect, setRedirect] = useState(false);

    useEffect(() => {
        const logoutTimeout = setTimeout(() => {
            axios.post("admin/logout", {}).then(() => {
                setRedirect(true);
            }).catch((e) => {
                //alert(e.message);
                console.log(e);
                setRedirect(false);
            });
        }, 2000);

        return () => {
            clearTimeout(logoutTimeout);
        };
    }, []);

    return (
        <>
            <h2>Logging You Out, Goodbye!</h2>
            {Redirect && <Navigate to="/login" />}
        </>
    );
};

export default Logout;
