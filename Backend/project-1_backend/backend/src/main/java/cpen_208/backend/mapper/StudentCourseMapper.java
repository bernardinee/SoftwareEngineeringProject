package cpen_208.backend.mapper;

import cpen_208.backend.dto.CourseDto;
import cpen_208.backend.dto.StudentCourseDto;
import cpen_208.backend.entity.Course;
import cpen_208.backend.entity.StudentCourse;

public class StudentCourseMapper {

    public static StudentCourseDto mapToStudentCourseDto(StudentCourse studentCourse) {
        StudentCourseDto dto = new StudentCourseDto();
        dto.setId(studentCourse.getId());
        dto.setStudentDto(StudentMapper.mapToStudentDto(studentCourse.getStudent()));
        dto.setCourseDto(mapCourseToDto(studentCourse.getCourse()));
        return dto;
    }

    public static StudentCourse mapToStudentCourse(StudentCourseDto studentCourseDto) {
        StudentCourse studentCourse = new StudentCourse();
        studentCourse.setId(studentCourseDto.getId());
        // Mapping for Student and Course should be handled elsewhere as we need complete entities
        return studentCourse;
    }

    public static CourseDto mapCourseToDto(Course course){
       return CourseDto.builder()
                .courseName(course.getCourseName())
                .courseCode(course.getCourseCode())
                .id(course.getId())
                .build();
    }

    public static Course mapCourseDtoToCourse(CourseDto courseDto){
        return Course.builder()
                .courseCode(courseDto.getCourseCode())
                .courseName(courseDto.getCourseName())
                .lecturer(courseDto.getLecturer())
                //.department(courseDto.getDepartment())
                .build();
    }

    public static StudentCourse mapStudentCourseDtoToSC(StudentCourseDto studentCourseDto){
       return StudentCourse.builder()
                .student(StudentMapper.mapToStudent(studentCourseDto.getStudentDto()))
                .course(mapCourseDtoToCourse(studentCourseDto.getCourseDto()))
                .build();
    }
}
