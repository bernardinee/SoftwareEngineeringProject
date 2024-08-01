package cpen_208.backend.controller;

import cpen_208.backend.dto.CourseDto;
import cpen_208.backend.dto.StudentCourseDto;
import cpen_208.backend.service.StudentCourseService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@Slf4j
@RestController
@RequestMapping("/api/student-courses")
@AllArgsConstructor
public class StudentCourseController {

    private final StudentCourseService studentCourseService;

    @PostMapping
    public ResponseEntity<StudentCourseDto> addCourseToStudent(@RequestBody StudentCourseDto studentCourseDto) {
        log.info("Request Body ::::::::::: {}",studentCourseDto.toString());
        StudentCourseDto sCDto = studentCourseService.addCourseToStudent(studentCourseDto);
        return ResponseEntity.ok(sCDto);
    }

    @DeleteMapping
    public ResponseEntity<Void> removeCourseFromStudent(@RequestParam Long studentId, @RequestParam Long courseId) {
        studentCourseService.removeCourseFromStudent(studentId, courseId);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/student/{studentId}")
    public ResponseEntity<List<CourseDto>> getCoursesByStudentId(@PathVariable Long studentId) {
        List<CourseDto> studentCourses = studentCourseService.getCoursesByStudentId(studentId);
        return ResponseEntity.ok(studentCourses);
    }
}
