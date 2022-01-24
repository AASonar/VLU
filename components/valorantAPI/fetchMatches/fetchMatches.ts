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
    const { data }  = await response
    //console.log(data)
    return data

}

export default fetchMatches