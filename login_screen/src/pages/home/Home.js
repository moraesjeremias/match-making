import React, {Component} from 'react';
import {singOut} from "../../Auth";
import Cookie from 'js-cookie';

class Home extends Component {
    userName = Cookie.getJSON('user');
    profilePhoto = Cookie.getJSON('photoUrl');
    render() {
        return (
            <div className="container-fluid p-0">
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Car Match </a>

                    <div className="navbar-nav ml-auto">
                        <div className="navbar-brand justify-content-between" href="#">{this.userName}</div>
                        <button className="btn btn-outline-light"  onClick={() => {
                            singOut()
                        }}>Sair
                        </button>
                    </div>
                </nav>
            </div>
        );
    }
}


export default Home;