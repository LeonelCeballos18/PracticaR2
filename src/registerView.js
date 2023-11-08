import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert, Image} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class loginView extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: "",
      password: "",
      user: "",
      confirmPassword: "",
    }
  }

  validateInput = () => {
    const { email, password, user, confirmPassword } = this.state;
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    const passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;

    if (!email || !password || !user || !confirmPassword) {
      Alert.alert("Aviso", "Asegurate de rellenar todos los campos.");
      return false;
    }

    if (!emailRegex.test(email)) {
      Alert.alert("Aviso", "Asegurate de ingresar un correo electrónico valido.");
      return false;
    }

    if (!passwordRegex.test(password)) {
      Alert.alert("Aviso", "Asegurate de ingresar una contraseña valida.");
      setTimeout(() => {
        Alert.alert("Aviso", "La contraseña debe de contener al menos 8 carácteres, mayúsculas, minúsculas y al menos 1 carácter especial.");
      }, 1000);
      return false;
    }

    if (password != confirmPassword){
      Alert.alert("Aviso", "Las contraseñas ingresadas no coinciden.");
      return false;
    }

    return true;
  };

  register = () =>{
    Actions.register()
  }

  handleSubmit = () => {
    if (this.validateInput()) {
      Alert.alert("Bienvenido", " Has iniciado sesión.");
    }
  };
  

  render(){
    return (
      <View style={styles.container}>
        <Text>Correo</Text>
        <TextInput
          style={styles.textBox}
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
          placeholder="juanito@gmail.com"
          keyboardType='email-address'
        />
        <Text>Nombre de usuario</Text>
        <TextInput
          style={styles.textBox}
          onChangeText={(user) => this.setState({user})}
          value={this.state.user}
          placeholder="Usuario"
        />
        <Text>Contraseña</Text>
        <TextInput
          style={styles.textBox}
          secureTextEntry={true}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
          placeholder="contraseña"
        />
        <Text>Confirmar contraseña</Text>
        <TextInput
          style={styles.textBox}
          secureTextEntry={true}
          onChangeText={(confirmPassword) => this.setState({confirmPassword})}
          value={this.state.confirmPassword}
          placeholder="confirmar contraseña"
        />
        <Button
          style={styles.button}
          onPress={(this.handleSubmit)}
          title="Registrarme"
          accessibilityLabel="Learn more about this purple button"
        />
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagen: {
    width: 250,
    height: 250,
    marginBottom: 30,
  },
  textBox: {
    borderColor: '#1A1A1A',
    borderRadius: 5,
    borderWidth: 1,
    padding: 5,
    width: 200,
  },
  button: {
    padding: 10,
    backgroundColor: '#239B56',
    borderRadius: 5,
  },
  errorText: {
    color: '#A93226',
    marginBottom: 10,
  }
});
