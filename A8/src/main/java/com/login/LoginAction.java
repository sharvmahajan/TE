package com.login;

import javax.servlet.http.*;
import org.apache.struts.action.*;

public class LoginAction extends Action {

    public ActionForward execute(ActionMapping mapping,
            ActionForm form,
            HttpServletRequest request,
            HttpServletResponse response) {

        LoginForm loginForm = (LoginForm) form;
        HttpSession session = request.getSession();
        // mark user as logged in
        session.setAttribute("user", "logged");
        // reset fields
        loginForm.setName("");
        loginForm.setMobile("");
        loginForm.setEmail("");

        return mapping.findForward("success");
    }
}