import { Redirect, Tabs } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useAuth } from '../../providers/auth-provider';

const TabBarIcon = (props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) => <FontAwesome size={24} {...props} />;

const TabsLayout = () => {
  const { session, mouinting } = useAuth();

  if (mouinting) return <ActivityIndicator />;
  if (!session) return <Redirect href={'auth'} />;
  
  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#1bc464',
          tabBarInactiveTintColor: 'gray',
          tabBarLabelStyle: { fontSize: 16 },
          tabBarStyle: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            paddingTop: 10,
            minHeight: 80,
          },
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name='index'
          options={{
            title: 'Shop',
            tabBarIcon(props) {
              return <TabBarIcon name='shopping-cart' {...props} />;
            },
          }}
        />
        <Tabs.Screen
          name='orders'
          options={{
            title: 'Orders',
            tabBarIcon(props) {
              return <TabBarIcon name='book' {...props} />;
            },
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
});
