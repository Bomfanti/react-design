import { Envelope, Lock } from 'phosphor-react'
import { Button } from './components/Button'
import { Checkbox } from './components/Checkbox'
import { Heading } from './components/Heading'
import { Text } from './components/Text'
import { TextInput } from './components/TextInput'
import { Logo } from './Logo'
import './styles/global.css'

export function App() {

  return (
    <>
      <div className='w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100'>
        <header className='flex flex-col items-center'>
          <Logo className='hover:drop-shadow-[0_0_2em_rgba(126,10,206,255)]'/>
          <Heading size='lg' className='mt-0'>
            Título  
          </Heading>
          <Text size='lg' className='text-gray-400 mt-1'>
            Faça login e comece a usar!
          </Text>
        </header>

        <form className='flex flex-col gap-4 items-stretch w-full max-w-[400px] mt-10'>
          <label htmlFor='email' className='flex flex-col gap-3'>
            <Text className='font-semibold'>Endereço de e-mail</Text>
            <TextInput.Root>
              <TextInput.Icon>
                <Envelope/>
              </TextInput.Icon>
              <TextInput.Input id="email" type="email" placeholder='Digite seu e-mail'></TextInput.Input>
            </TextInput.Root>
          </label>

          <label htmlFor='password' className='flex flex-col gap-3'>
            <Text className='font-semibold'>Sua senha</Text>
            <TextInput.Root>
              <TextInput.Icon>
                <Lock/>
              </TextInput.Icon>
              <TextInput.Input id="password" type="password" placeholder='********'></TextInput.Input>
            </TextInput.Root>
          </label>

          <label htmlFor="remember" className='flex itens-center gap-2'>
            <Checkbox id='remember'/>
            <Text size="sm" className='text-gray-200'>
              Lembrar de mim por 30 dias
            </Text>
          </label>

          <Button type='submit' className='mt-4'>Entrar na plataforma</Button>

          <footer className='flex flex-col items-center gap-4'>
            <Text asChild size='sm'>
              <a href='' className='text-gray-400 underline hover:text-gray-200'>Esqueceu sua senha?</a>
            </Text>
            <Text asChild size='sm'>
              <a href='' className='text-gray-400 underline hover:text-gray-200'>Não possuí conta? Crie uma agora!</a>
            </Text>
          </footer>

        </form>
      </div>
    </>
  )
}


