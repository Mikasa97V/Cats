import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button } from './components/button/Button';
import { CheckBox } from './components/check-box/CheckBox';
import { Picture } from './components/picture/Picture';
import cat from './source/black-cat.png';
import loadingIcon from './source/Loading.svg';


const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;

`

const App = () => {

  const [enable, setEnable] = useState(false);
  const [autoRefresh, setAutoRefresh] = useState(false);

  const [urlPicture, setUrlPicture] = useState(cat);

  const handleFetchPicture = () => {
    const url = 'https://api.thecatapi.com/v1/images/search';
    setUrlPicture(loadingIcon)
    fetch(url)
      .then((response) => response.json())
      .then((data) => setUrlPicture(data[0].url))
      .catch(() => setUrlPicture(cat));
  }

  useEffect(() => {
    let interval = setInterval(() => {
      if (autoRefresh) {
        handleFetchPicture();
      }
    }, 5000);

    return () => clearInterval(interval)
  }, [autoRefresh])

  return (
    <AppWrapper>
      <div>

        <CheckBox
          label='Enabled'
          value={enable}
          onChange={setEnable}
        />

        <CheckBox
          label='Auto-refresh every 5 seconds'
          value={autoRefresh}
          onChange={setAutoRefresh}
        />

        <Button
          label='Get cat'
          onClick={handleFetchPicture}
          disabled={!enable}
        />

        <Picture urlPicture={urlPicture} />

      </div>
    </AppWrapper>
  );
}

export default App;
