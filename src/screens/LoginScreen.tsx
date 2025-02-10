import React, { useState } from 'react';
import { Alert, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { PRIMARY_COLOR } from '../theme/commons/constants';
import { TitleComponent } from '../components/TitleComponent';
import { BodyComponent } from '../components/BodyComponent';
import { styles } from '../theme/appTheme';
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, User } from '../navigator/StackNavigator';

type NavigationProps = StackNavigationProp<RootStackParamList, 'Login'>;

interface Props {
    users: User[];
    navigation: NavigationProps;
}

const LoginScreen: React.FC<Props> = ({ users, navigation }) => {
    const [loginForm, setLoginForm] = useState({ email: '', password: '' });

    const handleChange = (name: string, value: string) => {
        setLoginForm({ ...loginForm, [name]: value });
    };

    const verifyUser = () => {
        return users.find(user => user.email === loginForm.email && user.password === loginForm.password);
    };

    const handleLogin = () => {
        if (!loginForm.email || !loginForm.password) {
            Alert.alert('Error', 'Todos los campos son obligatorios');
            return;
        }

        if (!verifyUser()) {
            Alert.alert('Error', 'Usuario y/o contraseña incorrecta');
            return;
        }

        navigation.navigate('Home');
    };

    return (
        <View>
            <StatusBar backgroundColor={PRIMARY_COLOR} />
            <TitleComponent title="Iniciar Sesión" />
            <BodyComponent>
                <Text style={styles.titlePrincipal}>Bienvenido de nuevo</Text>
                <Text style={styles.textDescription}>Realiza tus compras de manera rápida y segura</Text>
                <View style={styles.formContainer}>
                    <InputComponent placeholder="Correo" keyboardType="email-address" handleChange={handleChange} name="email" />
                    <InputComponent placeholder="Contraseña" handleChange={handleChange} name="password" isPassword />
                </View>
                <ButtonComponent title="Iniciar" handleSendInfo={handleLogin} />
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.textRedirect}>¿No tienes cuenta? Regístrate aquí</Text>
                </TouchableOpacity>
            </BodyComponent>
        </View>
    );
};

export default LoginScreen;
