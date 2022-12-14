import React from 'react';

import NavbarItem from './navbarItem';

function Navbar(props) {
  return (
    <div className='navbar navbar-expand-lg fixed-top navbar-dark bg-primary'>
      <div className='container'>
        <a href='/' className='navbar-brand'>
          Meu Sistema
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarResponsive'
          aria-controls='navbarResponsive'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarResponsive'>
          <ul className='navbar-nav'>
            <NavbarItem
              render='true'
              href='/listagem-funcionarios'
              label='Funcionários'
            />
            <NavbarItem
              render='true'
              href='/cadastro-pedido'
              label='Pedidos'
            />
            <NavbarItem
              render='true'
              href='/listagem-fornecedores'
              label='Fornecedores'
            />
            <NavbarItem
              render='true'
              href='/cadastro-produto'
              label='Produtos'
            />
            <NavbarItem
              render='true'
              href='/cadastro-cliente'
              label='Clientes'
            />
            <NavbarItem
              render='true'
              href='/cadastro-tamanho'
              label='Tamanhos'
            />
            <NavbarItem
              render='true'
              href='/cadastro-cor'
              label='Cores'
            />
            <NavbarItem
              render='true'
              href='/cadastro-departamento'
              label='Departamentos'
            />
            <NavbarItem
              render='true'
              href='/realizar-venda'
              label='Vendas'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;