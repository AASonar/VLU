import { ValorantAPI } from "../valorantAPI"
import { MatchDetailsData } from '../types/matchDetails';

const fetchMatch = async (
    matchId: string
    ) : Promise<MatchDetailsData> => {

    const response = await ValorantAPI.getMatch(matchId)
    const { data }  = await response
    //console.log(data)
    if(response.status === 200) {
        return data;
    }

    return Promise.reject(response);
}

export default fetchMatch