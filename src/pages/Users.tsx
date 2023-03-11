import axios from 'axios';
import { useEffect, useState } from 'react';
import { Layout } from '../components';
import { User } from '../models';
import './users.css';

const Users = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {


        axios.get('users/ambassadors').then((data) => { setUsers(data.data) }).catch((err) => {
            //alert(err.message);
        });

    }, []);

    return (
        <Layout>
            <div className="myTableBody">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Last Name</th>
                            <th>Action</th>
                            <th>Empty</th>
                        </tr>
                    </thead>
                    <tbody>

                        {users.map((user) => {


                            return (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.first_name}</td>
                                    <td>{user.last_name}</td>
                                </tr>
                            );

                        })}
                    </tbody>
                </table>
            </div>

        </Layout >


    );


};

export default Users;