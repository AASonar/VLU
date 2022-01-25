import { MatchDetails } from '../types/matchDetails';
import { ValorantAPI } from '../valorantAPI';

const fetchMatches = async (
    region: string, 
    name: string, 
    tag: string, 
    size?: string, 
    mode?: string | null, 
    map?: string
    ) : Promise<MatchDetails> => {

    const response = await ValorantAPI.getMatches(region, name, tag, size, mode, map)
    const { data }  = response

    if(response.status === 200) {
        return data;
    }

    return Promise.reject(response);
}

export default fetchMatches