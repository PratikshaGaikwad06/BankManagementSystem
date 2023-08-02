package dao;

import java.util.List;

public interface UserDetailsDAO {
    void addUser(UserDetails userDetails);
    UserDetails getUserById(int userId);
    List<UserDetails> getAllUsers();
    void updateUser(UserDetails userDetails);
    void deleteUser(int userId);
}
