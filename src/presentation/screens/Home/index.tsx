import { LinearGradient } from "expo-linear-gradient"
import { RefreshControl, ScrollView, Text, View } from "react-native"

import { theme } from "@/presentation/theme"

import { HomeHeader } from "./components/HomeHeader"
import { SafeAreaView } from "react-native-safe-area-context"
import { Stories } from "./components/Stories"
import { Posts } from "./components/Posts"

import { styles } from "./styles"
import { HomeProps } from "./types"
import { useCallback, useEffect, useState } from "react"
import { RequestData } from "@/presentation/types/request-status"
import { PostModel } from "@/domain/models/post.model"

export const HomeScreen = ({ postListUseCase }: HomeProps) => {
  const [refreshing, setRefreshing] = useState(false);
  const [posts, setPosts] = useState<RequestData<PostModel[]>>({ status: "none" });

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

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await requestPosts();
    setRefreshing(false);
  }, [postListUseCase]);

  useEffect(() => {
    requestPosts();
  }, []);

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
            <Stories />
            <Posts posts={posts} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  )
}