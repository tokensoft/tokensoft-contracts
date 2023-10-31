// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {Clones} from "@openzeppelin/contracts/proxy/Clones.sol";
import {Counters} from "@openzeppelin/contracts/utils/Counters.sol";

import {ContinuousVestingMerkleDistributor} from "./ContinuousVestingMerkleDistributor.sol";

contract ContinuousVestingMerkleDistributorFactory {
    using Counters for Counters.Counter;
    
    address private immutable i_implementation;
    address[] public distributors;
    Counters.Counter nonce;

    event DistributorDeployed(address indexed distributor,uint256 nonce);

    constructor(address implementation) {
        i_implementation = implementation;
    }

    function _getSalt(
        IERC20 _token, // the token being claimed
        uint256 _total, // the total claimable by all users
        string memory _uri, // information on the sale (e.g. merkle proofs)
        uint256 _start, // vesting clock starts at this time
        uint256 _cliff, // claims open at this time
        uint256 _end, // vesting clock ends and this time
        bytes32 _merkleRoot, // the merkle root for claim membership (also used as salt for the fair queue delay time),
        uint160 _maxDelayTime, // the maximum delay time for the fair queue
        address _owner,
        uint256 _nonce
    ) private pure returns (bytes32) {
        return keccak256(abi.encode(
            _token,
            _total,
            _uri,
            _start,
            _cliff,
            _end,
            _merkleRoot,
            _maxDelayTime,
            _owner,
            _nonce
        ));
    }

    function deployDistributor(
        IERC20 _token, // the token being claimed
        uint256 _total, // the total claimable by all users
        string memory _uri, // information on the sale (e.g. merkle proofs)
        uint256 _start, // vesting clock starts at this time
        uint256 _cliff, // claims open at this time
        uint256 _end, // vesting clock ends and this time
        bytes32 _merkleRoot, // the merkle root for claim membership (also used as salt for the fair queue delay time),
        uint160 _maxDelayTime, // the maximum delay time for the fair queue
        address _owner
    ) public returns (ContinuousVestingMerkleDistributor distributor) {
        uint256 currentNonce = nonce.current();
        
        bytes32 salt = _getSalt(
            _token,
            _total,
            _uri,
            _start,
            _cliff,
            _end,
            _merkleRoot,
            _maxDelayTime,
            _owner,
            currentNonce
        );

        distributor =
            ContinuousVestingMerkleDistributor(Clones.cloneDeterministic(i_implementation, salt));
        distributors.push(address(distributor));

        emit DistributorDeployed(address(distributor), currentNonce);

        distributor.initialize(_token, _total, _uri, _start, _cliff, _end, _merkleRoot, _maxDelayTime, _owner);

        nonce.increment();

        return distributor;
    }

    function getImplementation() public view returns (address) {
        return i_implementation;
    }

    function predictDistributorAddress(
        IERC20 _token, // the token being claimed
        uint256 _total, // the total claimable by all users
        string memory _uri, // information on the sale (e.g. merkle proofs)
        uint256 _start, // vesting clock starts at this time
        uint256 _cliff, // claims open at this time
        uint256 _end, // vesting clock ends and this time
        bytes32 _merkleRoot, // the merkle root for claim membership (also used as salt for the fair queue delay time),
        uint160 _maxDelayTime, // the maximum delay time for the fair queue
        address _owner,
        uint256 _nonce
    ) public view returns (address) {
        bytes32 salt = _getSalt(
            _token,
            _total,
            _uri,
            _start,
            _cliff,
            _end,
            _merkleRoot,
            _maxDelayTime,
            _owner,
            _nonce
        );

        return Clones.predictDeterministicAddress(i_implementation, salt, address(this));
    }

    function getNonce() public view returns (uint256) {
        return nonce.current();
    }
}
