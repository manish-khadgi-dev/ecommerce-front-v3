import { styled } from 'styled-components';
import Center from './Center';
import Button from './Button';

const Bg = styled.div`
  background-color: #222;
  color: #fff;
  padding: 50px 0;
`;

const Title = styled.h1`
  margin: 0;
  font-weight: normal;
`;

const Desc = styled.p`
  color: #aaa;
  font-size: 0.8rem;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 40px;
  img {
    max-width: 100%;
  }
`;

const Column = styled.div`
  display: flex;
  align-items: center;
`;
export default function () {
  return (
    <Bg>
      <Center>
        <Wrapper>
          <Column>
            <div>
              <Title> Pro anywhere </Title>
              <Desc>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur provident voluptatum minima quas amet porro beatae,
                ratione sunt repellat aut.
              </Desc>
              <Button outline white size="l">
                Read more
              </Button>
              <Button primary size="l">
                Add to cart
              </Button>
            </div>
          </Column>
          <div>
            <img
              src="https://manish-next-ecommerce.s3.amazonaws.com/1686912828447.png"
              alt=""
            />
          </div>
        </Wrapper>
      </Center>
    </Bg>
  );
}
