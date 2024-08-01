package cpen_208.backend.entity;

import jakarta.persistence.*;
import lombok.*;

import java.sql.Date;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "StudentInfo")

public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "student_id")
    private Long studentId;

    @Column(name = "pin")
    private short pin; // 5-digit pin

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "date_of_birth")
    private Date dateOfBirth;

    @JoinColumn(name = "department", nullable = false)
    @ManyToOne
    private Department department;

    @Column(name = "email_id", nullable = false, unique = true)
    private String email;

    @OneToMany(mappedBy = "student")
    List<StudentCourse> studentCourses;

}
