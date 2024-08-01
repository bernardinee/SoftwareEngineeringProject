package cpen_208.backend.mapper;

import cpen_208.backend.dto.StudentDto;
import cpen_208.backend.entity.Student;
import cpen_208.backend.entity.StudentCourse;

public class StudentMapper {

    public static StudentDto mapToStudentDto(Student student){


        return new StudentDto(
                student.getId(),
                student.getStudentId(),
                student.getPin(),
                student.getFirstName(),
                student.getLastName(),
                student.getDateOfBirth(),
                student.getDepartment(),
                student.getEmail(),
                student.getStudentCourses()
        );
    }

    public static Student mapToStudent(StudentDto studentdto){
        return new Student(
                studentdto.getId(),
                studentdto.getStudentId(),
                studentdto.getPin(),
                studentdto.getFirstName(),
                studentdto.getLastName(),
                studentdto.getDateOfBirth(),
                studentdto.getDepartment(),
                studentdto.getEmail(),
                studentdto.getStudentCourses()
        );
    }
}