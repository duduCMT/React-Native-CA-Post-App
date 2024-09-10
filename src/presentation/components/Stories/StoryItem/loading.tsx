import { Skeleton } from "moti/skeleton";

import { theme } from "@/presentation/theme";

import { STORY_BORDER_RADIUS, STORY_HEIGHT, STORY_WIDTH } from "../constants";


export const StoryItemLoading = () => {
  return (
    <Skeleton 
      colors={theme.skeleton.colors}  
      width={STORY_WIDTH} 
      height={STORY_HEIGHT}
      radius={STORY_BORDER_RADIUS} 
    />
  )
}