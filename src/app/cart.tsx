import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Cart = () => {
  return (
    <View style={styles.viewContainer}>
      <Text>Cart</Text>
      <StatusBar style='auto' />
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
