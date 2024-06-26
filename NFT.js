/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created

EDITOR- Kritarth Singh UID-21BCS5418
*/

// create a variable to hold your NFT's
let nftCollection = []; 

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name, Person, Wears, Car) {
    const nft = {
        name: name,
        Person: Person,
        Wears: Wears,
        Car: Car
      };
    
      nftCollection.push(nft);
    
}
// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    nftCollection.forEach((nft, index) => {
        console.log(`NFT ${index + 1}:`);
        console.log("Name: " + nft.name);
        console.log("Person : " + nft.Person);
        console.log("Wears: " + nft.Wears);
        console.log("Car: " + nft.Car);
        console.log("---------------------------");
      });
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return nftCollection.length;
}

// call your functions below this line
mintNFT("NFT I", "Kritarth", "Blazer", "Nissan GTR");
mintNFT("NFT II", "Raju", "Seatshirt", "Toyota Supra");
mintNFT("NFT III", "Aryan", "Trouser", "Porsche 911");
mintNFT("NFT IV", "Shubham", "High Rise Shirt", "Ford Mustang GT");

listNFTs();
console.log("Total NFTs minted: " + getTotalSupply());
