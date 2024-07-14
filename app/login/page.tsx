/* export default function LoginPage() {
  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required />
      <button formAction={login}>Log in</button>
      <button formAction={signup}>Sign up</button>
    </form>
  );
} */

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import React from "react";
export default function Login() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8  ">
        {/* logo and title */}
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/* logo */}
          <div className="  flex justify-center">
            <div className="text-3xl">sometext</div>
          </div>
          {/* title */}
          <h2 className=" mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Log into your account
          </h2>
        </div>
        {/* form wrapper */}
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {/* form */}
          <form className="space-y-6">
            {/*action={login}*/}
            {/* email */}
            <div>
              {/* label */}
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-white"
              >
                Email address
              </label>
              {/* input */}
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full bg-slate-600 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-slate-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {/* password */}
            <div>
              {/* label */}
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password "
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Password
                </label>
              </div>
              {/* input */}
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block bg-slate-600 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-slate-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {/* sign in button */}
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-500 hover:bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
          {/* login link */}
          <p className="mt-10 text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <a
              href="./signup"
              className="font-semibold leading-6 text-indigo-400 hover:text-indigo-500"
            >
              Create Account
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
