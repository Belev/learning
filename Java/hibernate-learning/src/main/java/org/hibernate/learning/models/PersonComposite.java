package org.hibernate.learning.models;

import org.hibernate.learning.models.compositeKeys.PersonId;

public class PersonComposite {
	private PersonId personId;
	
	public PersonComposite() {
		// TODO Auto-generated constructor stub
	}

	public PersonId getPersonId() {
		return personId;
	}

	public void setPersonId(PersonId personId) {
		this.personId = personId;
	}
}
