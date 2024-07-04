import React, { useRef, useEffect } from 'react';
import './ImprimirImagem.css';
import minhaimagem from './assets/img.jpg';

function ImprimirImagem({ text, x , y }) {

  const canvasRef = useRef(null);
  const image = new Image();
  image.src = minhaimagem;
  
  useEffect(() => {
    const canvas = canvasRef.current; 
    const context = canvas.getContext('2d');
    image.onload = () => {
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current; 
    const context = canvas.getContext('2d');
    image.onload = () => {
    context.drawImage(image, 0, 0, canvas.width, canvas.height);  
    context.font = '20px Arial';
    context.fillStyle = 'white';
    context.fillText(text, x, y);  
    }; 
  }, [text, x, y]);

  return (
    <div>
      <h2>Imagem</h2>
      <canvas ref={canvasRef} width="500" height="500" />
    </div>
);
}

export default ImprimirImagem;