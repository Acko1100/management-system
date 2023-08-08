package ac.rs.singidunum.springboot;

import ac.rs.singidunum.springboot.model.Employee;
import ac.rs.singidunum.springboot.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringbootBackendIsoApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootBackendIsoApplication.class, args);
	}

	@Autowired
	private EmployeeRepository employeeRepository;
	@Override
	public void run(String... args) throws Exception {
//		Employee employee = new Employee();
//		employee.setFirstName("Aleksandar");
//		employee.setLastName("Radivojevic");
//		employee.setEmailId("aleksandar.radivojevic.201@singimail.rs");
//		employeeRepository.save(employee);
//
//		Employee employee1 = new Employee();
//		employee1.setFirstName("Danilo");
//		employee1.setLastName("Radivojevic");
//		employee1.setEmailId("danilo.radivojevic.20@singimail.rs");
//		employeeRepository.save(employee1);

	}
}
