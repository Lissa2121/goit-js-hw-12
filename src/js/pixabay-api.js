import axios from "axios";

export const searchParams = {
    key: "45012251-1fd54445ad7ef6677a1cc96fc",
    q: "",
    imageType: "photo",
    orientation: "horizontal",
    safesearch: true,
    page: 1,
    per_page: 15,
    maxPage: 0,
};

export async function getPictures() {
    const response = await axios.get("https://pixabay.com/api/", {params: searchParams});
        return response.data;
}