import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,

                tabBarActiveTintColor: "#FF8A3D",
                tabBarInactiveTintColor: "#9E9E9E",

                tabBarStyle: {
                    height: 80,
                    paddingTop: 8,
                    paddingBottom: 8,
                    backgroundColor: "#FFFFFF",

                    borderTopWidth: 1,
                    borderTopColor: "#000000",
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: "600",
                },
                
            }}
        >
            <Tabs.Screen 
                name="index"
                options={{
                    title: "ホーム",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name="home-outline"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
            
            <Tabs.Screen 
                name="calendar"
                options={{
                    title: "カレンダー",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name="calendar-outline"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />

            <Tabs.Screen 
                name="album"
                options={{
                    title: "アルバム",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name="images-outline"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />

            <Tabs.Screen 
                name="list"
                options={{
                    title: "リスト",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name="list-outline"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}