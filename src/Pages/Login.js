import React, { useEffect, useState, useContext } from "react"
import { CiUser } from "react-icons/ci"
import { CiLock } from "react-icons/ci"

import { useFormInputValidation } from "react-form-input-validation"
import { Link } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import axios from "axios"
import AuthLoader from "../Components/AuthLoader"
import { AccountService } from "../Services/Account.Service"
import publicContext from "../Services/Context.Service"
import { useNavigate } from "react-router-dom"

const Login = () => {
  // const navigate = useNavigate()
  const { userisLogged, setUserIslogged } = useContext(publicContext)

  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

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
        notify("Connexion Réusie !")
        setTimeout(() => {
          AccountService.saveToken(data.data.token)
          AccountService.SaveCurrentUserInfo(data.data.userId)
          console.log("salut token")
          setUserIslogged(true)
        }, 3000)
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
      numero: "",
      password: "",
    },
    {
      numero: "required",

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
      console.log(errors)
      notify("Vueillez renseigner correctement tous les champs")
    }
  }
  useEffect(() => {
    userisLogged && navigate("/home")
    console.log(userisLogged)
  })

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
          autoComplete="off"
          onSubmit={onSubmit}
          lang="fr"
        >
          <div className={errors.name ? "input-group errors" : "input-group "}>
            {" "}
            <CiUser />
            <input
              name="numero"
              onBlur={form.handleBlurEvent}
              onChange={form.handleChangeEvent}
              type="tel"
              placeholder="numéro"
            />
          </div>

          <div className={errors.name ? "input-group errors" : "input-group "}>
            {" "}
            <CiLock />
            <input
              name="password"
              onBlur={form.handleBlurEvent}
              onChange={form.handleChangeEvent}
              type="password"
              placeholder="Mot de passe"
            />
          </div>

          <button type="submit" className="login-btn-local">
            Connexion {isLoading ? <AuthLoader /> : ""}
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
