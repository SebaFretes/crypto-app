import axios from "axios";
import { CryptoCurrenciesResponseSchema } from "../schema/crypto-schema";
import type { Pair } from "../types";

export async function getCryptos() {
    const url = 'https://data-api.coindesk.com/asset/v1/top/list?page_size=20&sort_by=CIRCULATING_MKT_CAP_USD&sort_direction=DESC&groups=ID,BASIC&toplist_quote_asset=USD&api_key=MiApiKey';
    const { data: { Data: { LIST } } } = await axios(url);
    const result = CryptoCurrenciesResponseSchema.safeParse(LIST)
    if(result.success) {
        return result.data
    }
}

export async function fetchCurrentCryptoPrice(pair: Pair) {
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.cryptocurrency}&tsyms=${pair.currency}`;
    const { data: { DISPLAY } } = await axios(url);
    console.log(DISPLAY);
    
}