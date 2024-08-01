package cpen_208.backend.controller;

import cpen_208.backend.dto.StudentDto;
import cpen_208.backend.entity.Department;
import cpen_208.backend.service.DepartmentService;
import cpen_208.backend.service.StudentService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/departments")
public class DepartmentController {
    @Autowired
    private DepartmentService departmentService;



    @GetMapping("{id}")
    public ResponseEntity<Department> getStudentById(@PathVariable("id") Long id) {
        Department department = departmentService.getDepartmentById(id);

        return ResponseEntity.ok(department);
    }

    // Build get all students Rest API
    @GetMapping
    public ResponseEntity<List<Department>> getAll(){
        List<Department> departments = departmentService.getAll();

        return ResponseEntity.ok(departments);
    }


}
