import React, { useState, useEffect } from 'react';
import Snake from './snake';
import Food from '../../../food';
import './App.css';

const App = () => {
    const getRandomCoordinates = () => {
        let min = 1;
        let max = 98;
        let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
        let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
        return [x, y];
    };

    const [snakeDots, setSnakeDots] = useState([[0, 0], [2, 0]]);
    const [food, setFood] = useState(getRandomCoordinates());
    const [direction, setDirection] = useState('RIGHT');
    const [speed, setSpeed] = useState(200);
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        const onKeyDown = (e) => {
            switch (e.keyCode) {
                case 38:
                    setDirection('UP');
                    break;
                case 40:
                    setDirection('DOWN');
                    break;
                case 37:
                    setDirection('LEFT');
                    break;
                case 39:
                    setDirection('RIGHT');
                    break;
                default:
                    break;
            }
        };
        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    }, []);

    useEffect(() => {
        if (gameOver) return;

        const moveSnake = () => {
            let dots = [...snakeDots];
            let head = dots[dots.length - 1];

            switch (direction) {
                case 'RIGHT':
                    head = [head[0] + 2, head[1]];
                    break;
                case 'LEFT':
                    head = [head[0] - 2, head[1]];
                    break;
                case 'DOWN':
                    head = [head[0], head[1] + 2];
                    break;
                case 'UP':
                    head = [head[0], head[1] - 2];
                    break;
                default:
                    break;
            }

            dots.push(head);
            dots.shift();
            setSnakeDots(dots);

            if (head[0] === food[0] && head[1] === food[1]) {
                setFood(getRandomCoordinates());
                enlargeSnake();
                setSpeed(speed => speed - 10);
            }

            if (checkIfOutOfBorders(head) || checkIfCollapsed(head)) {
                setGameOver(true);
            }
        };

        const enlargeSnake = () => {
            let newSnake = [...snakeDots];
            newSnake.unshift([]);
            setSnakeDots(newSnake);
        };

        const checkIfOutOfBorders = (head) => {
            if (head[0] >= 100 || head[0] < 0 || head[1] >= 100 || head[1] < 0) {
                return true;
            }
            return false;
        };

        const checkIfCollapsed = (head) => {
            let snake = [...snakeDots];
            snake.pop();
            for (let dot of snake) {
                if (head[0] === dot[0] && head[1] === dot[1]) {
                    return true;
                }
            }
            return false;
        };

        const interval = setInterval(moveSnake, speed);
        return () => clearInterval(interval);
    }, [snakeDots, direction, food, gameOver, speed]);

    return (
        <div className="game-area">
            <Snake snakeDots={snakeDots} />
            <Food dot={food} />
            {gameOver && <div className="game-over">Game Over</div>}
        </div>
    );
};

export default App;
