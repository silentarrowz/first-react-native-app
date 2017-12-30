import React from 'react';
import { StyleSheet, Text, View, Image,Button, Alert } from 'react-native';

class Emo extends React.Component{
  render(){
    let emot={
      uri:'https://i.pinimg.com/736x/bc/83/b8/bc83b86d1bc97104c84a4d8ffe2d1f4b--funny-smiley-symbols-emoticons.jpg'
    };
    return(
      <View style={styles.container} >
<Text>Didnt I tell you not to click the button</Text>
<Image source={emot} style={{width:100,height:100}} />
 <Button
        onPress={this.props.pressHandler}
        title="Go Back Now And Dont Do It Again!!"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
</View>);
  }

}

class General extends React.Component{
  render(){
     let pic = {
      uri:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return(
 <View style={styles.container}>

        <Text>DANGER!!</Text>
        <Image source={pic} style={{width:193,height:110}}/>
        <Button
        onPress={this.props.pressHandler}
        title="WARNING : Dont Click This Button!!"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
      </View>
      );
  }
}


export default class App extends React.Component {
constructor(){
  super();
  this.state={
    clicked:false
  };
 this.pressHandler = this.pressHandler.bind(this); 
}

pressHandler(){
  this.setState({
    clicked:!this.state.clicked
  })
}

  render() {
   
    const isClicked = this.state.clicked;
    return isClicked ? <Emo pressHandler={this.pressHandler} /> : <General pressHandler={this.pressHandler} />
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle:'solid',
    borderColor:'black',
    borderWidth:2,
  },
});
