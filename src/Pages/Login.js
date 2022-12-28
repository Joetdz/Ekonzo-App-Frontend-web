import React from "react"
import { CiUser } from "react-icons/ci"
import { CiLock } from "react-icons/ci"
import { FcGoogle } from "react-icons/fc"
import { useFormInputValidation } from "react-form-input-validation"

const Login = () => {
  const [fields, errors, form] = useFormInputValidation(
    {
      name: "",
      password: "",
    },
    {
      name: "required|email",

      password: "required",
    }
  )
  const onSubmit = async (event) => {
    const isValid = await form.validate(event)
    if (isValid) {
      console.log(fields, errors)
      // Perform api call here
    } else {
      console.log(fields, errors)
    }
  }
  return (
    <div className="login-page">
      <div className="login-illustration">
        <img className="illustraton" src="Finance-app-amico.svg" alt="" />
        <img className="logo" src="logo-no-background.png" alt="" />
      </div>
      <div className="login-form">
        <span className="title">Connexion</span>
        <form
          className="form"
          noValidate
          autoComplete="on"
          onSubmit={onSubmit}
          lang="fr"
        >
          <div className={errors.name ? "input-group errors" : "input-group "}>
            {" "}
            <CiUser />
            <input
              name="name"
              onBlur={form.handleBlurEvent}
              onChange={form.handleChangeEvent}
              value={fields.name}
              type="tel"
              placeholder="Email ou numéro"
            />
          </div>
          {errors.name ? (
            <>
              <p className="error-text">{errors.name ? errors.name : ""}</p>
            </>
          ) : (
            ""
          )}
          <div className={errors.name ? "input-group errors" : "input-group "}>
            {" "}
            <CiLock />
            <input
              name="password"
              onBlur={form.handleBlurEvent}
              onChange={form.handleChangeEvent}
              value={fields.password}
              type="password"
              placeholder="Mot de passe"
            />
          </div>
          {errors.name ? (
            <>
              <p className="error-text">
                {errors.password ? errors.password : ""}
              </p>
            </>
          ) : (
            ""
          )}

          <button type="submit" className="login-btn-local">
            Connexion
          </button>
          <button className="login-btn-google">
            Se connecter avec
            <span className="icon-connexion">
              <FcGoogle />
            </span>
          </button>
          <span className="text-register">
            Si vous n avez pas un compte inscrivez vous{" "}
          </span>
        </form>
      </div>
    </div>
  )
}

export default Login
