import {ACTIVE_BOOK} from "./Types";

export const selectBook = (book) => {
    return {
        type: ACTIVE_BOOK,
        payload: book
    };
}
