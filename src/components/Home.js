import React, { useContext } from 'react';
import { NewContext } from './context/Context'
import Card from './Card'
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from './Loader';


function Home() {
  const a = useContext(NewContext);
  const { mons, count, setCount,owner } = a;

  const fetchMoreData = () => {
    setCount(count+12);
  };


  return (
    <>
      <div className="container">
        <div className="heading">
          <h2>PokeMon</h2>
        </div>
        <InfiniteScroll
          dataLength={count}
          next={fetchMoreData}
          hasMore={count <= 900}
          loader={<Loader/>}
        >
          <div className="grid-container">
            {mons && mons.map((pika, index) => {
              let imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`;
              return (
                <Card pika={pika} key={index} imgUrl={imgUrl} />)
            })}
          </div>
        </InfiniteScroll>
        <div className="footer">
          <h3>{owner.name} aka <a target="_blank" href="https://github.com/scorcism">{owner.aka}</a></h3>
          <p><a target="_blank" href={owner.apiUsed}>{owner.apiName}</a></p>
        </div>
      </div>
    </>
  )
}

export default Home