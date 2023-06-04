package model;

public class User {

    private Integer user_id;
    private String username;
    private String role;
    private String email;



    public User(String username, String role, String email) {

        this.username = username;
        this.role = role;
        this.email = email;
    }
    public Integer getuser_id() {

        return user_id;
    }

    public void setuser_id(Integer prev_id) {
        this.user_id = prev_id + 1;
    }
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }


}
