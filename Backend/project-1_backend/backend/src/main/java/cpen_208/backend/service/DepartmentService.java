package cpen_208.backend.service;

import cpen_208.backend.entity.Department;

import java.util.List;

public interface DepartmentService {

    Department getDepartmentById(Long id);

    List<Department> getAll();

}