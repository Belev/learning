package org.hibernate.learning.models;

import java.io.Serializable;

public class Order implements Serializable {
	private static final long serialVersionUID = -5116314207331229735L;
	
	private PersonComposite person;
	private Integer orderNumber;
	private Integer price;
	
	public Order() {
		// TODO Auto-generated constructor stub
	}

	public PersonComposite getPerson() {
		return person;
	}

	public void setPerson(PersonComposite person) {
		this.person = person;
	}

	public int getOrderNumber() {
		return orderNumber;
	}

	public void setOrderNumber(int orderNumber) {
		this.orderNumber = orderNumber;
	}

	public Integer getPrice() {
		return price;
	}

	public void setPrice(Integer price) {
		this.price = price;
	}

	@Override
	public int hashCode() {
		return 11 * this.orderNumber.hashCode() + 7	* this.person.getPersonId().hashCode();
	}

	@Override
	public boolean equals(Object obj) {
		if (obj == null) {
			return false;
		}

		if (!(obj instanceof Order)) {
			return false;
		}

		Order other = (Order) obj;

		return (this.person.getPersonId().equals(other.person.getPersonId()) 
				&& this.orderNumber.equals(other.orderNumber));
	}
}
