const placeholderNFT = "file:///home/coach/Desktop/daily-puzzle/NFT/placeholder.png";
const NFTPathway = "file:///home/coach/Desktop/daily-puzzle/NFT/"

const issuerAddress = "rBmro9965B5NmsrMwYzfnwyfJvE7HbcVS1"

const numNFTs = 28
const NFTs = [];

for (i = 1; i <= numNFTs; i++) {
    NFTs.push(NFTPathway + i + '.jpg')
}
console.log(NFTs)


//When uploading the NFTs from the above array to github, there was a problem since the source pathway to the images was only for the local machine. Using the images in the array below should solve this as the sourcing pathway is more linear. However, we still need to keep the above array in order for the lightbox arrow functionalty to work (since when searching the array for the NFT, the source pathway needs to be formatted in the way that the NFTs from the 'NFTs' array is, and not the way the 'sourcedNFTs' array does it)
const sourcedNFTs = []

for (j = 1; j <= numNFTs; j++) {
    sourcedNFTs.push('./NFT/' + j + '.jpg')
}

console.log(sourcedNFTs)