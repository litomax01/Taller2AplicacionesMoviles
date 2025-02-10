import React, { createContext, useState, useContext, ReactNode } from 'react';

export type User = {
    id: number;
    name: string;
    email: string;
    password: string;
};

type UserContextType = {
    users: User[];
    addUser: (user: User) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
    const [users, setUsers] = useState<User[]>([
        { id: 1, name: 'Viviana Flores', email: 'vflores@gmail.com', password: '123456' },
        { id: 2, name: 'Ariel Ron', email: 'aron@gmail.com', password: '123456' }
    ]);

    const addUser = (newUser: User) => {
        setUsers(prevUsers => [...prevUsers, newUser]);
    };

    return (
        <UserContext.Provider value={{ users, addUser }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUser debe usarse dentro de un UserProvider");
    }
    return context;
}
