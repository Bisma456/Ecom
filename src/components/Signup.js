import react, { useState } from 'react'

export const Signup = () => {

    //defining state using useState hook
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const Signup = (e) => {
        e.preventDefault();
        console.log('form submitted');
        console.log(name, email, password);
    }

    return  (
        <div className='container'>
            <br/>
            <h2>Sign Up</h2>
            <br/>
            <form autoComplete="off" className='from-group' onSubmit={Signup}>
                <label htmlFor="Name">Name</label>
                <br/>
                <input type="text" className='form-control' required
                onChange={(e)=>setName(e.target.value)} value={name} />
                <br/>
                <label htmlFor="Email">Email</label>
                <br/>
                <input type="email" className='form-control' required
                onChange={(e)=>setEmail(e.target.value)} value={email} />
                <br/>
                <label htmlFor="password">Password</label>
                <br/>
                <input type="password" className='form-control' required
                onChange={(e)=>setPassword(e.target.value)} value={password} />
                <br/>
                <button type="submit" className='btn btn-success btn-md mybtn'>REGISTER</button> 
            </form>
            {error && <div className='error-msg'>{error}</div>}
        </div>
    )
}
