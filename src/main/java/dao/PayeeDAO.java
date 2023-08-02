package dao;

import java.util.List;

public interface PayeeDAO {
    void addPayee(Payee payee);
    Payee getPayeeById(int payeeId);
    List<Payee> getPayeesByUserId(int userId);
    void updatePayee(Payee payee);
    void deletePayee(int payeeId);
}