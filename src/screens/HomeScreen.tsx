import React from 'react';
import { StatusBar, View, Text } from 'react-native';
import { PRIMARY_COLOR } from '../theme/commons/constants';
import { TitleComponent } from '../components/TitleComponent';
import { BodyComponent } from '../components/BodyComponent';

export const HomeScreen = () => {
    return (
        <View>
            <StatusBar backgroundColor={PRIMARY_COLOR} />
            <TitleComponent title="Productos" />
            <BodyComponent>
                <Text>Bienvenido a la pantalla de inicio</Text>
            </BodyComponent>
        </View>
    );
};
//property 'children' is missing in tyeee {} but reuird in ty props