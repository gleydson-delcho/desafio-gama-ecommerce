import { useContext } from 'react';
import { CountDownContext } from '../../contexts/CountDownContext';
import './styles.scss'

export function CountDown() {

    const { days, hours, minutes, seconds } = useContext(CountDownContext)

    const [dayLeft, dayCenter, dayRight] = String(days).padStart(3, '0').split('');
    const [hourLeft, hourRight] = String(hours).padStart(2, '0').split('');
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    return (
        <div className="containerCountdown">
            <h2>Faltam</h2>
            <div className="countdown">
                <div>
                    <span>{dayLeft}</span>
                    <span>{dayCenter}</span>
                    <span>{dayRight}</span>
                    <span>Dias</span>
                </div>
                <div className="timer">
                    <div>
                        <span>{hourLeft}</span>
                        <span>{hourRight}</span>
                    </div>
                    <span>:</span>
                    <div>
                        <span>{minuteLeft}</span>
                        <span>{minuteRight}</span>
                    </div>
                    <span>:</span>
                    <div>
                        <span>{secondLeft}</span>
                        <span>{secondRight}</span>
                    </div>
                </div>
            </div>
        </div>

    );
}