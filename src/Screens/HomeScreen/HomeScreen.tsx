import {View, Text, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';



const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Your first car without a driver`s license
        </Text>
        <Text style={styles.titleText}>
          Goes to meet people who just got their license
        </Text>
      </View>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require('../../../assets/images/Img_car1.png')}
      />

      <View style={styles.footer}>
        <Text style={styles.skipText}>Skip</Text>
        <TouchableOpacity style={styles.button}>
          <AntDesign
            style={styles.icon}
            name="rightcircle"
            color="#fff"
            size={40}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.dotsContainer}>
        {[1, 2, 3].map((_, index) => (
          <View key={index} style={styles.dot} />
        ))}
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
