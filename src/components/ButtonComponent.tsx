import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props {
    title: string;
    handleSendInfo: () => void;
}

export const ButtonComponent = ({ title, handleSendInfo }: Props) => {
    return (
        <TouchableOpacity style={styles.buttonForm} onPress={handleSendInfo}>
            <Text style={styles.buttonFormText}>{title}</Text>
        </TouchableOpacity>
    );
};