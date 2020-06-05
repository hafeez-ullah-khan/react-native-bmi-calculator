import React from 'react'
import { StyleSheet, View, Text,Button ,TouchableOpacity} from 'react-native' 

function DetailScreen(props) {
  const { navigation } = props 
  const { bmiValue } = props.route.params;

  function ResultText(props) {
    if(props.bmiValue<18)
     return <Text style={{fontSize:40,color:'#DE0F0F',fontWeight:'700'}}>Underweight</Text>;
    else if(props.bmiValue > 18.5 && props.bmiValue <= 24.9)
     return <Text style={{fontSize:40,color:'#44B569',fontWeight:'700'}}>Normal</Text>;
    else
     return <Text style={{fontSize:40,color:'#DE0F0F',fontWeight:'700'}}>Overweight</Text>;
  }
  function ResultTextDesc(props) {
    if(props.bmiValue<18)
     return <Text style={styles.mutedText}>Your Are Underweight Body. Get Proper Diet to be healthy!</Text>;
    else if(props.bmiValue > 18.5 && props.bmiValue <= 24.9)
     return <Text style={styles.mutedText}>You Have Normal Body Weight. Good Job!</Text>;
    else
     return <Text style={styles.mutedText}>You Have Overweight Body. Do Some WorkOut!</Text>;
  }
  return (
    <View style={styles.container}>
      <View style={{flex:8,padding:20,}}>
        <View style={{flex:2,justifyContent:"center",alignItems:"flex-start"}}>
          <Text style={styles.headingText}>Your Result</Text>
        </View>
        <View style={styles.resultContainer}>
            <View style={{flex:2, justifyContent:"center",alignItems:"center"}}>
              <ResultText bmiValue = {bmiValue}/>
            <Text style={styles.headingValueText}>{bmiValue}</Text>
            </View>
            <View style={{flex:1, justifyContent:"center",alignItems:"center"}}>
              <Text style={styles.mutedText}>Normal BMI Range: </Text>
              <Text style={styles.normalText}>18.5 - 25 kg/m2</Text> 
            </View>
            <View style={{flex:1, justifyContent:"center",alignItems:"center"}}> 
            <ResultTextDesc bmiValue = {bmiValue}/>
              </View>
            <View style={{flex:1, justifyContent:'center',alignItems:"center"}}>
                 <TouchableOpacity style={{height:50,width:200, backgroundColor:"#666",justifyContent:'center',alignItems:"center"}}>
                      <Text style={styles.normalText}>Save Result</Text>
                 </TouchableOpacity>
            </View>
        </View>
  
    </View>

 
      <TouchableOpacity  style={styles.goBackButton} onPress={() => navigation.goBack()}>
            <View style={styles.goBackButton}>
               <Text style={styles.goBackButtonText}>Re-Calculate Your BMI</Text>
          
        </View>
        </TouchableOpacity> 

</View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    color:'#ffffff',
    backgroundColor: '#1D1442',
    justifyContent:"center",
  },
  mutedText:{
    fontSize:20,
    fontWeight:'800', 
    color:'whitesmoke', 
    textAlign:'center',
    width:250
  },
  normalText:{
    fontSize:20,
    fontWeight:'800', 
    color:'#ffffff',
    fontFamily:'Kailasa-Bold'
  },
  headingText:{
    fontSize:35,
    fontWeight:'800',
    marginTop:15,
    color:'#ffffff',
    fontFamily:'Kailasa-Bold'
  },
  headingValueText:{

    fontSize:100,
    fontWeight:'800',
    marginTop:15,
    color:'#ffffff',
    justifyContent:"center",
    fontFamily:'Kailasa-Bold'
  },
  resultContainer:{
    paddingTop:10,
    flex:7, 
     borderRadius: 8,
     backgroundColor: 'rgba(255,255,255, 0.1)',
     justifyContent:'center',
     alignItems:'center'
  },
  goBackButton:
  {
   flex:1, 
   justifyContent:'center',
   alignItems:'center',
   backgroundColor: "#D92323", 
 },
 goBackButtonText:{
    fontSize:25,
    fontWeight:'200',
    color:'#ffffff',
    fontFamily:'Avenir'
 } 
})

export default DetailScreen