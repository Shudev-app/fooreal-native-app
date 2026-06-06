import Header from "@/components/common/Header";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CalendarScreen() {
  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: "#FFF3E6"
      }}>
      <Header 
        actions={
          <View style={{
            flexDirection: "row",
            gap: 16,
          }}>
            <Pressable>
              <Ionicons 
                name="calendar-outline"
                size={28}
                color="#333"
                />
            </Pressable>

            <Pressable>
              <Ionicons 
                name="ellipsis-horizontal"
                size={28}
                color="#333"
              />
            </Pressable>
          </View>
          
        }
      />

    </SafeAreaView>
  );
}
