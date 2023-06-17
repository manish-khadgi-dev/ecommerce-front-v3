import { Button } from '@/components/Button';
import { CartContext } from '@/components/CartContext';
import Center from '@/components/Center';
import Header from '@/components/Header';
import { useContext, useEffect, useState } from 'react';
import { styled } from 'styled-components';

const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.7fr;
  gap: 40px;
  margin-top: 40px;
`;

const Box = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
`;
export default function CartPage() {
  const { cartProducts } = useContext(CartContext);
const [products, setProducts] = useState([])
  useEffect(()=> {
    if(cartProducts.length > 0)
  },[cartProducts])
  return (
    <>
      <Header />
      <Center>
        <ColumnsWrapper>
          <Box>
            {!cartProducts?.length && <div> Your cart is empty</div>}
            {cartProducts?.length && (
              <>
                <h2> Cart </h2>
                {cartProducts.map((productId) => (
                  <div> {productId}</div>
                ))}
              </>
            )}
          </Box>
          {!!cartProducts?.length && (
            <Box>
              <h2> Order Information </h2>
              <input type="text" placeholder="Address 1" />
              <input type="text" placeholder="Address 2" />
              <Button black block>
                Continue to payment
              </Button>
            </Box>
          )}
        </ColumnsWrapper>
      </Center>
    </>
  );
}
