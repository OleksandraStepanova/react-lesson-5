import { Container, ExchangeForm, Heading, Section } from 'components';
import { useSelector } from 'react-redux';
import { selectBasedCurrency } from 'reduxState/currency/slice';

const Home = () => {
  const isError = false;
  const value = useSelector(selectBasedCurrency);
  console.log(value);


  return (
    <Section>
      <Container>
        <ExchangeForm />
        <Heading info title="What currencies do you want to exchange?🙂" />
        

        {isError && (
          <Heading
            error
            title="Something went wrong...😐 Check the data validity and try again!"
          />
        )}
      </Container>
    </Section>
  );
};

export default Home;
