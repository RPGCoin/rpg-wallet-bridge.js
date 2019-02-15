declare module "rpgaddrjs" {
  function isLegacyAddress(address: string): boolean
  function isP2SHAddress(address: string): boolean
  function toLegacyAddress(address: string): string
}
