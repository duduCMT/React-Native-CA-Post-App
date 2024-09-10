import { useCallback, useEffect, useState } from "react";
import { RefreshControl, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

import { theme } from "@/presentation/theme";
import { RequestData } from "@/presentation/types/request-status";
import { PostModel, StoryModel } from "@/domain/models";

import { HomeHeader } from "./components/HomeHeader";
import { Stories } from "./components/Stories"
import { Posts } from "./components/Posts"

import { styles } from "./styles"
import { HomeProps } from "./types";
import { FilterSelection } from "./components/Stories/types";

export const HomeScreen = ({ postListUseCase, storyListUseCase }: HomeProps) => {
  const [refreshing, setRefreshing] = useState(false);
  const [posts, setPosts] = useState<RequestData<PostModel[]>>({ status: "none" });
  const [stories, setStories] = useState<RequestData<StoryModel[]>>({ status: "none" });
  const [filterSelection, setFilterSelection] = useState<FilterSelection>("followers");

  const requestPosts = useCallback(async () => {
    setPosts({ status: "loading" });
    try {
      const { body } = await postListUseCase.execute();
      setTimeout(() => setPosts({ status: "success", data: body }), 2000);
      
    } catch (error) {
      console.error(error);
      setPosts({ status: "error", error });
    }
  }, [postListUseCase]);

  const requestStories = useCallback(async (filterSelection: FilterSelection) => {
    setStories({ status: "loading" });
    try {
      const { body } = filterSelection === "discover" 
        ? await storyListUseCase.listDiscovery() 
        : await storyListUseCase.listFollowers();
      setTimeout(() => setStories({ status: "success", data: body }), 2000);
      
    } catch (error) {
      console.error(error);
      setPosts({ status: "error", error });
    }
  }, [storyListUseCase]);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await Promise.all([requestPosts(), requestStories(filterSelection)]);
    setRefreshing(false);
  }, [postListUseCase, filterSelection]);

  const onChangeFilter = (selection: FilterSelection) => {
    console.log(selection);
    setFilterSelection(selection);
  }

  useEffect(() => {
    requestPosts();
  }, []);

  useEffect(() => {
    requestStories(filterSelection);
  }, [filterSelection]);

  return (
    <LinearGradient
      colors={[theme.colors.primary[100], theme.colors.primary[1], theme.colors.white]}
      locations={[ 0.1, 0.4, 1 ]}
      style={styles.container}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContent}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        >
          <HomeHeader />
          <View style={styles.content}>
            <Stories 
              filterSelection={filterSelection} 
              onChangeFilter={onChangeFilter}  
              stories={stories} 
            />
            <Posts posts={posts} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  )
}