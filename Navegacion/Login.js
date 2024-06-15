import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View, Pressable, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useNavigation } from "@react-navigation/native";

export default function Login() {
    const navigation = useNavigation();

    return (

        <View style={styles.container}>
            <Image style={styles.img}
                source={require("../Navegacion/imgMulti.png")} />

            <Text style={styles.txtTitulo}>Welcome</Text>
            <Text style={styles.txtSubtitulo}>Iniciar sesión</Text>
            <TextInput placeholder='multimedios@gmail.com' style={styles.txtInput}></TextInput>
            <TextInput placeholder='123' secureTextEntry={true} style={styles.txtInput}></TextInput>

            <TouchableOpacity
                onPress={() => navigation.navigate("Recuperar1")}
            >
                <Text style={styles.txtPass}>¿Olvidaste la contraseña?</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <LinearGradient
                    colors={['#00C1BB', '#005B58']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.btnLogin}
                >
                    <Text style={styles.txtLogin} >Iniciar Sesion</Text>
                </LinearGradient>
            </TouchableOpacity>

            <Text style={styles.txtCuenta}>¿No tenés una cuenta?</Text>
            <TouchableOpacity 
                onPress={() => navigation.navigate("RecuperarCuenta")}
            >
                <Text style={styles.txtRegistrarse}>Registrate</Text>
            </TouchableOpacity>

            <StatusBar style="auto" />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        justifyContent:"center",
        alignItems:"center",
        flex: 1,
    },

    containerSvg: {
        alignItems: 'center',
    },

    txtTitulo: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#34434D',
        textAlign: 'center',
        paddingLeft: 30,

    },
    txtSubtitulo: {
        fontSize: 20,
        fontWeight: 'light',
        color: 'gray',
        textAlign: 'left',
        marginTop: 20,
        marginRight: 200,
        width: "auto",
    },

    txtInput: {
        width: '90%',
        height: 50,
        borderRadius: 30,
        paddingLeft: 30,
        marginTop: 20,
        marginLeft: "auto",
        marginRight: "auto",
        borderColor: 'gray',
        color: '#000000',
        backgroundColor: '#F5F5F5',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 4,
        shadowRadius: 10,
        elevation: 10,
        alignItems:"center",
    },

    txtPass: {
        textAlign: 'right',
        paddingTop: 20,
        marginLeft: 188,
        color: '#00C1BB',
        fontSize: 15,
        display: "flex",
    },

    btnLogin: {
        borderRadius: 30,
        width: 219,
        height: 53,
        marginTop: 35,
        paddingTop: 10,
        justifyContent:"center",
        alignItems:"center",
        marginLeft: "auto",
        marginRight: "auto",
    },

    txtLogin: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginBottom: 15,
    },

    txtCuenta: {
        textAlign: 'center',
        paddingTop: 10,
        color: '#00C1BB',
        fontSize: 15,
        alignItems: 'center',
    },

    txtRegistrarse: {
        textAlign: 'center',
        color: '#00C1BB',
        fontSize: 15,
        alignItems: 'center',
        fontWeight: 'bold',
    },

    img: {
        width: "100%",
        marginBottom: 20,
    }
});