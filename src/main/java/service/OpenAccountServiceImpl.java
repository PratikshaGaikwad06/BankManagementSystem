package service;

import dao.UserDetailsDAO;
import dao.UserDetailsDaoImpl;
import entities.UserDetails;

public class OpenAccountServiceImpl {

    private UserDetailsDAO userDetailsRepository = new UserDetailsDaoImpl();
    
//    public OpenAccountServiceImpl(UserDetailsDAO userDetailsRepository) {
//        this.userDetailsRepository = userDetailsRepository;
//    }

    public void saveUserDetails(UserDetails userDetails) {
        // Perform any necessary business logic here
        // For example, validate the data, generate additional fields, etc.

        // Save the UserDetails to the database using the repository
        userDetailsRepository.addUser(userDetails);
    }
}