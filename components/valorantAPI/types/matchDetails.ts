
type Metadata = {
    map: string,
    mode: string,
    rounds_played: number
    cluster: string
}

type PlayerData = {
    name: string,
    tag: string,
    character: string,
    team: string,
}

type Players = {
    all_players: PlayerData[]
}

type MatchDetailsData = {
    metadata: Metadata
    players: Players
}

export interface MatchDetails {
   MatchDetails: MatchDetailsData[]
}
