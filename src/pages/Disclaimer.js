import React from 'react';


function Disclaimer(setVisible) {
  const [status, setStatus] = React.useState(false);
  React.useEffect(() => {
    setVisible.setVisible(status);
  }, []);
  return (
    <div className='disclaimer'>
      <div className={`dis-box ${status ? 'hidden' : ''}`}>
        <h1 className='dis-text'>Disclaimer</h1>
        <h1 className='dis-agree' onClick={() => {
          setStatus(!status);
          setVisible.setVisible(!status);
        }
        }>
          I Agree
        </h1>
      </div>
    </div>
  );
}

export default Disclaimer;
