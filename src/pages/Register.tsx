import { Component, SyntheticEvent } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

interface Props {
    // Define props here
}

interface State {
    redirect: boolean;
}

class Register extends Component<Props, State> {

    firstNameRef = "";
    lastNameRef = "";
    emailRef = "";
    passwordRef = "";
    passwordConfirmRef = "";

    constructor(props: Props) {
        super(props);
        this.state = {
            redirect: false
        };
    }

    submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        try {
            await axios.post('admin/register', {
                first_name: this.firstNameRef,
                last_name: this.lastNameRef,
                email: this.emailRef,
                password: this.passwordRef,
                password_confirmation: this.passwordConfirmRef
            });

            this.setState({
                redirect: true
            });
        } catch(ex)
        {
            console.log(ex);
        }

    };

    render() {

        if (this.state.redirect) {
            return <Navigate to="/Login" />
        }

        return (
            <section className="bg-light pb-5 pt-5">
                <div className="container pb-5 pt-5">
                    <div className="bg-white p-4 p-lg-5">
                        <h2 className="mb-4">Register</h2>
                        <form onSubmit={this.submit}>
                            <div className="row">
                                <div className="mb-3 col-md-6">
                                    <label className="form-label">Name</label>
                                    <input type="text" className="form-control rounded-0" placeholder="Enter name..." onChange={(e) => this.firstNameRef = e.target.value }   />
                                </div>
                                <div className="mb-3 col-md-6">
                                    <label className="form-label">Email</label>
                                    <input type="email" className="form-control rounded-0" placeholder="Enter email..." onChange={(e) => this.emailRef = e.target.value } />
                                </div>
                            </div>
                            <div className="row">
                                <div className="mb-3 col-md-6">
                                    <label className="form-label">Last Name</label>
                                    <input type="text" className="form-control rounded-0" placeholder="Enter last name..." onChange={(e) => this.lastNameRef = e.target.value } />
                                </div>
                                <div className="mb-3 col-md-6">
                                    <label className="form-label">Password</label>
                                    <input type="password" className="form-control rounded-0" placeholder="Enter password..." onChange={(e) => this.passwordRef = e.target.value } />
                                </div>
                            </div>
                            <div className="row">
                                <div className="mb-3 col-md-12">
                                    <label className="form-label">Password Confirm</label>
                                    <input type="password" className="form-control rounded-0" placeholder="Confirm password..." onChange={(e) => this.passwordConfirmRef = e.target.value } />
                                </div>
                            </div>
                            <div className="text-end">
                                <button type="submit" className="btn btn-primary ps-4 pe-4  text-uppercase" onClick={(e) => { this.submit(e) }}><span className="align-middle">Submit</span>
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
}




export default Register;