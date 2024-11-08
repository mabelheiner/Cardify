import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate();
  return (
    <header style={{display: 'flex', backgroundColor: '#eef8eb', borderBottom: '1px solid #2c4f40', marginBottom: '1em'}}>
        <div style={{display: 'flex'}} onClick={() => navigate('/')}>
            <img src='/src/assets/Cardify.png' alt='logo img' style={{height: '7em'}} />
            <div style={{textAlign: 'left', paddingLeft: '.5em'}}>
              <h1>Cardify</h1>
              <p>Master anything one card at a time</p>
            </div>
        </div>

            <div style={{backgroundColor: 'white', display: 'flex', alignItems: 'center', margin: 'auto', padding: '.5em', border: '1px solid gray'}}>
              <input style={{background: 'none', border: 'none'}} type='text' placeholder='Search...' className='search-input'></input>
              <FaSearch />
            </div>
            <div style={{marginLeft: 'auto', paddingRight: '.5em', marginTop: 'auto', marginBottom: 'auto'}}>
              <a style={{textDecoration: 'none', color: 'inherit'}} onClick={() => navigate('/login')}>
                <svg fill="#eef8eb" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" height="50px" width="50px">
                <path fillRule="evenodd" clipRule="evenodd" d="M16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5C14.2091 
                5 16 6.79086 16 9ZM14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z" 
                fill="#2c4f40">                
                </path>
                <path fillRule="evenodd" clipRule="evenodd" d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 
                5.92487 18.0751 1 12 1ZM3 12C3 14.0902 3.71255 16.014 4.90798 17.5417C6.55245 15.3889 9.14627 14 12.0645 14C14.9448 14 17.5092 15.3531 
                19.1565 17.4583C20.313 15.9443 21 14.0524 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12ZM12 21C9.84977 21 7.87565 20.2459 6.32767 
                18.9878C7.59352 17.1812 9.69106 16 12.0645 16C14.4084 16 16.4833 17.1521 17.7538 18.9209C16.1939 20.2191 14.1881 21 12 21Z" 
                fill="#2c4f40"></path>
                </svg>
                <p style={{marginTop: 'auto'}}>Account</p>
              </a>
            </div>
        </header>
  )
}

export default Header