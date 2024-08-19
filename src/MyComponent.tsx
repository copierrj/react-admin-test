import { styled } from "@mui/material/styles";

export type MyComponentProps = {
    variant?: "outlined"
};

export const MyComponent = styled('div', {
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
