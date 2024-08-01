package cpen_208.backend.repository;

import cpen_208.backend.entity.StudentCourse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface StudentCourseRepository extends JpaRepository<StudentCourse, Long> {
    @Query("SELECT sc FROM StudentCourse sc WHERE sc.student.id = :studentId")
    List<StudentCourse> findByStudentId(@Param("studentId") Long studentId);
    @Query("SELECT sc FROM StudentCourse sc WHERE sc.student.id = :studentId AND sc.course.id = :courseId")
    Optional<StudentCourse> findByStudentIdAndCourseId(@Param("studentId") Long studentId, @Param("courseId") Long courseId);
}
