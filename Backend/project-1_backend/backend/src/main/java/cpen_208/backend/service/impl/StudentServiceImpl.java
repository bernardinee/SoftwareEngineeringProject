package cpen_208.backend.service.impl;

import cpen_208.backend.dto.StudentDto;
import cpen_208.backend.entity.Student;
import cpen_208.backend.exception.ResourceNotFoundException;
import cpen_208.backend.mapper.StudentMapper;
import cpen_208.backend.repository.StudentRepository;
import cpen_208.backend.service.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;


@Service
@RequiredArgsConstructor
public class StudentServiceImpl implements StudentService {
    @Autowired
   private StudentRepository studentRepository;

    @Override
    public StudentDto createStudent(StudentDto studentDto){

        Student student = StudentMapper.mapToStudent(studentDto);
        Student savedStudent = studentRepository.save(student);

        return StudentMapper.mapToStudentDto(studentRepository.findById(savedStudent.getId()).orElse(savedStudent));
    }

    @Override
    public StudentDto getStudentById(Long studentId){
        Student student = studentRepository.findById(studentId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Student with the given Id doesn't exist: " + studentId));
        return StudentMapper.mapToStudentDto(student);
    }

    @Override
    public List<StudentDto> getAllStudents() {
        List<Student> students = studentRepository.findAll();
        return students.stream().map((student) -> StudentMapper.mapToStudentDto(student))
                .collect(Collectors.toList());
    }

    @Override
    public StudentDto updateStudent(Long studentId, StudentDto updatedStudent) {

        Student student = studentRepository.findById(studentId).orElseThrow(
                () -> new ResourceNotFoundException("Student with the given Id doesn't exist: " + studentId)
        );

        student.setFirstName(updatedStudent.getFirstName());
        student.setLastName(updatedStudent.getLastName());
        student.setPin(updatedStudent.getPin());
        student.setDateOfBirth(updatedStudent.getDateOfBirth());
        student.setDepartment(updatedStudent.getDepartment());
        student.setEmail(updatedStudent.getEmail());

        Student updatedStudentObj = studentRepository.save(student);

        return StudentMapper.mapToStudentDto(updatedStudentObj);
    }

    @Override
    public void deleteStudent(Long studentId) {
        Student student = studentRepository.findById(studentId).orElseThrow(
                () -> new ResourceNotFoundException("Student with the given Id doesn't exist: " + studentId)
        );

        studentRepository.deleteById(studentId);
    }
}
