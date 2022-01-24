
/*
interface Card {
    id: string
    small: string
    large: string
    wide: string
} */

type Card = {
    id: string
    small: string
    large: string
    wide: string
}

export interface AccountDetails {
    name: string,
    region: string,
    tag: string,
    account_level: number
    card: Card
}