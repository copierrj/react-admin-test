import { styled, useThemeProps } from "@mui/material/styles";
import { forwardRef } from "react";

export type MyComponentProps = {
    variant?: "outlined"
    children?: string | JSX.Element
};

const MyComponentRoot = styled('div', {
    name: "MyComponent",
    slot: "Root",
    shouldForwardProp: (prop) => prop !== "variant"
})<MyComponentProps>(props => {
    const { theme } = props;
    return {
        padding: "10px",
        userSelect: "none",
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main,
        variants: [
            {
                props: { variant: "outlined" },
                style: {
                    backgroundColor: "unset",
                    color: theme.palette.primary.main,
                    border: `1px solid ${theme.palette.primary.main}`
                }
            }
        ]
    }
});

export const MyComponent = forwardRef<HTMLDivElement, MyComponentProps>((inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: "MyComponent" });
    return <MyComponentRoot ref={ref} {...props}/>
});
