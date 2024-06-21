import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import { editNote, getNoteById, getNotes } from "@/databases/notes";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function EditScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleEdit = () => {
    editNote(id, title, desc);
    router.replace("/");
  };

  useEffect(() => {
    const note = getNoteById(Number(id));
    if (note) {
      setTitle(note.title);
      setDesc(note.desc);
    }
  }, [id]);
  return (
    <View className="flex-1 bg-white items-center">
      <CustomInput
        className="mt-4"
        label="Title"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <CustomInput
        className="mt-4"
        label="Note"
        value={desc}
        onChangeText={(text) => setDesc(text)}
      />
      <View className="w-full px-12 mt-4">
        <CustomButton
          className="bg-yellow-500"
          title="Edit"
          onPress={() => {
            handleEdit();
            // router.replace("/");
            // navigation.dispatch(StackActions.popToTop());
          }}
        />
      </View>
    </View>
  );
}
