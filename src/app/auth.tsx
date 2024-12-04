import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Auth = () => {
  return (
    <View style={styles.viewContainer}>
      <Text>Auth</Text>
      <StatusBar style='auto' />
    </View>
  );
};

export default Auth;

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
