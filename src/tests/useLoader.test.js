import { renderHook } from "@testing-library/react";
import useLoader from "../hooks/useLoader";

test("show return currect properties from hook", () => {
	const { result } = renderHook(() =>
		useLoader({
			interval: 500,
		})
	);
	expect(Object.keys(result.current)).toHaveLength(5);
	expect(result.current.progress).toBe(0);
	expect(result.current.pause).toBeFalsy();
	expect(result.current.interval).toBe(500);
});
