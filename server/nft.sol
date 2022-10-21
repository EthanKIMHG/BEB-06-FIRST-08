// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";


contract MyNFTs is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    mapping(uint =>_Offer) public offers;

    struct _Offer{
        address oner;
        uint price;
    }
    
    Counters.Counter private _tokenIds;
    constructor() ERC721("MyNFT","NFT") {}

    function mintNFT(string memory tokenURI,uint price) public returns(uint256){
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        _mint(msg.sender,newItemId);
        _setTokenURI(newItemId,tokenURI);
        offers[newItemId] = _Offer(msg.sender,price);
        _approve(address(this),newItemId);
        return newItemId;
    }

    function makeOffer(uint _tokenId, uint _price) public{
        _Offer storage _offer = offers[_tokenId];
        require(_offer.oner == msg.sender);
        _offer.price = _price;
    }
    
    function fillOffer(uint _tokenId) public payable{
        _Offer storage _offer = offers[_tokenId];
        require(_offer.oner != msg.sender,"11");
        require(_offer.price == msg.value,"22");

        payable(_offer.oner).transfer(_offer.price);
        _transfer(_offer.oner,msg.sender,_tokenId);
    }

}