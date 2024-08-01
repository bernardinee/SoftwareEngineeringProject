package cpen_208.backend.dto;

import cpen_208.backend.entity.Department;
import cpen_208.backend.entity.StudentCourse;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Date;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class StudentDto {
    private Long id; // 10-digit id
    private Long studentId;
    private short pin; // 5-digit pin
    private String firstName;
    private String lastName;
    private Date dateOfBirth;
    private Department department;
    private String email;
    List<StudentCourse> studentCourses;
}
