package cpen_208.backend.service.impl;

import cpen_208.backend.dto.StudentDto;
import cpen_208.backend.entity.Department;
import cpen_208.backend.entity.Student;
import cpen_208.backend.exception.ResourceNotFoundException;
import cpen_208.backend.mapper.StudentMapper;
import cpen_208.backend.repository.DepartmentRepository;
import cpen_208.backend.repository.StudentRepository;
import cpen_208.backend.service.DepartmentService;
import cpen_208.backend.service.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;


@Service
@RequiredArgsConstructor
public class DepartmentServiceImpl implements DepartmentService {
    @Autowired
   private DepartmentRepository departmentRepository;



    @Override
    public Department getDepartmentById(Long studentId){
        return departmentRepository.findById(studentId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Department with the given Id doesn't exist: " + studentId));
    }

    @Override
    public List<Department> getAll() {
        return departmentRepository.findAll();
    }


}
