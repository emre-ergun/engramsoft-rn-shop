import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Categories = () => {
  return (
    <View style={styles.viewContainer}>
      <Text>Categories</Text>
      <StatusBar style='auto' />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
