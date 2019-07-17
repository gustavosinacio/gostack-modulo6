import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';
import { mainColor } from '../../styles/colors';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src="https://static.netshoes.com.br/produtos/tenis-nike-shox-nz-eu-masculino/38/D12-9970-038/D12-9970-038_detalhe2.jpg?resize=326:*"
                alt="Tênis"
              />
            </td>
            <td>
              <strong>Tênis</strong>
              <span>R$129,90</span>
            </td>
            <td>
              <div>
                <button>
                  <MdRemoveCircleOutline size={20} color={mainColor} />
                </button>

                <input type="number" readOnly value={1} />

                <button>
                  <MdAddCircleOutline size={20} color={mainColor} />
                </button>
              </div>
            </td>
            <td>
              <strong>R$258,90</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color={mainColor} />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>R$129,90</strong>
        </Total>
      </footer>
    </Container>
  );
}
