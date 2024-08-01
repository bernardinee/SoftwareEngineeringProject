package cpen_208.backend.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class StudentCourseDto {
    private Long id;
    private StudentDto studentDto;
    private CourseDto courseDto;
}
