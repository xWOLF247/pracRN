import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View, Pressable, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


import { useNavigation } from "@react-navigation/native";

export default function RecuperarCuenta() {
    const navigation = useNavigation();

    return (

        <View style={styles.container}>
            <Image style= {styles.img}
            source={require("../Navegacion/imgMulti.png")}/>
           
            <Text style={styles.txtTitulo}>Recuperar Cuenta</Text>
            <TextInput placeholder='Contraseña nueva' secureTextEntry={true} style={styles.txtInput}></TextInput>
            <TextInput placeholder='Confirmar contraseña' secureTextEntry={true} style={styles.txtInput}></TextInput>

            <TouchableOpacity 
                onPress={() => navigation.navigate("Login")}
            >
                <Text style={styles.txtPass}>Iniciar Sesión</Text>
            </TouchableOpacity>

            <TouchableOpacity 
             onPress={() => navigation.navigate("Login")}>
                <LinearGradient
                    colors={['#00C1BB', '#005B58']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.btnLogin}
                >
                    <Text style={styles.txtLogin}>Restablecer</Text>
                </LinearGradient>
            </TouchableOpacity>

            <Text style={styles.txtCuenta}>¿No tenés una cuenta?</Text>
            <TouchableOpacity 
                onPress={() => navigation.navigate(" ")}
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
        textAlign: 'left',
        marginRight: 170,
        marginBottom: 0,
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
        marginLeft: 300,
        color: '#00C1BB',
        fontSize: 15,
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
        marginBottom: 50,
    },

    img: {
        width: "100%",
        marginBottom: 20,
    }
});