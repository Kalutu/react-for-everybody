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
                <nav>
                    <img width="100px" src="./react-logo.png"/>
                </nav>
        </header>
    );
}

function Footer(){
    return (
        <footer>
            <small>Copyright 2023 Kalutu Daniel. All rights reserved.</small>
        </footer>
    );
}

function MainContent(){
    return (
        <>
            <h1>Fun Facts about React</h1>
            <ul>
                <li>Was first relead in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k stars on Github</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprose apps, including mobile apps</li>
            </ul>
        </>
    );
}

ReactDOM.render(<Page/>, document.getElementById('root'));