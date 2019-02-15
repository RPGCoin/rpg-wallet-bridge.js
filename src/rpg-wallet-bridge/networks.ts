import Network from "./entities/Network"
import { NetworkType } from "./entities/Network"

const networks = new Map<number, NetworkType>([
  [0x3b7ca3c7, NetworkType.MAINNET],
  [0x547A9374, NetworkType.TESTNET]
])

export const findNetwork = (magic: number) => {
  const type = networks.get(magic)
  if (type) {
    return new Network(magic, type)
  }
  return new Network(magic, NetworkType.UNKNOWN)
}
