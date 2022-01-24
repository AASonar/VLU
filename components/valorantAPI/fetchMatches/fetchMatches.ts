import { ValorantAPI } from '../valorantAPI';

async function fetchMatches (
    region: string, 
    name: string, 
    tag: string, 
    size?: string, 
    mode?: string | null, 
    map?: string
    ) {
    const matches = await ValorantAPI.getMatches(region, name, tag, size, mode, map)
    console.log(matches)
    return matches
}

export default fetchMatches