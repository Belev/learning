package org.hibernate.learning;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.learning.entities.Event;
import org.hibernate.learning.entities.Person;
import org.hibernate.learning.entities.inheritance.Employee;
import org.hibernate.learning.entities.inheritance.PerHourEmployee;
import org.hibernate.learning.entities.inheritance.RegularEmployee;
import org.hibernate.learning.util.HibernateUtil;

public class EntryPoint {

	public static void main(String[] args) {
		// person and event tests
		// Long eventId = createAndStoreEvent("Second event", new Date());
		// Long personId = createAndStorePerson("Petar", "Dimitrov");
		// addPersonToEvent(personId, eventId);
		// addEmailToPerson(1L, "belev@gmail.com");

		// update test
		// Long eventId = getFirstEventIdFromList();
		// updateEvent(eventId);
		
		// inheritance test
		// Long[] employeeIds = createAndStoreEmployees();

		HibernateUtil.closeSessionFactory();
		System.out.println("Ended successfully.");
	}

	private static Long createAndStoreEvent(String title, Date date) {
		Session session = HibernateUtil.getCurrentSession();
		session.beginTransaction();

		Event event = new Event();
		event.setTitle(title);
		event.setDate(date);
		session.save(event);

		session.getTransaction().commit();

		return event.getId();
	}

	private static List<Event> getAllEvents() {
		Session session = HibernateUtil.getCurrentSession();
		session.beginTransaction();

		List<Event> events = session.createQuery("from Event").list();

		session.getTransaction().commit();

		return events;
	}

	private static Long getFirstEventIdFromList() {
		return getAllEvents().get(0).getId();
	}

	private static void printEvents(List<Event> events) {
		for (Event event : events) {
			System.out.println("Event: " + event.getTitle() + " Time: "
					+ event.getDate());
		}
	}

	private static void updateEvent(Long eventId) {
		Session session = HibernateUtil.getCurrentSession();
		session.beginTransaction();
		
		Event event = (Event) session.load(Event.class, eventId);

		event.setTitle("My updated test event.");
		session.getTransaction().commit();
	}

	private static Long createAndStorePerson(String firstName, String lastName) {
		Session session = HibernateUtil.getCurrentSession();
		session.beginTransaction();

		Person person = new Person();
		person.setFirstName(firstName);
		person.setLastName(lastName);
		session.save(person);

		session.getTransaction().commit();

		return person.getId();
	}

	private static void addPersonToEvent(Long personId, Long eventId) {
		Session session = HibernateUtil.getCurrentSession();
		session.beginTransaction();

		Person person = (Person) session.load(Person.class, personId);
		Event event = (Event) session.load(Event.class, eventId);
		person.getEvents().add(event);

		session.getTransaction().commit();
	}

	private static void addEmailToPerson(Long personId, String emailAddress) {
		Session session = HibernateUtil.getCurrentSession();
		session.beginTransaction();

		Person person = (Person) session.load(Person.class, personId);
		person.getEmailAddresses().add(emailAddress);

		session.getTransaction().commit();
	}
	
	private static Long[] createAndStoreEmployees() {
		Session session = HibernateUtil.getCurrentSession();
		session.beginTransaction();
		
		List<Long> employeeIds = new ArrayList<Long>();
		
		Employee employee = new Employee();
		employee.setName("Employee");
		session.save(employee);
		
		RegularEmployee regularEmployee = new RegularEmployee();
		regularEmployee.setName("Regular employee");
		regularEmployee.setSalary(876.5);
		session.save(regularEmployee);
		
		PerHourEmployee perHourEmployee = new PerHourEmployee();
		perHourEmployee.setName("Per hour employee");
		perHourEmployee.setHourPayPrice(15.9);
		session.save(perHourEmployee);
		
		session.getTransaction().commit();
		
		employeeIds.add(employee.getId());
		employeeIds.add(regularEmployee.getId());
		employeeIds.add(perHourEmployee.getId());
		
		return (Long[]) employeeIds.toArray();
	}
}
