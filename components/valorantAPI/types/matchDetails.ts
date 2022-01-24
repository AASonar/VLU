
export type Metadata = {
    matchid: string,
    map: string,
    mode: string,
    rounds_played: number,
    cluster: string
}

type PlayerStats = {
    kills: number,
    deaths: number,
    assists: number,
    headshots: number,
    score: number
}

type PlayerData = {
    name: string,
    tag: string,
    character: string,
    team: string,
    currenttier_patched: string,
    stats: PlayerStats
}

type Players = {
    blue: PlayerData[],
    red: PlayerData[]
}
export interface MatchDetailsData {
    metadata: Metadata
    players: Players
}

export type MatchDetails = MatchDetailsData[]


