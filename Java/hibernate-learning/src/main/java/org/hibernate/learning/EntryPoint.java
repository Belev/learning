package org.hibernate.learning;

import java.util.Date;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.learning.entities.Event;
import org.hibernate.learning.entities.Person;
import org.hibernate.learning.util.HibernateUtil;

public class EntryPoint {

	public static void main(String[] args) {
		// Long eventId = createAndStoreEvent("Second event", new Date());
		// Long personId = createAndStorePerson("Petar", "Dimitrov");
		// addPersonToEvent(personId, eventId);
		 addEmailToPerson(1L, "belev@gmail.com");
		
		
		HibernateUtil.getSessionFactory().close();
	}

	private static Long createAndStoreEvent(String title, Date theDate) {
		Session session = HibernateUtil.getSessionFactory().getCurrentSession();
		session.beginTransaction();

		Event event = new Event();
		event.setTitle(title);
		event.setDate(theDate);
		session.save(event);

		session.getTransaction().commit();

		return event.getId();
	}

	private static Long createAndStorePerson(String firstName, String lastName) {
		Session session = HibernateUtil.getSessionFactory().getCurrentSession();
		session.beginTransaction();

		Person person = new Person();
		person.setFirstName(firstName);
		person.setLastName(lastName);
		session.save(person);

		session.getTransaction().commit();

		return person.getId();
	}

	private static List<Event> getAllEvents() {
		Session session = HibernateUtil.getSessionFactory().getCurrentSession();
		session.beginTransaction();

		List<Event> events = session.createQuery("from Event").list();

		session.getTransaction().commit();

		return events;
	}

	private static void printEvents(List<Event> events) {
		for (Event event : events) {
			System.out.println("Event: " + event.getTitle() + " Time: "
					+ event.getDate());
		}
	}

	private static void addPersonToEvent(Long personId, Long eventId) {
		Session session = HibernateUtil.getSessionFactory().getCurrentSession();
		session.beginTransaction();

		Person person = (Person) session.load(Person.class, personId);
		Event event = (Event) session.load(Event.class, eventId);
		person.getEvents().add(event);

		session.getTransaction().commit();
	}

	private static void addEmailToPerson(Long personId, String emailAddress) {
		Session session = HibernateUtil.getSessionFactory().getCurrentSession();
		session.beginTransaction();

		Person person = (Person) session.load(Person.class, personId);
		person.getEmailAddresses().add(emailAddress);

		session.getTransaction().commit();
	}
}
