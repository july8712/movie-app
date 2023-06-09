import "../styles/Navbar.css"
import { Box, Button, Input, Image } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

export const Navbar = () => {

    const navigate = useNavigate()
    const [valueInput, setValueInput] = useState("")
    const [abierto, setAbierto] = useState(false)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/peliculas/${valueInput}`)
    }
    const handleChange = (e) => {
       setValueInput (e.target.value)
    }
    const mostrarMenu = () => {
        if(abierto){
            setAbierto(false)
        }else{
            setAbierto(true)
        }
    }
   
    return(
        <Box w='100%' p={4} bg='#030015' id='navbar'>
            <Box display="flex" alignItems="center" justifyContent="space-between" id='iconosMenu'>
                <Link to="/">
                    <Image src='../assets/img/logo-movie.png' alt='Dan Abramov' w='150px' />
                </Link>
                <Image src='../assets/img/hamburger.svg' alt='Dan Abramov' w='35px' id='hamburguesa' onClick={mostrarMenu}/>
            </Box>
            <Box className={abierto ? 'abierto' : 'cerrado'} alignItems="center" direction='row' gap='3' align='center' id='containerButtons'>
                <Link to="/">
                    <Button variant='ghost'  fontSize='xl' color='#a9a3d3' _hover={{background: "#52002c", color: "white"}}>
                        Home
                    </Button>
                </Link>
                <Link to="/populares">
                    <Button variant='ghost' fontSize='xl' color='#a9a3d3' _hover={{background: "#52002c", color: "white"}}>
                        Populares
                    </Button>
                </Link> 
                <Link to="/lanzamientos">
                    <Button variant='ghost' fontSize='xl' color='#a9a3d3' _hover={{background: "#52002c", color: "white"}}>
                        Próximos Lanzamientos
                    </Button>
                </Link>
                <form action="" onSubmit={handleSubmit}>
                    <Input onChange={handleChange} color='#030015' _focusVisible={{color: "#030015"}} _placeholder={{color: "#030015"}} width='auto' variant='filled' placeholder='ej. Batman' />
                    <Input type='submit' onChange={handleChange} id="btnBuscar" width='auto' color='#a9a3d3' fontWeight='bold' ms='4' _hover={{background: "#ffffff", color: "#030015", fontWeight: 'bold'}}/>
                </form>
            </Box>
        </Box>
    )
}