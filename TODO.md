# TODO: Implement Signup to Login Redirect Flow

## Tasks
- [x] Modify `src/component/signup/signup.tsx`: In the `handleSubmit` function, after successful registration, call `logout()` to clear the authentication state, then navigate to "/login".
- [x] Test the signup flow to ensure it redirects to login without auto-login.
- [x] Verify that login then allows access to protected pages.
