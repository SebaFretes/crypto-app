import { create } from "zustand";
import type { CryptoCurrency } from "./types";
import { devtools } from "zustand/middleware";
import { getCryptos } from "./services/CryptoServices";

type CryptoStore = {
    cryptoCurrencies: CryptoCurrency[]
    fetchCryptos: () => Promise<void>
}

export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({
    cryptoCurrencies: [],
    fetchCryptos : async () => {
        const cryptoCurrencies = await getCryptos();
        console.log(cryptoCurrencies);
        set(() => ({
            cryptoCurrencies
        }))
    }
})))