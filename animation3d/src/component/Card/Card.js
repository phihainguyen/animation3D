import React, { useState } from 'react';
import './styles.css';
import logo from '../../assets/nike.png';
const Card = () => {
	const [ axis, setAxis ] = useState('');
	const [ transition, setTransition ] = useState('');
	const [ translation, setTranslation ] = useState('');
	const [ translationTitle, setTranslationTitle ] = useState('');
	const [ translationDesc, setTranslationDesc ] = useState('');
	const [ translationOther, setTranslationOther ] = useState('');
	const mouseMove = (e) => {
		let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
		let yAxis = (window.innerWidth / 2 - e.pageY) / 25;
		const newAxis = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
		setAxis(newAxis);
		console.log(newAxis);
	};
	const handleMouseLeave = () => {
		setAxis('rotateY(0deg) rotateX(0deg)');
		// const transition = ;
		setTransition('all 0.5s ease');
		setTranslationTitle('translateZ(0px) rotateZ(0deg)');
		setTranslation('translateZ(0px)');
		setTranslationDesc('translateZ(0px)');
		setTranslationOther('translateZ(0px)');
	};
	const handleMouseEnter = () => {
		// const transition = ;
		setTransition('none');
		setTranslationTitle('translateZ(200px) rotateZ(-20deg)');
		setTranslation('translateZ(150px)');
		setTranslationDesc('translateZ(130px)');
		setTranslationOther('translateZ(50px)');
	};
	return (
		<div
			className="container"
			onMouseMove={(e) => mouseMove(e)}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<div className="card" style={{ transform: axis, transition: transition }}>
				<div className="sneaker">
					<div className="circle" />
					<img src={logo} style={{ transform: translationTitle }} />
				</div>
				<div className="info">
					<h1 className="title" style={{ transform: translation }}>
						NIKE
					</h1>
					<h3 style={{ transform: translationDesc }}>Where All Athletes Belong.</h3>
					<div className="sizes" style={{ transform: translationOther }}>
						<button>36</button>
						<button>38</button>
						<button className="active">40</button>
						<button>42</button>
					</div>
					<div className="purchase">
						<button style={{ transform: translationOther }}>PURCHASE</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
