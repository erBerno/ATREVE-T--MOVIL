import DonationScreen from './pages/DonationScreen/DonationScreen';
import InformationScreen from './pages/InformationScreen/InformationScreen';
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
    {
        name: 'InformationScreen',
        component: InformationScreen,
    },
    {
        name: 'DonationScreen',
        component: DonationScreen,
    },
]

export default ScreenList;