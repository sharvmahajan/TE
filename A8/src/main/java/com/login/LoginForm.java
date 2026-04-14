package com.login;

import javax.servlet.http.HttpServletRequest;
import org.apache.struts.action.ActionForm;
import org.apache.struts.action.ActionErrors;
import org.apache.struts.action.ActionMapping;
import org.apache.struts.action.ActionMessage;

public class LoginForm extends ActionForm {

    private String name;
    private String mobile;
    private String email;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public ActionErrors validate(ActionMapping mapping,
            HttpServletRequest request) {

        ActionErrors errors = new ActionErrors();

        // run validation only after form submission
        if(request.getMethod().equalsIgnoreCase("POST")) {

            if(name == null || name.trim().equals(""))
                errors.add("name", new ActionMessage("error.name"));

            if(mobile == null || !mobile.matches("\\d{10}"))
                errors.add("mobile", new ActionMessage("error.mobile"));

            if (email == null || !email.contains("@") || email.lastIndexOf('.') < email.indexOf('@'))
                errors.add("email", new ActionMessage("error.email"));
        }

        return errors;
    }
    @Override
    public void reset(ActionMapping mapping, HttpServletRequest request) {
        name = null;
        mobile = null;
        email = null;
    }
}