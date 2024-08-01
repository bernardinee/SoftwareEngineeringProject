package cpen_208.backend.repository;

import cpen_208.backend.entity.Department;
import cpen_208.backend.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

@Component
public interface DepartmentRepository extends JpaRepository<Department, Long> {
}
