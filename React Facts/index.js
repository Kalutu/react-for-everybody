function Page(){
    return (
        <>            
            <Header/>
            <MainContent/>
            <Footer/>
        </>
    );
} 

function Header(){
    return (
        <header>
            <nav className="nav-bar">
                <img className="logo" src="./react-logo.png"/>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
}

function Footer(){
    return (
        <footer className="footer">
            <small>Copyright 2023 Kalutu Daniel. All rights reserved.</small>
        </footer>
    );
}

function MainContent(){
    return (
        <div className="main-content">
            <h1>Fun Facts about React</h1>
            <ul>
                <li>Was first relead in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k stars on Github</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprose apps, including mobile apps</li>
            </ul>
            <img className="fun" src="./fun.jpg"/>
        </div>
    );
}

ReactDOM.render(<Page/>, document.getElementById('root'));