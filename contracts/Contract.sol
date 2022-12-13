// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

error Contract__Unauthorized();
error Contract__WithdrawFailed();

contract Contract {
    address payable private immutable i_owner;

    event Withdrawal(uint amount, uint when);

    constructor() payable {
        i_owner = payable(msg.sender);
    }

    receive() external payable {}

    fallback() external payable {}

    function withdraw() public {
        if (msg.sender != i_owner) {
            revert Contract__Unauthorized();
        }
        (bool success, ) = i_owner.call{value: address(this).balance}("");
        if (!success) {
            revert Contract__WithdrawFailed();
        }
        emit Withdrawal(address(this).balance, block.timestamp);
    }

    function getOwner() external view returns (address) {
        return i_owner;
    }
}
