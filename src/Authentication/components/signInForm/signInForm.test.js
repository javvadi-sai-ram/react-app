import React from "react";
import { render } from "@testing-library/react";
import SignInForm from ".";

/*global expect*/


describe("SignInForm", () => {
  it("should render typed username", () => {
    const username = "test-user";
    const { getByPlaceholderText } = render(
      <SignInForm userName={username} onChangeuserNames={() => {}} />
    );
    const usernameField = getByPlaceholderText("UserName");
    expect(usernameField.value).toBe(username);
  });
  
  
  it("should render typed password",()=>{
      const password="test-password";
      const {getByPlaceholderText}=render(
          <SignInForm password={password} onChangepasswords={()=>{}}/>
          );
      const passwordField=getByPlaceholderText("Password");
      expect(passwordField.value).toBe(password);
  });
  
  it("should render given error message", () => {
    const { getByText } = render(
      <SignInForm errorMessage="Network error" />
    );

    getByText(/Network error/i);
  });
});

