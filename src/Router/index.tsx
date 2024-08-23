import { Route } from '@solidjs/router';
import RegisterScreen from '../components/screens/Register';
import LoginScreen from '../components/screens/Login';
import HomeScreen from '../components/screens/Home';

const AppRoutes = () => {
    return (
        <>
            <Route path='/' component={HomeScreen} />
            <Route path='/login' component={LoginScreen} />
            <Route path='/register' component={RegisterScreen} />
        </>
    );
}

export default AppRoutes;