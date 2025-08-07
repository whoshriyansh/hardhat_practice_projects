// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

contract Greeting {
    string private greeting;

    // Constructor is used to assign with value before deploying the contract to blockchain network
    constructor(string memory _greeting) {
        greeting = _greeting; //<- here we are setting value from the deploy scripts
    }

    //memory tells Solidity to store this string in temporary memory for the duration of the function call. Dynamic types like string need this location specifier when used in function parameters.
    //calldata is same but can't be changed
    function changeGreeting(string memory _greeting) public {
        greeting = _greeting;
    }

    //view can read blockchain state but not modify it.
    //pure cannot read or modify state at all — used for calculations only.

    //returns declares the data type and name of the value the function will return.
    function retrieveGreeting() public view returns (string memory) {
        return greeting;
    }
}
