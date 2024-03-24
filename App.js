import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [isBottomPorson, setInBottomPorson] = useState(false);
  const [white, setWhite] = useState('white');
  const [backgroundImage, setBackgroundImage] = useState('./assets/assignment-two-assets/jeremy-bishop-dvACrXUExLs-unsplash (1).png');
  return (
    <ImageBackground
    source={require(`./assets/assignment-two-assets/jeremy-bishop-dvACrXUExLs-unsplash (1).png`)}
    style={styles.container}
  >

    {/* First porsion */}
      <View style={styles.firstDivision}>
        <View>
          <Text style={{color: white, fontSize: 18}}>The science of operation, as derived from mathemaitics more especially, is a science of itself, and has its own abstract truth and value.</Text>
          <Text style={{color: white, fontSize: 18, fontWeight: '700', marginTop: 12}}>Ada Lovelace</Text>
        </View>

        <TouchableOpacity>
        <Image
        source={require('./assets/assignment-two-assets/Combined Shape (1).png')}
        style={styles.image}
        />
        </TouchableOpacity>
      </View>

      {/* Second porson */}
      <View style={styles.secondDivision}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={()=> {
            setWhite(white === 'black' ? 'white' : 'black');
            setBackgroundImage('./assets/assignment-two-assets/butterfly.jpg');
          }}>
        <Image
          source={require('./assets/assignment-two-assets/Path.png')}
          style={styles.image}
          />
          </TouchableOpacity>
          <Text style={{color: white, fontSize: 22}}>Good evening</Text>
        </View>

        <View style={{flexDirection: 'row', }}>
          <Text style={{color: white, fontSize: 85, fontWeight: 700}}>23:14</Text>
          <Text style={{color: white, alignSelf: 'flex-end', fontSize: 22}}>BST</Text>
        </View>

        <Text style={{color: white, fontSize: 22, fontWeight: 600}}>In london</Text>

        <TouchableOpacity onPress={()=> setInBottomPorson(!isBottomPorson)} style={styles.theMoreButton}>
          {
            isBottomPorson?
            <Text style={{color: 'black', fontSize: 22, marginLeft: 12}}>Less</Text>
            :
            <Text style={{color: 'black', fontSize: 22, marginLeft: 12}}>More</Text>
          }

          {
            isBottomPorson?
            <Image
            source={require('./assets/assignment-two-assets/Group 3 (1).png')}
            style={styles.toggleImage}
            />
            :
            <Image
            source={require('./assets/assignment-two-assets/Group 3.png')}
            style={styles.toggleImage}
            />
          }
        </TouchableOpacity>
      </View>


       {/* Third porsion */}

       {
        isBottomPorson ? <View style={styles.thirdPorson}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <Text style={{color: white, fontSize: 18,}}>Current timezone</Text>
          <Text style={{color: white, fontSize: 22, fontWeight: '700', marginTop: 12}}>Europw/London</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <Text style={{color: white, fontSize: 18,}}>Day of the year</Text>
          <Text style={{color: white, fontSize: 22, fontWeight: '700', marginTop: 12}}>295</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <Text style={{color: white, fontSize: 18,}}>Day of the week</Text>
          <Text style={{color: white, fontSize: 22, fontWeight: '700', marginTop: 12}}>5</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <Text style={{color: white, fontSize: 18,}}>Week number</Text>
          <Text style={{color: white, fontSize: 22, fontWeight: '700', marginTop: 12}}>42</Text>
        </View>
       </View> : ''
       }
       

      {/* <StatusBar style="auto" /> */}
  </ImageBackground>



   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  thirdPorson:{
    flexDirection: 'column',
    paddingVertical: 12,
    backgroundColor: '#rgba(0, 0, 0, 0.541)',
  },
  theMoreButton:{
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 42,
    width: 170,
    height: 40,
  },
  firstDivision:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 25
  },
  image:{
    width: 25,
    height: 25,
    marginHorizontal: 12
  },
  secondDivision:{
    flexDirection: 'column',
    // alignItems: 'center',
    marginHorizontal: 12,
    marginVertical: 12,
        padding: 12,
  },
  toggleImage:{
    width: 35,
    height: 35,
    marginHorizontal: 12,
  }
});
