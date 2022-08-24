const placeholderNFT = "file:///home/coach/Desktop/daily-puzzle/NFT/placeholder.png";
const NFTPathway = "file:///home/coach/Desktop/daily-puzzle/NFT/"

const issuerAddress = "rBmro9965B5NmsrMwYzfnwyfJvE7HbcVS1"

const numNFTs = 28
const NFTs = [placeholderNFT];

for (i = 1; i <= numNFTs; i++) {
    NFTs.push(NFTPathway + i + '.jpg')
}
console.log(NFTs)
