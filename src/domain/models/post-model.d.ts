import { UserModel } from "./user-model";

export type PostModel = {
  id: string,
  user: UserModel,
  post: string,
  image?: string,
  time: string,
}