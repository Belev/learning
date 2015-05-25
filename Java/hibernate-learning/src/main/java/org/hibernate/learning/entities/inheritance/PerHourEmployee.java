package org.hibernate.learning.entities.inheritance;

public class PerHourEmployee extends Employee{
	private Double hourPayPrice;
	
	public PerHourEmployee() {
		// TODO Auto-generated constructor stub
	}

	public Double getHourPayPrice() {
		return hourPayPrice;
	}

	public void setHourPayPrice(Double hourPayPrice) {
		this.hourPayPrice = hourPayPrice;
	}
}
