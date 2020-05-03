import React from 'react';
import { Link } from 'react-router-dom';

class MainLandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        return (
            <div className="landing-page-container">
                <header className="landing-header">
                    <h1>Intro-Me</h1>
                    <a href="#">Account</a>
                </header>
                <div className="content-container">
                    <aside className="friend-list"></aside>
                    <section className="message-board"></section>
                    <aside className="job-list"></aside>
                </div>
            </div>
        )
    }
}
export default MainLandingPage;