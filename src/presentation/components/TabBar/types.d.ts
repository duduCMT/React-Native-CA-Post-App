import { BottomTabBarProps } from "@react-navigation/bottom-tabs";

export type TabBarProps = BottomTabBarProps;

export type NavigationRoute = TabNavigationState<ParamListBase>['routes'][number];
