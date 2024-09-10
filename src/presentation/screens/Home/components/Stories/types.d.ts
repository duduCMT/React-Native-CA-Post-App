import { StoryModel } from "@/domain/models";
import { RequestData } from "@/presentation/types/request-status";

export type FilterSelection = "followers" | "discover";

export type StoriesProps = {
  stories: RequestData<StoryModel[]>;
  onChangeFilter: (selection: FilterSelection) => void;
  filterSelection: FilterSelection;
};