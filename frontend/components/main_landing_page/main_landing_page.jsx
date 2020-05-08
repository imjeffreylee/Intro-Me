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
                    <h1 className="landing-h1">Intro-Me</h1>
                    <a href="#">ACCOUNT</a>
                </header>
                <div className="content-container">
                    <aside className="friend-list">
                        <h3>Friends</h3>
                        <ul className="friends">
                            <li><div className="friendlist-img-container"><img className="friendlist-img" src={friendlist_image} alt="temp" /></div><span>Robert Downey Jr.</span></li>
                            <li><div className="friendlist-img-container"><img className="friendlist-img" src={friendlist_image} alt="temp" /></div><span>Robert Downey Jr.</span></li>
                            <li><div className="friendlist-img-container"><img className="friendlist-img" src={friendlist_image} alt="temp" /></div><span>Robert Downey Jr.</span></li>
                            <li><div className="friendlist-img-container"><img className="friendlist-img" src={friendlist_image} alt="temp" /></div><span>Robert Downey Jr.</span></li>
                            <li><div className="friendlist-img-container"><img className="friendlist-img" src={friendlist_image} alt="temp" /></div><span>Robert Downey Jr.</span></li>
                        </ul>
                    </aside>
                    <section className="message-board">
                        <h3>Messages</h3>
                        <div className="msg-buttons">
                            <a href="#">COMMENT</a>
                            <a href="#">POST A JOB</a>
                        </div>
                        <ul className="msg">
                            <li className="msg-block">
                                <div className="msg-info">
                                    <div className="user-info">
                                        <div className="friendlist-img-container"><img className="friendlist-img" src={friendlist_image} alt="temp" /></div>
                                        <p>Robert Downey Jr.</p>
                                    </div>
                                    <div className="posted-time">5:30 PM, May 7, 2020</div>
                                </div>
                                <p className="msg-content">Lorem ipsum dolor sit amet.</p>
                                <div className="msg-reply"><a href="#">REPLY</a></div>
                            </li>
                            <li className="msg-block">
                                <div className="msg-info">
                                    <div className="user-info">
                                        <div className="friendlist-img-container"><img className="friendlist-img" src={friendlist_image} alt="temp" /></div>
                                        <p>Robert Downey Jr.</p>
                                    </div>
                                    <div className="posted-time">5:30 PM, May 7, 2020</div>
                                </div>
                                <p className="msg-content">Lorem ipsum dolor sit amet.</p>
                                <div className="msg-reply"><a href="#">REPLY</a></div>
                            </li>
                        </ul>
                    </section>
                    <aside className="job-list">
                        <h3>Jobs</h3>
                        <ul className="jobs">
                            <li><div className="joblist-logo-container"><img className="joblist-logo" src={amz_logo} alt="temp" /></div><span>Software Engineer</span></li>
                            <li><div className="joblist-logo-container"><img className="joblist-logo" src={apple_logo} alt="temp" /></div><span>Software Engineer</span></li>
                            <li><div className="joblist-logo-container"><img className="joblist-logo" src={fb_logo} alt="temp" /></div><span>Software Engineer</span></li>
                            <li><div className="joblist-logo-container"><img className="joblist-logo" src={google_logo} alt="temp" /></div><span>Software Engineer</span></li>
                            <li><div className="joblist-logo-container"><img className="joblist-logo" src={nf_logo} alt="temp" /></div><span>Software Engineer</span></li>
                        </ul>
                    </aside>
                </div>
            </div>
        )
    }
}
export default MainLandingPage;