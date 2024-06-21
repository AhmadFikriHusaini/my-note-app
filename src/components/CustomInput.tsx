import { Text, TextInput, View } from "react-native";

export default function CustomInput({ ...props }) {
  const { label, placeholder, onChangeText, value, className } = props;
  return (
    <View className={`w-full px-12 mt-1 ${className}`}>
      <Text className="font-semibold mb-1">{`${label} :`}</Text>
      <TextInput
        className="border border-gray-400 rounded-lg p-2"
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
}
