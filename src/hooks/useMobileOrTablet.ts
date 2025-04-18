import { Grid } from "antd";
import { useMemo } from 'react';

const { useBreakpoint } = Grid;

export const useMobileOrTablet = () => {
    // Hook useBreakpoint luôn được gọi trong mỗi render
    const screens = useBreakpoint();

    // Dùng useMemo để chỉ tính toán lại khi screens.lg thay đổi
    return useMemo(() => !screens.lg, [screens.lg]);
};
