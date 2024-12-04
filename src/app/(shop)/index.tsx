import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Home = () => {
  return (
    <View style={styles.viewContainer}>
      <Text>Home</Text>
      <StatusBar style='auto' />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  viewContainer: {},
});
