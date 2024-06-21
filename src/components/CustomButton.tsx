import { Text, TouchableOpacity } from "react-native";

export default function CustomButton({ ...props }) {
  const { title, onPress, className } = props;
  let customStyle = "p-2 my-2 border-radius items-center rounded";
  customStyle = customStyle.concat(" ", className);
  return (
    <TouchableOpacity className={customStyle} onPress={onPress}>
      <Text className="text-white font-semibold">{title}</Text>
    </TouchableOpacity>
  );
}
