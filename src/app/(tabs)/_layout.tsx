import { View } from "react-native";
import { Tabs } from "expo-router";
import { Foundation, FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";

import { theme } from "@/presentation/theme";
import { TabBar } from "@/presentation/components/TabBar";
import { CustomOptions } from "@/presentation/types/navigation";

const activeTintColor = theme.colors.white;

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: activeTintColor,
        tabBarInactiveTintColor: theme.colors.neutral[600],
        tabBarStyle: {
          backgroundColor: theme.colors.none,
          borderColor: theme.colors.black,
        },
      }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tabs.Screen
        name="index" 
        options={{
          icon: {
            pack: "material-community",
            name: "home-outline"
          }
        } as CustomOptions} 
      />
      <Tabs.Screen 
        name="search"
        options={{
          icon: {
            pack: "material",
            name: "search"
          }
        } as CustomOptions}
      />
      <Tabs.Screen 
        name="videos" 
        options={{
          icon: {
            pack: "material-community",
            name: "camera-outline"
          }
        } as CustomOptions}
      />
      <Tabs.Screen 
        name="addFriends" 
        options={{
          icon: {
            pack: "material",
            name: "person-add-alt",
          }
        } as CustomOptions}
      />
      <Tabs.Screen 
        name="add"
        options={{
          icon: {
            pack: "material-community",
            name: "plus"
          }
        } as CustomOptions} 
        listeners={() => ({
          tabPress: (event) => {
            event.preventDefault();
            console.warn("Press add");
          }
        })}
      />
    </Tabs>
  );
};