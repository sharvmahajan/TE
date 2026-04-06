package com.example;

import com.opensymphony.xwork2.ActionSupport;

public class LoginAction extends ActionSupport {

    private String name;
    private String mobile;
    private String email;

    public String execute() {
        return SUCCESS;
    }

    public void validate() {

        if(name == null || name.trim().equals("")) {
            addFieldError("name","Name cannot be empty");
        }
        else if(!name.matches("[a-zA-Z ]+")) {
            addFieldError("name","Enter valid name");
        }

        if(mobile == null || mobile.trim().equals("")) {
            addFieldError("mobile","Mobile number cannot be empty");
        }
        else if(!mobile.matches("[0-9]{10}")) {
            addFieldError("mobile","Enter valid 10 digit mobile number");
        }

        if(email == null || email.trim().equals("")) {
            addFieldError("email","Email cannot be empty");
        }
        else if(!email.matches("^[A-Za-z0-9+_.-]+@(.+)$")) {
            addFieldError("email","Enter valid email id");
        }
    }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getMobile() { return mobile; }
    public void setMobile(String mobile) { this.mobile = mobile; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
}