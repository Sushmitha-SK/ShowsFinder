import axios from "axios";

const showsURL = `https://api.tvmaze.com/search/shows?q=all`

export async function getAllShows() {
    try {
        let response = await axios.get(showsURL);
        console.log('Response from API getAllShows', response)
        return response;
    }
    catch (err) {
        return null
    }
}

export async function getShowByID({ id }) {
    const showsURLbyID = `https://api.tvmaze.com/shows/${id}`

    try {
        let response = await axios.get(showsURLbyID);
        console.log('Response from API getAllShowsbyID', response)
        return response;
    }
    catch (err) {
        return null
    }
}
