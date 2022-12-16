import React from 'react'

export const Footer = () => {
    let footerStyle = {
            position:"fixed",
            bottom:"0",
            left:"0",
            width:"100%",
            height: "50px",
            backgroundColor:"#D0DAEE"
        }
    return (
        <footer className="bg-dark text-light py-3" style = {footerStyle}>
            <p className="text-center">
                Copyright &copy; YashTodos.com
            </p>
        </footer>
    )
}