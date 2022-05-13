import contract from "@truffle/contract"

export const loadContract = async (name, provider) => {
    const res = await fetch(`/contracts/${name}.json`)
    const artifact = await res.json()
    const contractObj = contract(artifact)
    contractObj.setProvider(provider)
    const instance = await contractObj.deployed()
    return instance
}