import {} from "@gluestack-ui/themed";
import { useEffect, useState } from "react";

export default function useCountDown(initialSeconds: number) {
	const [remainingTime, setRemainingTime] = useState(initialSeconds);
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		start();
	}, []);

	useEffect(() => {
		let interval: any = null;
		if (isActive && remainingTime > 0) {
			interval = setInterval(() => {
				setRemainingTime((seconds) => seconds - 1);
			}, 1000);
		} else if (remainingTime === 0) {
			clearInterval(interval);
		}
		return () => clearInterval(interval);
	}, [remainingTime, isActive]);

	const start = () => {
		setIsActive(true);
	};

	const pause = () => {
		setIsActive(false);
	};

	const reset = () => {
		setIsActive(false);
		setRemainingTime(initialSeconds);
	};

	return { remainingTime, isActive, start, pause, reset };
}
