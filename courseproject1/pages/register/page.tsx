import React, { useEffect, useState, CSSProperties } from "react";
import { useRouter } from "next/router";

const RegisterPage = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const sessionStatus = localStorage.getItem("sessionStatus");
    if (sessionStatus === "authenticated") {
      router.replace("/dashboard");
    }
  }, [router]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const studentId = e.currentTarget.studentId.value;
    const firstName = e.currentTarget.firstName.value;
    const lastName = e.currentTarget.lastName.value;
    const middleInitial = e.currentTarget.middleInitial.value;
    const dateOfBirth = e.currentTarget.dateOfBirth.value;
    const age = e.currentTarget.age.value;
    const email = e.currentTarget.email.value;
    const phoneNumber = e.currentTarget.phoneNumber.value;
    const address = e.currentTarget.address.value;
    const gender = e.currentTarget.gender.value;

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          studentId,
          firstName,
          lastName,
          middleInitial,
          dateOfBirth,
          age,
          email,
          phoneNumber,
          address,
          gender,
        }),
      });
      if (res.status === 400) {
        setError("The email is already in use");
      }
      if (res.status === 200) {
        setError("");
        router.push("/login");
      }
    } catch (error) {
      setError("Error, try again");
      console.log(error);
    }
  };

  const styles: { [key: string]: CSSProperties } = {
    body: {
      margin: 0,
      padding: 0,
      color: "#222222",
      backgroundColor: "#f0f0f0",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
      overflowX: "hidden",
      fontFamily: "'Muli', sans-serif, -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, sans-serif",
    },
    loginContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
    },
    logoContainer: {
      position: "absolute",
      top: "4rem",
      right: "4rem",
    },
    schoolLogo: {
      height: "4rem",
      width: "4rem",
      borderRadius: "50%",
      border: "2px solid #8B4513",
    },
    loginHeader: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#8B4513",
    },
    loginFormContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
    loginFormWrapper: {
      backgroundColor: "#ffffff",
      padding: "50px",
      color: "#222222",
      borderRadius: "3px",
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    },
    loginForm: {
      display: "flex",
      flexDirection: "column",
      gap: "1.5rem",
    },
    label: {
      fontSize: "1rem",
      fontWeight: "bold",
      color: "#333333",
    },
    inputContainer: {
      marginTop: "0.5rem",
    },
    inputField: {
      width: "100%",
      padding: "15px",
      fontSize: "16px",
      background: "#f5f5f5",
      border: "1px solid #cccccc",
      borderRadius: "3px",
      marginBottom: "15px",
      color: "#333333",
      transition: "background 0.3s",
    },
    inputFieldFocus: {
      background: "#ffffff",
      color: "#222222",
      borderColor: "#8B4513",
      boxShadow: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
    },
    formActions: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    rememberMeContainer: {
      display: "flex",
      alignItems: "center",
    },
    checkbox: {
      marginRight: "0.5rem",
    },
    checkboxLabel: {
      fontSize: "0.875rem",
      color: "#333333",
    },
    forgotPasswordContainer: {
      textAlign: "right",
    },
    forgotPassword: {
      fontSize: "0.875rem",
      color: "#8B4513",
      textDecoration: "none",
    },
    submitButton: {
      width: "100%",
      padding: "18px",
      fontSize: "20px",
      backgroundColor: "#ffb37b",
      border: "1px solid rgba(0, 0, 0, 0.1)",
      borderRadius: "3px",
      cursor: "pointer",
      color: "black",
      marginTop: "20px",
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    },
    errorMessage: {
      color: "red",
      textAlign: "center",
      marginTop: "1rem",
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.loginContainer}>
        <div style={styles.logoContainer}>
          {/* <Image src="../DevImages/moroccan-flower.png" alt="star logo" width={50} height={50} style={styles.schoolLogo} /> */}
        </div>
        <div style={styles.loginHeader}>
          <h2 style={{ marginTop: "1.5rem", fontSize: "2rem", textAlign: "center" }}>Sign Up</h2>
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
                    autoComplete="studentId"
                    required
                    style={styles.inputField}
                    onFocus={(e) => {
                      Object.assign(e.target.style, styles.inputFieldFocus);
                    }}
                    onBlur={(e) => {
                      Object.assign(e.target.style, styles.inputField);
                    }}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="firstName" style={styles.label}>
                  First Name
                </label>
                <div style={styles.inputContainer}>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    autoComplete="firstName"
                    required
                    style={styles.inputField}
                    onFocus={(e) => {
                      Object.assign(e.target.style, styles.inputFieldFocus);
                    }}
                    onBlur={(e) => {
                      Object.assign(e.target.style, styles.inputField);
                    }}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="lastName" style={styles.label}>
                  Last Name
                </label>
                <div style={styles.inputContainer}>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    autoComplete="lastName"
                    required
                    style={styles.inputField}
                    onFocus={(e) => {
                      Object.assign(e.target.style, styles.inputFieldFocus);
                    }}
                    onBlur={(e) => {
                      Object.assign(e.target.style, styles.inputField);
                    }}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" style={styles.label}>
                  Email
                </label>
                <div style={styles.inputContainer}>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    style={styles.inputField}
                    onFocus={(e) => {
                      Object.assign(e.target.style, styles.inputFieldFocus);
                    }}
                    onBlur={(e) => {
                      Object.assign(e.target.style, styles.inputField);
                    }}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="middleInitial" style={styles.label}>
                  Middle Initial
                </label>
                <div style={styles.inputContainer}>
                  <input
                    id="middleInitial"
                    name="middleInitial"
                    type="text"
                    autoComplete="middleInitial"
                    required
                    style={styles.inputField}
                    onFocus={(e) => {
                      Object.assign(e.target.style, styles.inputFieldFocus);
                    }}
                    onBlur={(e) => {
                      Object.assign(e.target.style, styles.inputField);
                    }}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="dateOfBirth" style={styles.label}>
                  Date of Birth
                </label>
                <div style={styles.inputContainer}>
                  <input
                    id="dateOfBirth"
                    name="dateOfBirth"
                    type="date"
                    autoComplete="dateOfBirth"
                    required
                    style={styles.inputField}
                    onFocus={(e) => {
                      Object.assign(e.target.style, styles.inputFieldFocus);
                    }}
                    onBlur={(e) => {
                      Object.assign(e.target.style, styles.inputField);
                    }}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="age" style={styles.label}>
                  Age
                </label>
                <div style={styles.inputContainer}>
                  <input
                    id="age"
                    name="age"
                    type="number"
                    autoComplete="age"
                    required
                    style={styles.inputField}
                    onFocus={(e) => {
                      Object.assign(e.target.style, styles.inputFieldFocus);
                    }}
                    onBlur={(e) => {
                      Object.assign(e.target.style, styles.inputField);
                    }}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phoneNumber" style={styles.label}>
                  Phone Number
                </label>
                <div style={styles.inputContainer}>
                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    autoComplete="phoneNumber"
                    required
                    style={styles.inputField}
                    onFocus={(e) => {
                      Object.assign(e.target.style, styles.inputFieldFocus);
                    }}
                    onBlur={(e) => {
                      Object.assign(e.target.style, styles.inputField);
                    }}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="address" style={styles.label}>
                  Address
                </label>
                <div style={styles.inputContainer}>
                  <input
                    id="address"
                    name="address"
                    type="text"
                    autoComplete="address"
                    required
                    style={styles.inputField}
                    onFocus={(e) => {
                      Object.assign(e.target.style, styles.inputFieldFocus);
                    }}
                    onBlur={(e) => {
                      Object.assign(e.target.style, styles.inputField);
                    }}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="gender" style={styles.label}>
                  Gender
                </label>
                <div style={styles.inputContainer}>
                  <select
                    id="gender"
                    name="gender"
                    required
                    style={styles.inputField}
                    onFocus={(e) => {
                      Object.assign(e.target.style, styles.inputFieldFocus);
                    }}
                    onBlur={(e) => {
                      Object.assign(e.target.style, styles.inputField);
                    }}
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div>
                <button type="submit" style={styles.submitButton}>
                  Sign up
                </button>
                {error && <p style={styles.errorMessage}>{error}</p>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
