package cpen_208.backend;

import cpen_208.backend.dto.StudentDto;
import cpen_208.backend.entity.Student;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {
		StudentDto student= new StudentDto();
		SpringApplication.run(BackendApplication.class, args);
		System.out.println("Hello world");
	}

}
