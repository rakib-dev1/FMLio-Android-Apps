import React from 'react';
import { ScrollView, View, ViewStyle } from 'react-native';

type ScreenProps = {
  children: React.ReactNode;
  scrollable?: boolean;
  contentContainerStyle?: ViewStyle;
  style?: ViewStyle;
};

export default function Screen({ children, scrollable = true, contentContainerStyle, style }: ScreenProps) {
  if (scrollable) {
    return (
      <ScrollView
        style={[{ flex: 1, backgroundColor: '#FFFFFF' }, style]}
        contentContainerStyle={[{ paddingBottom: 16 }, contentContainerStyle]}
        keyboardShouldPersistTaps="handled"
      >
        {children}
      </ScrollView>
    );
  }
  return <View style={[{ flex: 1, backgroundColor: '#FFFFFF' }, style]}>{children}</View>;
}


