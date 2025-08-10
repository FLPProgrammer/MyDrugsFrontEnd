import { Container, Input, Button, Form, LinkText } from './styles'
import iconMyDrugs from '@/assets/WhiteLogo.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { api } from '@/Services/api'

export function CreateAccount() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')


    const navigate = useNavigate();

    function handleLoginPage() {
        navigate('/login')
    }

    async function handleCreateAccount(e: any) {
        e.preventDefault();

        if(password !== confirmPassword) {
            alert('As senhas não conferem!')
            return
        }

        try {
            await api.post('/users/register', {name, email, password});
            alert('Account has been created sucessfully!');
            navigate('/login');
        } catch (error: any) {
            alert(error.response?.data?.message || 'Error creating account!')
        }
    }


    return (
        <Container>
            <div className='boxImg'>
            </div> 
            <div className='boxForm'>
                <img className='icon' src={iconMyDrugs} alt="" />
                
                <Form onSubmit={handleCreateAccount}> 
                    <Input type='text' placeholder='Digite seu nome completo.' value={name} onChange={(e) => setName(e.target.value)}/>
                    <Input type='email' placeholder='Digite seu e-mail.' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <Input type='password' placeholder='Digite sua senha.' value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <Input type='password' placeholder='Confirme sua senha.' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>

                    <Button type='submit'>Registrar</Button>

                        <LinkText onClick={handleLoginPage}>Already has an account? Sign in here</LinkText>
                </Form>
            </div> 
        </Container>
    )
}