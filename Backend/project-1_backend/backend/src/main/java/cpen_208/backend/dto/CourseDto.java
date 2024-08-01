package cpen_208.backend.dto;


import cpen_208.backend.entity.Department;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CourseDto {

    private Long id;
    private String courseCode;
    private String courseName;
    private String lecturer;
    private Department department;
}
