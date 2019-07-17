import React from 'react';
import { MdShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-shox-nz-eu-masculino/38/D12-9970-038/D12-9970-038_detalhe2.jpg?resize=326:*"
          alt="tenis"
        />
        <strong>Tênis</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-shox-nz-eu-masculino/38/D12-9970-038/D12-9970-038_detalhe2.jpg?resize=326:*"
          alt="tenis"
        />
        <strong>Tênis</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-shox-nz-eu-masculino/38/D12-9970-038/D12-9970-038_detalhe2.jpg?resize=326:*"
          alt="tenis"
        />
        <strong>Tênis</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-shox-nz-eu-masculino/38/D12-9970-038/D12-9970-038_detalhe2.jpg?resize=326:*"
          alt="tenis"
        />
        <strong>
          Tênis Lorem ipsum dolor sit amet consectetur adipisicing elit. A
          suscipit alias excepturi molestiae dicta illum perspiciatis quasi unde
          sequi ea minima voluptate eligendi deserunt sint eveniet sit, nostrum
          aperiam quod?
        </strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-shox-nz-eu-masculino/38/D12-9970-038/D12-9970-038_detalhe2.jpg?resize=326:*"
          alt="tenis"
        />
        <strong>Tênis</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-shox-nz-eu-masculino/38/D12-9970-038/D12-9970-038_detalhe2.jpg?resize=326:*"
          alt="tenis"
        />
        <strong>Tênis</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
