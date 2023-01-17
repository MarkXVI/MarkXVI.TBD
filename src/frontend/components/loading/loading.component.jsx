import '../../stylesheets/loading.stylesheet.css';
import logo from './../../assets/MarkXVI_LOGO.svg';

const Loading = () => {
    return(
        <header className="App-header">
            <img src={logo} className="App-logo"/>
            <p>Loading...</p>
        </header>
    );
};

export default Loading;