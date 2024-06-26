import { useLoaderData, useNavigation } from "react-router-dom";
import { getData } from "../../data/apiData";
import { isRequestLimit } from "../../data/apiData";
import SearchResults from "./SearchResults";
import { Categories } from "../";

export async function loader({params, request}) {
    let search = params.search;
    const videos = await getData(search);
    isRequestLimit(videos)
    return {search, videos}
}

export default function Search() {
    let {search, videos} = useLoaderData();
    const navigation = useNavigation();

    return (
        <>
            <Categories/>
            <section className={"results " + (navigation.state === "loading" ? "loading": "")}>
                <SearchResults search={search} videos={videos} key={search} className={navigation.state === "loading" ? "loading": ""}/>
            </section>
            
        </>
    )
}
