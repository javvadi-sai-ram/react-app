// AuthStore/AuthStore.test.js
/*global expect*/
/*global jest*/










//import Cookie from "js-cookie";

import { API_SUCCESS, API_INITIAL, API_FAILED, API_FETCHING } from "@ib/api-constants";

import AuthAPI from "../../services/AuthServices";
import getUserSignInResponse from "../../fixtures/getUserSignInResponse.json";

import AuthStore from ".";

describe("AuthStore Tests", () => {
  let authAPI;
  let authStore;

  beforeEach(() => {
    authAPI = new AuthAPI();
    authStore = new AuthStore(authAPI);
  });

  it("should test initialising auth store", () => {
    expect(authStore.getUserSignInAPIStatus).toBe(API_INITIAL);
    expect(authStore.getUserSignInAPIError).toBe(null);
  });

  it("should test userSignInAPI data fetching state", () => {
    
    const mockLoadingPromise = new Promise(function(resolve, reject) {});
    const mockSignInAPI = jest.fn();
    mockSignInAPI.mockReturnValue(mockLoadingPromise);
    authAPI.signInAPI = mockSignInAPI;

    authStore.userSignIn();
    expect(authStore.getUserSignInAPIStatus).toBe(API_FETCHING);
  });

  it("should test userSignInAPI success state", async () => {
    
    const mockSuccessPromise = new Promise(function(resolve, reject) {
      resolve(getUserSignInResponse);
    });
    const mockSignInAPI = jest.fn();
    mockSignInAPI.mockReturnValue(mockSuccessPromise);
    authAPI.signInAPI = mockSignInAPI;

    await authStore.userSignIn();
    expect(authStore.getUserSignInAPIStatus).toBe(API_SUCCESS);
    
  });

  it("should test userSignInAPI failure state", async () => {

  //  const mockFailurePromise = new Promise(function(resolve, reject) {
//  reject(new Error("error"));
 //   });

 //   const mockSignInAPI = jest.fn();
 //   mockSignInAPI.mockReturnValue(mockFailurePromise);
  //  authAPI.signInAPI = mockSignInAPI;
    
    
   jest.spyOn(authAPI, 'signInAPI').mockImplementation(() => Promise.reject())



    authStore = new AuthStore(authAPI);
    await authStore.userSignIn();
   
    expect(authStore.getUserSignInAPIStatus).toBe(API_FAILED);
    //expect(authStore.getUserSignInAPIError).toBe("error");

  });


  it("should test user sign-out", () => {
    authStore.userSignOut();
    expect(authStore.getUserSignInAPIStatus).toBe(API_INITIAL);
    expect(authStore.getUserSignInAPIError).toBe(null);
  });
});