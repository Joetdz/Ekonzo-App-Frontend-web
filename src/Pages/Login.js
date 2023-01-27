import React, { useEffect, useState } from "react"
import { CiUser } from "react-icons/ci"
import { CiLock } from "react-icons/ci"
import { FcGoogle } from "react-icons/fc"
import { useFormInputValidation } from "react-form-input-validation"
import { Link } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import axios from "axios"
import AuthLoader from "../Components/AuthLoader"
import { accountService } from "../Services/Account.Service"

const Login = () => {
  // const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(false)

  const notify = (message) => {
    toast(message)
  }
  const login = (credentials) => {
    setIsLoading(true)

    axios({
      method: "post",
      url: `${process.env.REACT_APP_BASE_URL}user/login`,
      data: credentials,
    })
      .then((data) => {
        console.log(data)
        setIsLoading(false)
        notify("Connexion Réusie")
        accountService.saveToken(data.data.token)
      })
      .catch((err) => {
        setIsLoading(false)
        if (err.message === "Network Error") {
          notify(err.message)
        } else {
          notify(err.response.data)
        }
      })
  }
  const [fields, errors, form] = useFormInputValidation(
    {
      email: "",
      password: "",
    },
    {
      email: "required|email",

      password: "required",
    }
  )
  const onSubmit = async (event) => {
    event.preventDefault()
    const isValid = await form.validate(event)
    if (isValid) {
      console.log(fields, errors)
      login(fields)
    } else {
      console.log(fields, errors)
    }
  }
  useEffect(() => {}, [])

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
              name="email"
              onBlur={form.handleBlurEvent}
              onChange={form.handleChangeEvent}
              value={fields.name}
              type="tel"
              placeholder="Email ou numéro"
            />
          </div>

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

          <button type="submit" className="login-btn-local">
            Connexion {isLoading ? <AuthLoader /> : ""}
          </button>
          <button className="login-btn-google">
            Se connecter avec
            <span className="icon-connexion">
              <FcGoogle />
            </span>
          </button>
          <ToastContainer />
          <span className="text-register">
            Si vous n avez pas un compte<Link to="/signup">inscrivez vous</Link>
          </span>
        </form>
      </div>
    </div>
  )
}

export default Login
