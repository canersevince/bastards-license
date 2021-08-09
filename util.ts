import type { BigNumberish } from "@ethersproject/bignumber";
import { formatUnits } from "@ethersproject/units";
import {StorageProvider} from "./config/types";

export function shortenHex(hex: string, length = 4) {
  return `${hex.substring(0, length + 2)}…${hex.substring(
    hex.length - length
  )}`;
}

const ETHERSCAN_PREFIXES = {
  1: "",
  3: "ropsten.",
  4: "rinkeby.",
  5: "goerli.",
  42: "kovan.",
};

export function formatEtherscanLink(
  type: "Account" | "Transaction",
  data: [number, string]
) {
  switch (type) {
    case "Account": {
      const [chainId, address] = data;
      return `https://${ETHERSCAN_PREFIXES[chainId]}etherscan.io/address/${address}`;
    }
    case "Transaction": {
      const [chainId, hash] = data;
      return `https://${ETHERSCAN_PREFIXES[chainId]}etherscan.io/tx/${hash}`;
    }
  }
}

export const parseBalance = (
  balance: BigNumberish,
  decimals = 18,
  decimalsToDisplay = 3
) => Number(formatUnits(balance, decimals)).toFixed(decimalsToDisplay);

export const providers:StorageProvider[] = [
  {
    name: "IPFS - Infura",
    hashLength: 46,
    baseURI: "https://ipfs.infura.io/ipfs/"
  }, {
    name: "IPFS - The Graph",
    hashLength: 46,
    baseURI: "https://api.thegraph.com/ipfs/"
  },
]

export const LICENCE_ABI = [{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_from","type":"address"},{"indexed":false,"internalType":"uint8","name":"_gen","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"LicenseChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_from","type":"address"},{"indexed":false,"internalType":"uint8","name":"_gen","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"LicenseRemoved","type":"event"},{"inputs":[],"name":"V1ADDRESS","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"V2ADDRESS","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"_version","type":"uint8"},{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"_version","type":"uint8"},{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"removeLicenseForBastard","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_version","type":"uint8"},{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"string","name":"_text","type":"string"}],"name":"setLicenseForBASTARD","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_version","type":"uint8"},{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"showLicenseForBASTARD","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}]