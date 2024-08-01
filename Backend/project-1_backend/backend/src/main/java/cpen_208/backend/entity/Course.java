package cpen_208.backend.entity;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Builder
@Table(name = "courses")
public class Course {
    @Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String courseCode;

    @Column(nullable = false)
    private String courseName;

    @Column(nullable = false)
    private String lecturer;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "department", nullable = false)
    private Department department;

    @OneToMany(mappedBy = "course")
    @JsonIgnore
    List<StudentCourse> studentCourses;
}
