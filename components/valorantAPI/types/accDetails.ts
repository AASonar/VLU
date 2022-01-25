
type Card = {
    id: string
    small: string
    large: string
    wide: string
}

export interface UserInfo {
    name: string,
    tag: string
}
export interface PlayerCardProps {
    playerInfo : AccountDetails
  }
export interface AccountDetails {
    name: string,
    region: string,
    tag: string,
    account_level: number
    card: Card
}