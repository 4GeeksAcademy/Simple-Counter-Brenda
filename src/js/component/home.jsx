import React, { useEffect, useState } from 'react';
import '../../styles/index.css';


const SecondsCounter = ({ seconds }) => {
	// 
	

	const paddedSeconds = String(seconds).padStart(4, '0').split('');
  
	return (
	  <div className="counter-container">
		<i className="fas fa-clock counter-icon"></i>
		{paddedSeconds.map((digit, index) => (
		  <div key={index} className="digit-box">
			{digit}
		  </div>
		))}
	  </div>
	);
  };
  
  const Home = () => {
	const [seconds, setSeconds] = useState(0);
  
	useEffect(() => {
	  const interval = setInterval(() => {
		setSeconds((prevSeconds) => prevSeconds + 1);
	  }, 1000);
	  return () => clearInterval(interval);
	}, []);
  
	return <SecondsCounter seconds={seconds} />;
  };
  
  export default Home;