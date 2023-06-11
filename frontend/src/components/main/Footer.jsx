import React from 'react'

const Footer = () => {
    return (
        <div style={{marginTop:'30rem'}}>
            <footer className="bg-dark text-center text-lg-start text-white">
                {/* Copyright */}
                <div
                    className="text-center p-3"
                >
                    © 2023 Copyright:&nbsp;
                    <a className="text-white" href="https://mdbootstrap.com/">
                        OffCampusInterview
                    </a>
                </div>
                {/* Copyright */}
            </footer>
        </div>
    )
}

export default Footer