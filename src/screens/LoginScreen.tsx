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
import { RootStackParamList } from '../navigator/StackNavigator';

// ✅ Agregamos tipado correcto para navegación
type NavigationProps = StackNavigationProp<RootStackParamList, 'Login'>;

const usersDB = [
    { id: 1, name: 'Viviana Flores', email: 'vflores@gmail.com', password: '123456' },
    { id: 2, name: 'Ariel Ron', email: 'aron@gmail.com', password: '123456' },
];

const LoginScreen = () => {
    const [loginForm, setLoginForm] = useState({ email: '', password: '' });
    const [hiddenPassword, setHiddenPassword] = useState(true);
    const navigation = useNavigation<NavigationProps>(); // ✅ Tipado corregido

    const handleChange = (name: string, value: string) => {
        setLoginForm({ ...loginForm, [name]: value });
    };

    const verifyUser = () => {
        return usersDB.find((user) => user.email === loginForm.email && user.password === loginForm.password);
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

        navigation.navigate('Home'); // ✅ Ahora `Home` está bien tipado
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
                {/* ✅ Botón corregido para navegar a "Register" */}
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.textRedirect}>¿No tienes cuenta? Regístrate aquí</Text>
                </TouchableOpacity>
            </BodyComponent>
        </View>
    );
};

export default LoginScreen;
