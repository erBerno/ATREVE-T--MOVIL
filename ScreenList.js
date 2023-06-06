import LoginScreen from './pages/LoginScreen/LoginScreen';
import RegisterScreen from './pages/RegisterScreen/RegisterScreen';
import RequestScren from './pages/RequestScreen/RequestScreen';


const ScreenList = [
    {
        name: 'LoginScreen',
        component: LoginScreen,
    },
    {
        name: 'RegisterScreen',
        component: RegisterScreen,
    },
    {
        name: 'RequestScreen',
        component: RequestScren,
    },
]

export default ScreenList;