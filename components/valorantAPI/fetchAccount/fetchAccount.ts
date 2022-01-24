import { ValorantAPI } from '../valorantAPI';

export interface AccountDetails {
    name: string,
    region: string,
    tag: string,
    card: Object
}

const fetchAccount = async (name: string, tag: string): Promise<AccountDetails> => {

        const response = await ValorantAPI.getAccount(name, tag)
        const { data }  = await response
        console.log(data)
        return data

}



export default fetchAccount