#include <iostream>
#include <numeric>

using namespace std;

class Person {
public:
    virtual void getdata() = 0;
    virtual void putdata() = 0;

protected:
    string name;
    unsigned int age;
};

class Professor : public Person {
public:
    Professor() {
        id = currentId++;
    }
    void getdata() {
        cin >> name >> age >> publications;
    }
    void putdata() {
        cout << name << ' ' << age << ' ' << publications << ' ' << id << endl;
    }
private:
    unsigned int id;
    unsigned int publications;
    static unsigned int currentId;
};

unsigned int Professor::currentId = 1u;

class Student : public Person {
public:
    Student() {
        id = currentId++;
    }
    void getdata() {
        cin >> name >> age;
        for (int i = 0; i < 6; ++i) {
            cin >> marks[i];
        }
    }
    void putdata() {
        cout << name << ' ' << age << ' ' << accumulate(begin(marks), end(marks), 0u) << ' ' << id << endl;
    }
private:
    unsigned int id;
    unsigned int marks[6];
    static unsigned int currentId;
};

unsigned int Student::currentId = 1u;

int main() {
    unsigned int peopleCount;
    cin >> peopleCount;

    Person* people[peopleCount];
    for (int i = 0; i < peopleCount; ++i) {
        unsigned int value;
        cin >> value;
        if (value == 1) {
            people[i] = new Professor();
        } else {
            people[i] = new Student();
        }
        people[i]->getdata();
    }

    for (int i = 0; i < peopleCount; ++i) {
        people[i]->putdata();
    }

    delete[] people;

    return 0;
}
