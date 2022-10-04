import { useCallback, useEffect, useState } from "react";

function useLoader({ interval = 1000 }) {
	const [progress, setProgress] = useState(0);
	const [intervalId, setIntervalId] = useState(null);
	const [pause, setPasue] = useState(false);
	const [start, setStart] = useState(false);

	const pauseAndResumeLoader = useCallback(() => setPasue((prev) => !prev), []);
	const startAndRestartLoader = useCallback(() => {
		// For restart check if any progress or any interval started.
		// Clear and reset everything.
		if (progress > 0 || intervalId) {
			intervalId && clearInterval(intervalId);
			setIntervalId(null);
			setProgress(0);
			if (pause) {
				pauseAndResumeLoader();
			}
		}
		setStart(true);
	}, [intervalId, progress, pause, pauseAndResumeLoader]);

	useEffect(() => {
		// If progress is 100% stop
		if (progress === 100) {
			clearInterval(intervalId);
			setStart(false);
		}
	}, [progress, intervalId]);

	useEffect(() => {
		let id;
		if (start) {
			id = setInterval(() => {
				if (!pause) {
					setProgress((progress) => progress + 1);
				}
			}, interval);
			!intervalId && setIntervalId(id);
		}
		return () => id && clearInterval(id);
	}, [start, pause, intervalId, interval]);

	return {
		progress,
		pause,
		interval,
		startAndRestartLoader,
		pauseAndResumeLoader,
	};
}

export default useLoader;
