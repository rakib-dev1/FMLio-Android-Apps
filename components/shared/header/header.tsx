import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import React, { useRef, useState } from 'react';
import {
    DrawerLayoutAndroid,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

export default function HeaderWithDrawer({ children }: { children: React.ReactNode }) {
  const drawerRef = useRef<DrawerLayoutAndroid>(null);
  const rightDrawerRef = useRef<DrawerLayoutAndroid>(null);
  const [leftDrawerOpen, setLeftDrawerOpen] = useState(false);
  const [rightDrawerOpen, setRightDrawerOpen] = useState(false);

  // Left Drawer Content (Navigation Menu)
  const navigationView = () => (
    <View style={[styles.drawerContainer, { backgroundColor: '#ffffff' }]}>
      <View style={styles.drawerHeader}>
        <Text style={styles.drawerTitle}>Menu</Text>
        <TouchableOpacity 
          onPress={() => {
            drawerRef.current?.closeDrawer();
            setLeftDrawerOpen(false);
          }}
          style={styles.closeButton}
        >
          <MaterialIcons name="close" size={24} color="#111827" />
        </TouchableOpacity>
      </View>
      
      <View style={styles.drawerContent}>
        <TouchableOpacity style={styles.drawerItem}>
          <Ionicons name="home-outline" size={20} color="#111827" />
          <Text style={styles.drawerItemText}>Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.drawerItem}>
          <Ionicons name="person-outline" size={20} color="#111827" />
          <Text style={styles.drawerItemText}>Profile</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.drawerItem}>
          <Ionicons name="settings-outline" size={20} color="#111827" />
          <Text style={styles.drawerItemText}>Settings</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.drawerItem}>
          <Ionicons name="help-circle-outline" size={20} color="#111827" />
          <Text style={styles.drawerItemText}>Help</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  // Right Drawer Content (Shopping Cart)
  const cartView = () => (
    <View style={[styles.drawerContainer, { backgroundColor: '#f8fafc' }]}>
      <View style={styles.drawerHeader}>
        <Text style={styles.drawerTitle}>Shopping Cart</Text>
        <TouchableOpacity 
          onPress={() => {
            rightDrawerRef.current?.closeDrawer();
            setRightDrawerOpen(false);
          }}
          style={styles.closeButton}
        >
          <MaterialIcons name="close" size={24} color="#111827" />
        </TouchableOpacity>
      </View>
      
      <View style={styles.drawerContent}>
        <View style={styles.emptyCart}>
          <AntDesign name="shopping-cart" size={64} color="#d1d5db" />
          <Text style={styles.emptyCartText}>Your cart is empty</Text>
          <Text style={styles.emptyCartSubtext}>Add some items to get started</Text>
        </View>
        
        <TouchableOpacity style={styles.continueShoppingButton}>
          <Text style={styles.continueShoppingText}>Continue Shopping</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  // Main Header Component
  const Header = () => (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => {
          drawerRef.current?.openDrawer();
          setLeftDrawerOpen(true);
        }}
      >
        <Ionicons name="menu" size={24} color="#fff" />
      </TouchableOpacity>

      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search products"
          placeholderTextColor="#6B7280"
          style={styles.searchInput}
          returnKeyType="search"
        />
      </View>

      <TouchableOpacity
        style={styles.cartButton}
        accessibilityRole="button"
        accessibilityLabel="Open cart"
        onPress={() => {
          rightDrawerRef.current?.openDrawer();
          setRightDrawerOpen(true);
        }}
      >
        <AntDesign name="shopping-cart" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawerRef}
      drawerWidth={300}
      drawerPosition="left"
      renderNavigationView={navigationView}
      onDrawerClose={() => setLeftDrawerOpen(false)}
      onDrawerOpen={() => setLeftDrawerOpen(true)}
      drawerLockMode={rightDrawerOpen ? 'locked-closed' : 'unlocked'}
    >
      <DrawerLayoutAndroid
        ref={rightDrawerRef}
        drawerWidth={300}
        drawerPosition="right"
        renderNavigationView={cartView}
        onDrawerClose={() => setRightDrawerOpen(false)}
        onDrawerOpen={() => setRightDrawerOpen(true)}
        drawerLockMode={leftDrawerOpen ? 'locked-closed' : 'unlocked'}
      >
        <View style={styles.container}>
          <Header />
          {children}
        </View>
      </DrawerLayoutAndroid>
    </DrawerLayoutAndroid>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    height: 60,
    backgroundColor: "#ef6322",

  },
  searchContainer: {
    flex: 1,
    marginLeft: 12,
  },
  searchInput: {
    height: 40,
    backgroundColor: "#F3F4F6",
    borderRadius: 10,
    paddingHorizontal: 12,
    color: "#111827",
  },
  cartButton: {
    marginLeft: 12,
  },
  drawerContainer: {
    flex: 1,
    paddingTop: 40,
  },
  drawerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  drawerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
  },
  closeButton: {
    padding: 4,
  },
  drawerContent: {
    flex: 1,
    padding: 16,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  drawerItemText: {
    marginLeft: 12,
    fontSize: 16,
    color: '#111827',
  },
  emptyCart: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyCartText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#374151',
    marginTop: 16,
  },
  emptyCartSubtext: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 8,
  },
  continueShoppingButton: {
    backgroundColor: '#111827',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  continueShoppingText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});