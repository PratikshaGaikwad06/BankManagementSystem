package dao;


import java.util.List;

import entities.Address;

public interface AddressDAO {
    void addAddress(Address address);
    Address getAddressById(int addressId);
    List<Address> getAddressesByUserId(int userId);
    void updateAddress(Address address);
    void deleteAddress(int addressId);
}