import { Alert, FlatList, Text, TouchableOpacity, View } from "react-native";
import CustomButton from "./CustomButton";
import { router } from "expo-router";

export default function NoteCard({ ...props }) {
  const { notelist, onDelete, completed } = props;
  // console.log(completed);
  return (
    <View className="w-full">
      {notelist.map((note) => {
        return (
          <View
            className="shadow shadow-black bg-white rounded-2xl mb-4 px-3 pt-3 pb-1"
            key={note.id}
          >
            <TouchableOpacity
              onLongPress={() => {
                completed(note.id);
              }}
            >
              {note.completed ? (
                <Text className="font-bold mb-1 mt-2 line-through">
                  {note.title}
                </Text>
              ) : (
                <Text className="font-bold mb-1 mt-2">{note.title}</Text>
              )}
              <Text>{note.desc}</Text>
              <View className="flex-row justify-end">
                <CustomButton
                  className="mx-1 bg-yellow-400"
                  title="Edit"
                  onPress={() => router.push(`/${note.id}`)}
                />
                <CustomButton
                  className="mx-1 bg-red-400"
                  title="Delete"
                  onPress={() => {
                    onDelete(note.id);
                  }}
                />
              </View>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
  // return (
  //   <FlatList
  //     className="w-full"
  //     data={notelist}
  //     renderItem={({ item }) => {
  //       return (
  //         <View className="shadow shadow-black bg-white rounded-2xl mb-4 px-3 pt-3 pb-1">
  //           <TouchableOpacity
  //             onLongPress={() => {
  //               Alert.alert("halo");
  //             }}
  //           >
  //             {item.completed ? (
  //               <Text className="font-bold mb-1 mt-2 line-through">
  //                 {item.title}
  //               </Text>
  //             ) : (
  //               <Text className="font-bold mb-1 mt-2">{item.title}</Text>
  //             )}
  //             <Text>{item.desc}</Text>
  //             <View className="flex-row justify-end">
  //               <CustomButton
  //                 className="mx-1 bg-yellow-400"
  //                 title="Edit"
  //                 onPress={() => router.push(`/${item.id}`)}
  //               />
  //               <CustomButton
  //                 className="mx-1 bg-red-400"
  //                 title="Delete"
  //                 onPress={() => {
  //                   onDelete(item.id);
  //                 }}
  //               />
  //             </View>
  //           </TouchableOpacity>
  //         </View>
  //       );
  //     }}
  //   />
  // );
}
