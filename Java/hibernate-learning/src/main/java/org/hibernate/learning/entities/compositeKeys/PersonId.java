package org.hibernate.learning.entities.compositeKeys;

import java.io.Serializable;

public class PersonId implements Serializable {
	private static final long serialVersionUID = 3762929445835253160L;
	
	private String firstName;
	private String lastName;
	
	public PersonId() {
		// TODO Auto-generated constructor stub
	}
	
	public String getFirstName() {
		return firstName;
	}
	
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	
	public String getLastName() {
		return lastName;
	}
	
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	
	private String getFullName() {
		return this.firstName + " " + this.lastName;
	}
	
	@Override
	public int hashCode() {
		return 13 * (this.firstName.hashCode() + this.lastName.hashCode());
	}
	
	@Override
	public boolean equals(Object obj) {
		if (obj == null) {
			return false;
		}
		
		if (!(obj instanceof PersonId)) {
			return false;
		}
		
		PersonId other = (PersonId) obj;
		
		return this.getFullName().equals(other.getFullName());
	}
}
