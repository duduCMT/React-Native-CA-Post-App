import { Text, View } from "react-native";
import { NavigationRoute, TabBarProps } from "./types";
import { styles } from "./styles";
import { TabBarItem } from "../TabBarItem";
import { CustomOptions } from "@/presentation/types/navigation";
import { TabNavigationState, ParamListBase } from "@react-navigation/routers";

export const TabBar = ({ state, descriptors, navigation }: TabBarProps) => {
  const getTabBarItemInformation = (route: NavigationRoute, index: number) => {
    const options = descriptors[route.key].options as CustomOptions;
    const label = options.title || route.name;
    const focused = index === state.index;

    const onLongPress = () => {
      navigation.emit({
        type: "tabLongPress",
        target: route.key,
      });
    }

    const onPress = () => {
      const event = navigation.emit({
        type: "tabPress",
        target: route.key,
        canPreventDefault: true,
      });

      if (!focused && !event.defaultPrevented) {
        navigation.navigate(route.name);
      }
    }  

    return { options, onLongPress, onPress, label, focused }
  }
  
  
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.main}>
          {
            state.routes.map((route, index) => {
              if(index === state.routes.length - 1) return null;

              if(["_sitemap", "+not-found"].includes(route.name)) return null;

              const { options, onLongPress, onPress, focused } = getTabBarItemInformation(route, index);

              return (
                <TabBarItem 
                  icon={options.icon} 
                  isFocused={focused} 
                  onPress={onPress} 
                  onLongPress={onLongPress} 
                  key={route.key}
                />
              );
            })
          }
        </View>

        <View style={styles.addButtonArea}>
          {
            state.routes.map((route, index) => {
              if(index !== state.routes.length - 1) return null;

              if(["_sitemap", "+not-found"].includes(route.name)) return null;

              const { options, onLongPress, onPress, focused } = getTabBarItemInformation(route, index);

              return (
                <TabBarItem 
                  icon={options.icon} 
                  isFocused={focused} 
                  onPress={onPress} 
                  onLongPress={onLongPress} 
                  type={"primary"}
                  key={route.key}
                />
              );
            })
          }
        </View>
      </View>
    </View>
  )    
}