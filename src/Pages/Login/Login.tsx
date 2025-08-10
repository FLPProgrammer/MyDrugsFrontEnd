import { Container, Input, Button, Form, LinkText } from './styles'
import iconMyDrugs from '@/assets/WhiteLogo.png'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { api } from '@/Services/api'
 
export function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')


    const navigate = useNavigate();

    function handleRegisterPage() {
        navigate('/register')
    }

   async function handleLogin(e: React.FormEvent) {
        e.preventDefault();
        
        if(!email) {
            alert('Please enter your email!')
            return
        }

        if(!password) {
            alert('Please enter your password!')
            return
        }

        try {
            const response = await api.post('/users/login', {email, password})
            const { token, user } = response.data
            localStorage.setItem('token', token)
            localStorage.setItem('userName', user.name)
            alert('Login has been done successfully!');
            navigate('/')
            window.location.reload();
        } catch(error: any) {
            return console.log(error.response?.data?.message || 'Error logging in!')
        }

        }

    return (
        <Container>
            <div className='boxImg'>
            </div>
            <div className='boxForm'>
                <img className='icon' src={iconMyDrugs} alt="" />
                <Form onSubmit={handleLogin}>
                    <Input type='email' placeholder='Digite seu e-mail.' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <Input type='password' placeholder='Digite sua senha.' value={password} onChange={(e) => setPassword(e.target.value)}/>

                    <Button type='submit'>Enter</Button>

                        <LinkText onClick={handleRegisterPage}>Don't have an account yet?</LinkText>
                </Form>
            </div>
        </Container>
    )
}
