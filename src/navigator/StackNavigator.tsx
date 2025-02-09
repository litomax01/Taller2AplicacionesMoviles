import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { PRIMARY_COLOR } from '../theme/commons/constants';
import { HomeScreen } from '../screens/HomeScreen';

export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
}

const users: User[] = [
    { id: 1, name: 'Viviana Flores', email: 'vflores@gmail.com', password: '123456' },
    { id: 2, name: 'Ariel Ron', email: 'aron@gmail.com', password: '123456' },
];

const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                cardStyle: {
                    backgroundColor: PRIMARY_COLOR,
                },
            }}
        >
            <Stack.Screen
                name="Login"
                options={{ headerShown: false }}
                children={() => <LoginScreen users={users} />}
            />
            <Stack.Screen
                name="Home"
                options={{ headerShown: false }}
                component={HomeScreen}
            />
        </Stack.Navigator>
    );
};