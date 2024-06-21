import { ScrollView, Text, View } from "react-native";
import CustomButton from "../components/CustomButton";
import NoteCard from "../components/NoteCard";
import { useState } from "react";
import { router } from "expo-router";
import {
  deleteNote,
  getDoneNotes,
  getUnDoneNotes,
  setNoteCompleted,
} from "@/databases/notes";
import LottieView from "lottie-react-native";

export default function Index() {
  const [noteList, setNoteList] = useState(getUnDoneNotes());
  const [doneNoteList, setDoneNoteList] = useState(getDoneNotes());

  const handleCompletedNote = (id: number) => {
    setNoteCompleted(id);
    setNoteList(getUnDoneNotes());
    setDoneNoteList(getDoneNotes());
  };

  const handleDelete = (id: number) => {
    deleteNote(id);
    setDoneNoteList(getDoneNotes());
    setNoteList(getUnDoneNotes());
  };

  if (noteList.length === 0 && doneNoteList.length === 0) {
    return (
      <View className="flex-1 items-center bg-white">
        <View className="w-screen">
          <CustomButton
            className="mx-6 bg-green-400"
            title="Add"
            onPress={() => {
              router.push("addscreen");
            }}
          />
        </View>
        <View className="flex-1 w-full justify-center items-center">
          <LottieView
            source={require("@/lotties/Animation - Empty.json")}
            style={{ width: "100%", height: "20%" }}
            autoPlay
            loop
          />
          <Text className="font-bold">There is no List yet</Text>
        </View>
      </View>
    );
  }

  return (
    <ScrollView>
      <View className="w-screen">
        <CustomButton
          className="mx-6 bg-green-400"
          title="Add"
          onPress={() => {
            router.push("addscreen");
          }}
        />
      </View>

      <View className="w-screen items-center px-6 mb-4">
        <View className="w-full bg-slate-100 mt-2 shadow shadow-black items-center rounded-lg p-6">
          <Text className="font-bold text-lg mb-2">List Note</Text>
          <NoteCard
            notelist={noteList}
            onDelete={handleDelete}
            completed={handleCompletedNote}
          />
        </View>
        <View className="w-full bg-slate-200 shadow shadow-black mt-4 items-center rounded-lg p-6">
          <Text className="font-bold text-lg mb-2">Done Note</Text>
          <NoteCard
            notelist={doneNoteList}
            completed={handleCompletedNote}
            onDelete={handleDelete}
          />
        </View>
      </View>
    </ScrollView>
  );
}
