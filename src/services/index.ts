import { giphyService } from "./giphy";

export const fetchReducer = {
    [giphyService.reducerPath]: giphyService.reducer
}
export const fetchMiddleware = [
    giphyService
]