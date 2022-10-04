import { renderHook } from "@testing-library/react";
import useLoader from "../hooks/useLoader";

test("show return currect properties from hook", () => {
	const { result } = renderHook(() =>
		useLoader({
			interval: 1000,
		})
	);
	expect(Object.keys(result.current)).toHaveLength(4);
	expect(result.current.progress).toBe(0);
	expect(result.current.pause).toBeFalsy();
});
