import './App.css';
import HeroSection from './components/Hero';
import Navigation from './components/Navigation';
const App = () => {     
// Its a component not a func. starts with capital letter nd also contains a return statement
    return( 
    <div>
        <Navigation/>
        <HeroSection/>
    </div>
    );
}

export default App;