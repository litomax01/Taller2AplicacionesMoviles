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
import { User } from '../navigator/StackNavigator';

interface Props {
    users: User[];
}

interface LoginForm {
    email: string;
    password: string;
}

export const LoginScreen = ({ users }: Props) => {
    const [loginForm, setLoginForm] = useState<LoginForm>({
        email: '',
        password: '',
    });

    const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);
    const navigation = useNavigation();

    const handleChange = (name: string, value: string): void => {
        setLoginForm({ ...loginForm, [name]: value });
        console.log(`Campo: ${name}, Valor: ${value}`);
    };

    const verifyUser = (): User | undefined => {
        return users.find(
            (user) =>
                user.email === loginForm.email && user.password === loginForm.password
        );
    };

    const handleLogin = (): void => {
        if (loginForm.email === '' || loginForm.password === '') {
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
                <Text style={styles.textDescription}>
                    Realiza tus compras de manera rápida y segura
                </Text>
                <View style={styles.formContainer}>
                    <InputComponent
                        placeholder="Correo"
                        keyboardType="email-address"
                        handleChange={handleChange}
                        name="email"
                    />
                    <InputComponent
                        placeholder="Contraseña"
                        handleChange={handleChange}
                        name="password"
                        isPassword={hiddenPassword}
                    />
                    <Icon
                        name={hiddenPassword ? 'visibility' : 'visibility-off'}
                        size={20}
                        color={PRIMARY_COLOR}
                        style={styles.iconPassword}
                        onPress={() => setHiddenPassword(!hiddenPassword)}
                    />
                </View>
                <ButtonComponent title="Iniciar" handleSendInfo={handleLogin} />
            </BodyComponent>
        </View>
    );
};