import { Outlet, useLocation, useNavigation } from 'react-router';
import '../App';
import Footer from '../footer/Footer';
import Header from '../header/Header';

const Home = () => {

    const navigation=useNavigation()
    const location =useLocation()

    console.log(location)
    return (
        <div>
                <h2>This is Home Component</h2>
                <Header/>
                {navigation.state==="loading"&& "Loading..."}
                <Outlet/>
                <Footer/>
        </div>
    );
};

export default Home;