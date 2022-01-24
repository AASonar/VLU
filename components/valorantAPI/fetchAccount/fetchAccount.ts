import { AccountDetails } from '../types/accDetails';
import { ValorantAPI } from '../valorantAPI';

const fetchAccount = async (name: string, tag: string): Promise<AccountDetails> => {

        const response = await ValorantAPI.getAccount(name, tag)
        const { data }  = await response
        //console.log(data)
        return data

}



export default fetchAccount