import contract from "@truffle/contract"

export const loadContract = async (name, provider) => {
    const res = await fetch(`/contracts/${name}.json`)
    const artifact = await res.json()
    const contractObj = contract(artifact)
    contractObj.setProvider(provider)
    let instance = null
    try {
        instance = await contractObj.deployed()
    } catch {
        console.error("You are connected to the wrong netwrok")
    }
    return instance
}