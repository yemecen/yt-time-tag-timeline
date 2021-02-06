import React from "react";

const Nav = () => {

    return (
        <div className="col">
            <nav className="navbar navbar-dark bg-primary rounded-start">
                <div className="container">
                    <a className="navbar-brand" href="#">.</a>
                    <img width="100" height="100"
                        src="https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/default-avatar.png"
                        className="position-absolute top-50 end-0 translate-middle-y img-thumbnail" />
                </div>
            </nav>
        </div>

    )
}

export default Nav;