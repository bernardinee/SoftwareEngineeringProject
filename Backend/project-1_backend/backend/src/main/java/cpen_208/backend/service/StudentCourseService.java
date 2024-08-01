package cpen_208.backend.service;

import cpen_208.backend.dto.CourseDto;
import cpen_208.backend.dto.StudentCourseDto;

import java.util.List;

public interface StudentCourseService {
    StudentCourseDto addCourseToStudent(StudentCourseDto studentCourseDto);
    void removeCourseFromStudent(Long studentId, Long courseId);
    List<CourseDto> getCoursesByStudentId(Long studentId);
}
