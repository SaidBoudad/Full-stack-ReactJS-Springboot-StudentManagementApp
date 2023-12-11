package saidboudad.model;


import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "Student")
@Data
public class Student {

    @Id
    private String id;

    @NotBlank
    @Size(max=100)
    private String firstName;

    private String lastName;

    @NotBlank
    @Size(max=100)
    private String emailId;


}