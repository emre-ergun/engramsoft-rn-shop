import { Stack } from 'expo-router';
import { useOrderUpdateSubscription } from '../../../api/subscriptions';

const OrderLayout = () => {
  useOrderUpdateSubscription();
  return (
    <Stack>
      <Stack.Screen
        name='index'
        options={{ headerShown: false, title: 'Orders' }}
      />
    </Stack>
  );
};

export default OrderLayout;
