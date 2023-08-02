package dao;

import java.util.List;

public interface TransactionDAO {
    void addTransaction(Transaction transaction);
    Transaction getTransactionById(int transactionId);
    List<Transaction> getTransactionsByUserId(int userId);
    void updateTransaction(Transaction transaction);
    void deleteTransaction(int transactionId);
}