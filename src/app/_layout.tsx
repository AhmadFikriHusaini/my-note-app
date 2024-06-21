import "@/global.css";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Memo App",
        }}
      />
      <Stack.Screen
        name="addscreen"
        options={{
          title: "Add Memo",
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          title: "Edit Memo",
        }}
      />
    </Stack>
  );
}
