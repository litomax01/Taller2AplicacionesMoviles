import React, { ReactNode } from 'react';
import { useWindowDimensions, View } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props {
    children: ReactNode;
}

export const BodyComponent = ({ children }: Props) => {
    const { height } = useWindowDimensions();
    return (
        <View style={{ ...styles.bodyContainer, height: height * 0.88 }}>
            {children}
        </View>
    );
};