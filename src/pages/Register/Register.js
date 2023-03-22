//meu css
import styles from "./Register.module.css"

//Imports
import { useState, useEffect } from "react"
 
const Register = () => {
    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        setError("")
        const user = { displayName, email, password }
        if(password !== confirmPassword) {
            setError("As senha precisam ser identica");
            return
        }
        console.log(user)
    }
  return (
    <div className={`${styles.register} container  `}>
        <h1>Cadastra-se para postar seu conteúdo</h1>
        <p>Crie seu usuário e compatilhe suas historia</p>
        <form onSubmit={ handleSubmit }>
            <label>
                <span>Nome: </span>
                <input type="text" name="displayName" required placeholder="Nome de usuário" value={displayName} onChange={ (e) => setDisplayName(e.target.value)} />
            </label>
            <label>
                <span>Email: </span>
                <input type="email" name="email" required placeholder="Email de acesso" value={email} onChange={ (e) => setEmail(e.target.value)} />
            </label>
            <label>
                <span>Senha: </span>
                <input type="password" name="password" required placeholder="Insira sua senha" value={password} onChange={ (e) => setPassword(e.target.value)} />
            </label>
            <label>
                <span>confirmação de senha: </span>
                <input type="password" name="confirmPassword" required placeholder="Confirma a sua senha" value={confirmPassword} onChange={ (e) => setConfirmPassword(e.target.value)} />
            </label>
            <button className="btn btn-success my-4">Cadastra</button>
            { error && <p className={`${error} text-danger bg-info`}>{error}</p> }
        </form>
    </div>
  );
};

export default Register;