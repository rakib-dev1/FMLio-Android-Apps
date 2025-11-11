import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { usePathname, useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface TabItem {
  name: string;
  label: string;
  icon: keyof typeof Ionicons.glyphMap | keyof typeof MaterialIcons.glyphMap | keyof typeof AntDesign.glyphMap;
  iconSet: 'Ionicons' | 'MaterialIcons' | 'AntDesign';
  route: string;
}

const tabs: TabItem[] = [
  {
    name: 'Home',
    label: 'Home',
    icon: 'home',
    iconSet: 'Ionicons',
    route: '/',
  },
  {
    name: 'Category',
    label: 'Category',
    icon: 'category',
    iconSet: 'MaterialIcons',
    route: '/category',
  },
  {
    name: 'Chat',
    label: 'Chat',
    icon: 'chatbubble-outline',
    iconSet: 'Ionicons',
    route: '/chat',
  },
  {
    name: 'Cart',
    label: 'Cart',
    icon: 'shopping-cart',
    iconSet: 'AntDesign',
    route: '/cart',
  },
  {
    name: 'Profile',
    label: 'Profile',
    icon: 'person-outline',
    iconSet: 'Ionicons',
    route: '/profile',
  },
];

export default function BottomNav() {
  const router = useRouter();
  const pathname = usePathname();

  const renderIcon = (tab: TabItem, isActive: boolean) => {
    const iconColor = isActive ? '#007AFF' : '#8E8E93';
    const iconSize = 24;

    switch (tab.iconSet) {
      case 'Ionicons':
        return <Ionicons name={tab.icon as keyof typeof Ionicons.glyphMap} size={iconSize} color={iconColor} />;
      case 'MaterialIcons':
        return <MaterialIcons name={tab.icon as keyof typeof MaterialIcons.glyphMap} size={iconSize} color={iconColor} />;
      case 'AntDesign':
        return <AntDesign name={tab.icon as keyof typeof AntDesign.glyphMap} size={iconSize} color={iconColor} />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const isActive = pathname === tab.route || (tab.route === '/' && pathname === '/');
        return (
          <TouchableOpacity
            key={tab.name}
            style={styles.tab}
            onPress={() => router.push(tab.route as any)}
            activeOpacity={0.7}
          >
            {renderIcon(tab, isActive)}
            <Text style={[styles.tabLabel, isActive && styles.tabLabelActive]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E5EA',
    paddingBottom: 8,
    paddingTop: 8,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
  },
  tabLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: '#8E8E93',
    marginTop: 4,
  },
  tabLabelActive: {
    color: '#007AFF',
  },
});