import { TextInput } from "react-native-gesture-handler";
import React, { useState } from "react";
import { StatusBar, TouchableOpacity } from "react-native";
import { Button } from "react-native";
import appFirebase from '../accesoFireBase.js';
//import { addDoc, collection, getFirestore } from "firebase/firestore";

//const db = getFirestore(appFirebase)


export default function RegisterApp(props){


    

const navigation = useNavigation();

const iniciEstado = {
    nombreCompleto: '',
    email : '',
    clave: '',
}

const [estado, setEstado] = useState(iniciEstado)

const HandleChangeText = (value, name) => {

    setEstado({...estado, [name]: value})

}

/*
const RegistrarUsuario = () => {
    console.log(estado)
}*/


const RegistarUsuario = async()=>{
    //console.log(estado)
    try {
      await addDoc(collection(db, 'usuarios'),{...estado})

      Alert.alert('Alerta', 'El usuario se registró con éxito')

      props.navigation.navigate('LoginApp')
     
    } catch  {
      console.error(error)
    }
  }


return {

}


}