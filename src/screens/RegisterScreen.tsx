import React, { useState } from 'react';
import { Alert, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { PRIMARY_COLOR } from '../theme/commons/constants';
import { TitleComponent } from '../components/TitleComponent';
import { BodyComponent } from '../components/BodyComponent';
import { styles } from '../theme/appTheme';
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { User } from '../navigator/StackNavigator';

interface Props {
    users: User[];
    addUser: (user: User) => void;
}

interface RegisterForm {
    name: string;
    email: string;
    password: string;
}

export const RegisterScreen = ({ users, addUser }: Props) => {
    const [registerForm, setRegisterForm] = useState<RegisterForm>({
        name: '',
        email: '',
        password: '',
    });

    const navigation = useNavigation();

    const handleChange = (name: string, value: string): void => {
        setRegisterForm({ ...registerForm, [name]: value });
    };

    const verifyUser = (): User | undefined => {
        return users.find((user) => user.email === registerForm.email);
    };

    const getIdNewUser = (): number => {
        const getIdUser = users.map((user) => user.id);
        return Math.max(...getIdUser) + 1;
    };

    const handleRegister = () => {
        if (
            registerForm.name === '' ||
            registerForm.email === '' ||
            registerForm.password === ''
        ) {
            Alert.alert('Error', 'Todos los campos son obligatorios');
            return;
        }

        if (verifyUser()) {
            Alert.alert('Error', 'El correo ya existe');
            return;
        }

        const newUser: User = {
            id: getIdNewUser(),
            name: registerForm.name,
            email: registerForm.email,
            password: registerForm.password,
        };

        addUser(newUser);
        Alert.alert('Registro', 'Usuario registrado con éxito');
        navigation.goBack();
    };

    return (
        <View>
            <StatusBar backgroundColor={PRIMARY_COLOR} />
            <TitleComponent title="Regístrate" />
            <BodyComponent>
                <Text style={styles.titlePrincipal}>Estás muy cerca</Text>
                <Text style={styles.textDescription}>
                    Realiza tus compras de manera rápida y segura
                </Text>
                <View style={styles.formContainer}>
                    <InputComponent
                        placeholder="Nombre"
                        handleChange={handleChange}
                        name="name"
                    />
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
                    />
                </View>
                <ButtonComponent title="Registrar" handleSendInfo={handleRegister} />
                <TouchableOpacity
                    onPress={() =>
                        navigation.dispatch(CommonActions.navigate({ name: 'Login' }))
                    }
                >
                    <Text style={styles.textRedirect}>
                        Ya tienes una cuenta? Iniciar Sesión ahora
                    </Text>
                </TouchableOpacity>
            </BodyComponent>
        </View>
    );
};
