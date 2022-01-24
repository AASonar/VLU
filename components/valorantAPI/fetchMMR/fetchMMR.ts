import { MMRDetails } from '../types/mmrDetails';
import { ValorantAPI } from '../valorantAPI';

const fetchMMR = async (
    version: string, 
    region: string, 
    name: string, 
    tag: string)
    : Promise<MMRDetails> => {

    const response = await ValorantAPI.getMMR(version, region, name, tag)
    const { data }  = await response
    //console.log(data)
    return data
}

export default fetchMMR