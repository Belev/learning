package org.hibernate.learning.entities.inheritance;

public class RegularEmployee extends Employee {
	private Double salary;
	
	public RegularEmployee() {
		// TODO Auto-generated constructor stub
	}

	public Double getSalary() {
		return salary;
	}

	public void setSalary(Double salary) {
		this.salary = salary;
	}
}
