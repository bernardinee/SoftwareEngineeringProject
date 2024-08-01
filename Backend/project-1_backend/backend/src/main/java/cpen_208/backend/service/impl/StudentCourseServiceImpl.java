package cpen_208.backend.service.impl;

import cpen_208.backend.dto.CourseDto;
import cpen_208.backend.dto.StudentCourseDto;
import cpen_208.backend.entity.StudentCourse;
import cpen_208.backend.exception.ResourceNotFoundException;
import cpen_208.backend.mapper.StudentCourseMapper;
import cpen_208.backend.repository.CourseRepository;
import cpen_208.backend.repository.StudentCourseRepository;
import cpen_208.backend.repository.StudentRepository;
import cpen_208.backend.service.StudentCourseService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class StudentCourseServiceImpl implements StudentCourseService {

    private final StudentCourseRepository studentCourseRepository;
    private final StudentRepository studentRepository;
    private final CourseRepository courseRepository;

    @Override
    public StudentCourseDto addCourseToStudent(StudentCourseDto studentCourseDto) {


        StudentCourse studentCourse = StudentCourseMapper.mapStudentCourseDtoToSC(studentCourseDto);
        var course=courseRepository.findById(studentCourseDto.getStudentDto().getId());
        course.ifPresent(studentCourse::setCourse);
        StudentCourse savedStudentCourse = studentCourseRepository.save(studentCourse);
        studentCourseDto.setId(savedStudentCourse.getId());
        return studentCourseDto;
    }

    @Override
    public void removeCourseFromStudent(Long studentId, Long courseId) {
        StudentCourse studentCourse = studentCourseRepository.findByStudentIdAndCourseId(studentId, courseId)
                .orElseThrow(() -> new ResourceNotFoundException("Enrollment not found for student ID: " + studentId + " and course ID: " + courseId));

        studentCourseRepository.delete(studentCourse);
    }

    @Override
    public List<CourseDto> getCoursesByStudentId(Long studentId) {
        List<StudentCourse> studentCourses = studentCourseRepository.findByStudentId(studentId);
        return studentCourses.stream()
                .map(studentCourse ->  StudentCourseMapper.mapCourseToDto(studentCourse.getCourse()))
                .collect(Collectors.toList());
    }
}
