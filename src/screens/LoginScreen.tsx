import React, { useState } from 'react';
import { Alert, StatusBar, Text, View } from 'react-native';
import { TitleComponent } from '../components/TitleComponent';
import { PRIMARY_COLOR } from '../theme/commons/constants';
import { BodyComponent } from '../components/BodyComponent';
import { styles } from '../theme/appTheme';
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { CommonActions, useNavigation } from '@react-navigation/native';

const usersDB = [
    { id: 1, name: 'Viviana Flores', email: 'vflores@gmail.com', password: '123456' },
    { id: 2, name: 'Ariel Ron', email: 'aron@gmail.com', password: '123456' },
];

const LoginScreen = () => {
    const [loginForm, setLoginForm] = useState({ email: '', password: '' });
    const [hiddenPassword, setHiddenPassword] = useState(true);
    const navigation = useNavigation();

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

        navigation.dispatch(CommonActions.navigate({ name: 'Home' }));
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
                    <InputComponent placeholder="Contraseña" handleChange={handleChange} name="password" isPassword={hiddenPassword} />
                    <Icon name={hiddenPassword ? 'visibility' : 'visibility-off'} size={20} color={PRIMARY_COLOR} style={styles.iconPassword} onPress={() => setHiddenPassword(!hiddenPassword)} />
                </View>
                <ButtonComponent title="Iniciar" handleSendInfo={handleLogin} />
            </BodyComponent>
        </View>
    );
};

export default LoginScreen;
