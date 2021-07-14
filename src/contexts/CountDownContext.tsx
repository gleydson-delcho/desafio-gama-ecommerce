import { useEffect, useState } from "react";
import { createContext, ReactNode } from "react";

interface CountDownContextData {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    timer: () => void;
}

interface CountDownProviderProps {
    children: ReactNode;
}

export const CountDownContext = createContext({} as CountDownContextData);

export default function CountDownProvider({ children }: CountDownProviderProps): JSX.Element {






    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    function timer() {
        const targetTime = new Date("11/26/2021 00:00:00 AM").getTime();

        setInterval(() => {
            const now = new Date().getTime();
            const time = targetTime - now;

            const timerDays = Math.floor(time / (1000 * 60 * 60 * 24))
            const timerHours = Math.floor(time / (1000 * 60 * 60) % 24)
            const timerMinutes = Math.floor((time / 1000) % 60)
            const timerSeconds = Math.floor((time / (1000 * 60)) % 60)
            if (time > 0) {
                setDays(timerDays)
                setHours(timerHours)
                setSeconds(timerMinutes)
                setMinutes(timerSeconds)
            } else {
                clearInterval()
            }
        },1000);
    }

    useEffect(() => {
        timer();
    },[])

    return (
        <CountDownContext.Provider value={{
            days,
            hours,
            minutes,
            seconds,
            timer
        }}>
            {children}
        </CountDownContext.Provider>
    );
}