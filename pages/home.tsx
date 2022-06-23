import Navbar from '../components/infra/Head'

export default function Home() {
    return (
        <div style = {{
            backgroundColor: '#222',
            color: '#fff',
            height: '45vh',
        }}>
            <Navbar
             key1="post" 
             key1content='esse é o metodo post, ele adiciona items a api' 
             key1button='clique aqui para fazer um post'
             key1buttoncolor='blue'
             key2="get" 
             key2content='esse é o metodo get, ele puxa items da api' 
             key2button='clique aqui para fazer um get'
             key2buttoncolor='green'
             key3="about" 
             key3content='este é um simples projeto next usando chakra ui e consumindo uma api django rest framework, a api aqui está sendo apenas simulada, a real está no meu github!'
             />
        </div>
    )
}