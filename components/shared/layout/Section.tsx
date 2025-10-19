import React from 'react';
import { Text, View, ViewStyle } from 'react-native';

type SectionProps = {
  title?: string;
  right?: React.ReactNode;
  children?: React.ReactNode;
  style?: ViewStyle;
};

export default function Section({ title, right, children, style }: SectionProps) {
  return (
    <View style={[{ paddingHorizontal: 16, paddingTop: 16 }, style]}>
      {(title || right) && (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
          <Text style={{ fontSize: 18, fontWeight: '600', color: '#111827' }}>{title}</Text>
          {right}
        </View>
      )}
      {children}
    </View>
  );
}


