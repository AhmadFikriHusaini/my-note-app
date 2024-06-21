import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import { addNote } from "@/databases/notes";
import { router } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";

export default function AddScreen() {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const handleAdd = () => {
    addNote(title, note);
    router.replace("/");
  };
  return (
    <View className="flex-1 bg-white items-center">
      <Text className="mt-4 font-bold text-lg">Add Note</Text>
      <CustomInput
        className="mt-4"
        label="Title"
        placeholder="add your note title"
        onChangeText={(text) => {
          setTitle(text);
        }}
        value={title}
      />
      <CustomInput
        className="mt-4"
        label="Note"
        placeholder="add your note"
        onChangeText={(text) => {
          setNote(text);
        }}
        value={note}
      />
      <View className="w-full px-12 mt-4">
        <CustomButton
          className="bg-green-500"
          title="Add"
          onPress={() => {
            handleAdd();
            // reset navigation to index
            // router.back();
            router.replace("/");
          }}
        />
      </View>
    </View>
  );
}
