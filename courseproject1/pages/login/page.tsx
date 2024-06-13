"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


const NextLoginPage = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [sessionStatus, setSessionStatus] = useState<string>("loading");

  useEffect(() => {
    const fakeSessionCheck = () => {
      setTimeout(() => {
        setSessionStatus("unauthenticated");
      }, 1000);
    };

    fakeSessionCheck();
  }, []);

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.replace("/dashboard");
    }
  }, [sessionStatus, router]);

  const isValidStudentId = (id: string): boolean => {
    const idRegex = /^\d+$/;
    return idRegex.test(id);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const studentId = form.studentId.value;
    const password = form.password.value;

    if (!isValidStudentId(studentId)) {
      setError("Student ID is invalid");
      alert("Student ID is invalid");
      return;
    }

    if (!password || password.length < 8) {
      setError("Password is invalid");
      alert("Password is invalid");
      return;
    }

    
    const res = { error: studentId !== "12345678" || password !== "password" };

    if (res.error) {
      setError("Invalid student ID or password");
      alert("Invalid student ID or password");
    } else {
      setError("");
      alert("Successful login");
      setSessionStatus("authenticated");
    }
  };

  if (sessionStatus === "loading") {
    return <h1>Loading...</h1>;
  }

  const styles: { [key: string]: React.CSSProperties } = {
    generalReset: {
      boxSizing: 'border-box',
      WebkitBoxSizing: 'border-box',
    },
    body: {
      margin: 0,
      padding: 0,
      color: '#222222',
      backgroundColor: '#f0f0f0', 
      overflowX: 'hidden',
      fontFamily: "'Muli', sans-serif, -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, sans-serif",
    },
    a: {
      color: 'inherit',
      outline: 'none',
      textDecoration: 'none',
    },
    aHover: {
      textDecoration: 'underline',
    },
    loginContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      // backgroundImage: url('/moroccan-flower.png'), 
      // backgroundSize: 'cover',
      // backgroundPosition: 'center',
    },
    logoContainer: {
      position: 'absolute',
      top: '4rem',
      right: '4rem',
    },
    schoolLogo: {
      height: '4rem',
      width: '4rem',
      borderRadius: '50%',
      border: '2px solid #8B4513',
    },
    loginHeader: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    loginHeaderH2: {
      marginTop: '1.5rem',
      fontSize: '2rem',
      textAlign: 'center',
      color: '#8B4513',
    },
    loginFormContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },
    loginFormWrapper: {
      backgroundColor: '#ffffff', 
      padding: '50px',
      color: '#222222', 
      borderRadius: '3px',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    },
    loginFormWrapperSmall: {
      padding: '30px 20px',
    },
    loginForm: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
    },
    label: {
      fontSize: '1rem',
      fontWeight: 'bold',
      color: '#222222', 
    },
    inputContainer: {
      marginTop: '0.5rem',
    },
    inputField: {
      width: '100%',
      padding: '15px',
      fontSize: '16px',
      background: '#f0f0f0', 
      border: '1px solid rgba(0, 0, 0, 0.1)',
      borderRadius: '3px',
      marginBottom: '15px',
      color: '#222222', 
      transition: 'background 0.3s',
    },
    inputFieldHover: {
      background: '#e0e0e0', 
    },
    inputFieldFocus: {
      background: '#ffffff',
      color: '#222222',
      borderColor: '#4a304d',
      boxShadow: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    },
    formActions: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    rememberMeContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    checkbox: {
      marginRight: '0.5rem',
    },
    checkboxLabel: {
      fontSize: '0.875rem',
      color: '#222222', 
    },
    forgotPasswordContainer: {
      textAlign: 'right',
    },
    forgotPassword: {
      fontSize: '0.875rem',
      color: '#8B4513',
      textDecoration: 'none',
    },
    submitButton: {
      width: '100%',
      padding: '18px',
      fontSize: '20px',
      backgroundColor: '#ffb37b',
      border: '1px solid rgba(0, 0, 0, 0.1)',
      borderRadius: '3px',
      cursor: 'pointer',
      color: 'black',
      marginTop: '20px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    },
    submitButtonHover: {
      opacity: '0.9',
    },
    errorMessage: {
      color: 'red',
      textAlign: 'center',
      marginTop: '1rem',
    },
    signUpContainer: {
      marginTop: '1rem',
      textAlign: 'center',
    },
    signUpButton: {
      backgroundColor: '#a37d4b',
      color: '#ffffff',
      padding: '10px 20px',
      borderRadius: '3px',
      cursor: 'pointer',
      textDecoration: 'none',
      display: 'inline-block',
      marginTop: '10px',
    },
    signUpButtonHover: {
      opacity: '0.8',
    },
  };

  const handleSignUp = () => {
    router.push("/register"); 
  };

  return (
    sessionStatus !== "authenticated" && (
      <div className="bg-custom bg-cover bg-center h-64 w-full" style={styles.loginContainer}>
        <div style={styles.logoContainer}>
          {/* <img
            src="C:\Users\Bernardine Adusei\Desktop\MyWork\DevImages\delve.png"
            alt="School Logo"
            style={styles.schoolLogo}
          /> */}
        </div>
        <div style={styles.loginHeader}>
          <h2 style={styles.loginHeaderH2}>
            Sign In
          </h2>
        </div>

        <div style={styles.loginFormContainer}>
          <div style={styles.loginFormWrapper}>
            <form style={styles.loginForm} onSubmit={handleSubmit}>
              <div>
                <label htmlFor="studentId" style={styles.label}>
                  Student ID
                </label>
                <div style={styles.inputContainer}>
                  <input
                    id="studentId"
                    name="studentId"
                    type="text"
                    autoComplete="student-id"
                    required
                    style={styles.inputField}
                    onMouseOver={(e) => e.currentTarget.style.background = styles.inputFieldHover.background as string}
                    onMouseOut={(e) => e.currentTarget.style.background = styles.inputField.background as string}
                    onFocus={(e) => {
                      e.currentTarget.style.background = styles.inputFieldFocus.background as string;
                      e.currentTarget.style.color = styles.inputFieldFocus.color as string;
                      e.currentTarget.style.borderColor = styles.inputFieldFocus.borderColor as string;
                      e.currentTarget.style.boxShadow = styles.inputFieldFocus.boxShadow as string;
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.background = styles.inputField.background as string;
                      e.currentTarget.style.color = styles.inputField.color as string;
                      e.currentTarget.style.borderColor = styles.inputField.border as string;
                      e.currentTarget.style.boxShadow = '';
                    }}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" style={styles.label}>
                  Password
                </label>
                <div style={styles.inputContainer}>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    style={styles.inputField}
                    onMouseOver={(e) => e.currentTarget.style.background = styles.inputFieldHover.background as string}
                    onMouseOut={(e) => e.currentTarget.style.background = styles.inputField.background as string}
                    onFocus={(e) => {
                      e.currentTarget.style.background = styles.inputFieldFocus.background as string;
                      e.currentTarget.style.color = styles.inputFieldFocus.color as string;
                      e.currentTarget.style.borderColor = styles.inputFieldFocus.borderColor as string;
                      e.currentTarget.style.boxShadow = styles.inputFieldFocus.boxShadow as string;
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.background = styles.inputField.background as string;
                      e.currentTarget.style.color = styles.inputField.color as string;
                      e.currentTarget.style.borderColor = styles.inputField.border as string;
                      e.currentTarget.style.boxShadow = '';
                    }}
                  />
                </div>
              </div>

              <div style={styles.formActions}>
                <div style={styles.rememberMeContainer}>
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    style={styles.checkbox}
                  />
                  <label htmlFor="remember-me" style={styles.checkboxLabel}>
                    Remember me
                  </label>
                </div>

                <div style={styles.forgotPasswordContainer}>
                  <a href="#" style={styles.forgotPassword}>
                    Forgot password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  style={styles.submitButton}
                  onMouseOver={(e) => e.currentTarget.style.opacity = styles.submitButtonHover.opacity as string}
                  onMouseOut={(e) => e.currentTarget.style.opacity = ''}
                >
                  Sign in
                </button>
              </div>
            </form>

            <p style={styles.errorMessage}>
              {error && error}
            </p>
            <div style={styles.signUpContainer}>
              <button
                style={styles.signUpButton}
                onClick={handleSignUp}
                onMouseOver={(e) => e.currentTarget.style.opacity = styles.signUpButtonHover.opacity as string}
                onMouseOut={(e) => e.currentTarget.style.opacity = ''}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default NextLoginPage;
