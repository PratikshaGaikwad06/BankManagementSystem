package dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.List;

import entities.UserDetails;

public class UserDetailsDaoImpl implements UserDetailsDAO{
Connection conn ; //GLOBAL 
	
	public UserDetailsDaoImpl() {
		try {
			//1. Load the Driver
			System.out.println("Trying to load the driver...");
				DriverManager.registerDriver(new org.hsqldb.jdbc.JDBCDriver());
			System.out.println("Driver loaded....");
			
			//2. Acquire the connection
			System.out.println("Trying to connect....");
			conn = 	DriverManager.getConnection("jdbc:hsqldb:hsql://localhost/xdb", "SA", "");
			System.out.println("Connected : "+ conn);
			
						
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	@Override
	public void addUser(UserDetails userDetails) {
		System.out.println("in Adduser Body");
		try {
			PreparedStatement pst = 
					conn.prepareStatement("INSERT INTO USERDETAILS(FIRSTNAME, LASTNAME) VALUES (?,?)");
			
			//pst.setInt(1, dept.getDepartmentNumber());
			pst.setString(1, userDetails.getFirstName());
			pst.setString(2, userDetails.getLastName());
			
			System.out.println("PreparedStatement is created : "+ pst);
			
			//4. execute that statement //  UR TABLENAME IS MYDEPT120
			int rows = pst.executeUpdate();
			
			System.out.println("Rows created : "+rows);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}

	@Override
	public UserDetails getUserById(int userId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<UserDetails> getAllUsers() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void updateUser(UserDetails userDetails) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteUser(int userId) {
		// TODO Auto-generated method stub
		
	}



}
