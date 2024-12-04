import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Product = () => {
  return (
    <View style={styles.viewContainer}>
      <Text>Product</Text>
      <StatusBar style='auto' />
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
