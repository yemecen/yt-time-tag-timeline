import React from "react";

const Nav = () => {

    return (
        <div className="col">
            <nav className="navbar navbar-dark bg-danger rounded-start">
                <div className="container">
                    <a className="navbar-brand" href="/">.</a>
                    <img width="100" height="100"
                        src="https://play-lh.googleusercontent.com/lMoItBgdPPVDJsNOVtP26EKHePkwBg-PkuY9NOrc-fumRtTFP4XhpUNk_22syN4Datc" alt="profile img"
                        className="position-absolute top-50 end-0 translate-middle-y img-thumbnail" />
                </div>
            </nav>
        </div>

    )
}

export default Nav;