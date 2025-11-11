// RootLayout.tsx
import BottomNav from '@/components/shared/bottom-nav/bottom_nav';
import HeaderWithDrawer from '@/components/shared/header/header';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Stack } from 'expo-router';
import 'react-native-reanimated';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <HeaderWithDrawer>
            <Stack screenOptions={{ headerShown: false }}>
              <Stack.Screen name="index" />
              <Stack.Screen name="chat" />
            </Stack>
            <BottomNav />
          </HeaderWithDrawer>
        </SafeAreaView>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
