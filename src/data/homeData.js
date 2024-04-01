import {createData} from "./apiData";
import {filterVideos} from "./videoData";

export  async function getIntialData() {

    let searchObject = localStorage.getItem("search");
    let keywords = ["Food", "Music", "React"];
    let data =[];

    if (searchObject) {
        searchObject = JSON.parse(searchObject);

        keywords.map(keyword => {
            let storedTerm = searchObject[keyword];

            if (storedTerm) {
                data.push(...storedTerm.filter(v => v));
                
            }else{
                
                // return createData(searchTerm, searchObject)
            }
            return "";
        })
        
    }else{
       
       
            let response = await createData(keywords, searchObject);

        
        return response;
    }
    return filterVideos(data);
} 
