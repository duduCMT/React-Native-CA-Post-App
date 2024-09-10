import { HttpResponse } from "../gateways";
import { UseCase } from "./use-case";

export interface HttpUseCase<T = unknown, Z = unknown> {
  execute(data: T): Promise<HttpResponse<Z>>
}