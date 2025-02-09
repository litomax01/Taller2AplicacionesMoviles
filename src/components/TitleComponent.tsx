import React from 'react';
import { Text, useWindowDimensions } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props {
    title: string;
}

export const TitleComponent = ({ title }: Props) => {
    const { height } = useWindowDimensions();
    return (
        <Text style={{ ...styles.titleHeader, height: height * 0.12 }}>
            {title}
        </Text>
    );
};