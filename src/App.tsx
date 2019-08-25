import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import * as toxicity from '@tensorflow-models/toxicity';

const App: React.FC = () => {
  const [tweets = [], setTweets] = useState<any>([]);

  useEffect(() => {
    const fetchFoo: any = async () => {
      const result: any = await axios.get(
        'https://api.icndb.com/jokes/random/10?limitTo=[explicit,nerdy]'
      );
      setTweets(result.data.value);
    };
    fetchFoo();
  }, []);

  const clickHandler = () => {
    const threshold = 0.6;
    // Load the model. Users optionally pass in a threshold and an array of
    // labels to include.
    //@ts-ignore
    toxicity.load(threshold).then(model => {
      //@ts-ignore
      model
        .classify(
          //@ts-ignore
          tweets.reduce((justJokes, jokeObj) => {
            justJokes.push(jokeObj.joke);
            return justJokes;
          }, [])
        )
        //@ts-ignore
        .then(predictions => {
          // `predictions` is an array of objects, one for each prediction head,
          // that contains the raw probabilities for each input along with the
          // final prediction in `match` (either `true` or `false`).
          // If neither prediction exceeds the threshold, `match` is `null`.

          console.log(predictions);
        });
    });
  };

  const hasTweets = tweets.length > 0;

  return (
    <div className="App">
      <header className="App-header">
        <button data-testid="button-cta" onClick={clickHandler}>
          Run Model
        </button>
        {!hasTweets && <span data-testid="loading">Fetching jokes...</span>}
        {hasTweets && (
          <ul data-testid="joke-list" className="joke-list--container">
            {tweets.map((item: any) => (
              <li
                data-testid={`joke-${item.id}`}
                className="joke-list--joke"
                key={item.id}
              >
                {item.joke}
              </li>
            ))}
          </ul>
        )}
      </header>
    </div>
  );
};

export default App;
