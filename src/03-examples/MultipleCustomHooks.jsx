import { useCounter, useFetch } from '../hooks';
import { LoadingQuote } from './LoadingQuote';
import { Quote } from './Quote';

// import { useCounter } from "../hooks/useCounter";

export const MultipleCustomHooks = () => {
  
  const {counter, increment} = useCounter(1);
  const {data, isLoading, hasError} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`); 
  const { author, quote } = !!data && data[0];
 


  // console.log({data, isLoading, hasError})
  

  return (
    <>
        <h1>Breaking Bad</h1>
        <hr />

        {
          isLoading
          ?  <LoadingQuote />
          :  <Quote author={author} quote={quote}/>
        }

        <button className="btn btn-primary" 
        disabled={isLoading}
        onClick={ () => increment()}>
          Next Quote
        </button>

    </>
  );

}
export default Quote;