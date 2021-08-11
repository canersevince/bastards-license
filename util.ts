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
    baseURI: "https://ipfs.infura.io/ipfs/"
  }, {
    name: "On-Chain",
    baseURI: ""
  },
]

export const LICENCE_ABI = [{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_from","type":"address"},{"indexed":false,"internalType":"uint8","name":"_gen","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"LicenseChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_from","type":"address"},{"indexed":false,"internalType":"uint8","name":"_gen","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"LicenseRemoved","type":"event"},{"inputs":[],"name":"V1ADDRESS","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"V2ADDRESS","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"_version","type":"uint8"},{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"_version","type":"uint8"},{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"removeLicenseForBastard","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_version","type":"uint8"},{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"string","name":"_text","type":"string"}],"name":"setLicenseForBASTARD","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_version","type":"uint8"},{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"showLicenseForBASTARD","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}]
 
export const V1IDS = ["5389", "10001", "10003", "10004", "10005", "10006", "10007", "10008", "10009", "10012", "10013", "10015", "10016", "10017", "10018", "10019", "10020", "10021", "10022", "10023", "10024", "10026", "10031", "10032", "10033", "10034", "10035", "10036", "10037", "10038", "10039", "10040", "10041", "10043", "10045", "10046", "10047", "10048", "10049", "10050", "10051", "10053", "10054", "10055", "10056", "10057", "10058", "10059", "10061", "10062", "10063", "10064", "10067", "10068", "10070", "10075", "10076", "10077", "10078", "10079", "10080", "10081", "10083", "10084", "10085", "10086", "10087", "10088", "10089", "10090", "10091", "10093", "10094", "10095"]