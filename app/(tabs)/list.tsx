import Header from "@/components/common/Header";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function ListScreen() {
    return(
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
                        name="search-outline"
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