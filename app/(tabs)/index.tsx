import Header from '@/components/common/Header';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Pressable, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function HomeScreen() {
  return (
   <SafeAreaView style={{
      flex: 1,
      backgroundColor:"#FFF3E6"
    }}>
      <Header 
        actions={
          <Pressable>
            <MaterialCommunityIcons 
              name="bell-outline"
              size={24}
              color="#333"
            />
          </Pressable>
        }
      />

      <View style={{
        backgroundColor: "#FFF8F1",
      }}>

      </View>

   </SafeAreaView>
  );
}
