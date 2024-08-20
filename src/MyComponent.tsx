import { styled, useThemeProps } from "@mui/material/styles";
import { forwardRef } from "react";
import { useRecordContext } from "react-admin";

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
    };
});

const MyComponentLabel = styled('span', {
    name: "MyComponent",
    slot: "Label"
})(props => {
    return {

    };
});

export const MyComponent = forwardRef<HTMLDivElement, MyComponentProps>((inProps, ref) => {
    const {children, ...props} = useThemeProps({ props: inProps, name: "MyComponent" });
    return (
        <MyComponentRoot ref={ref} {...props}>
            <MyComponentLabel>{children}</MyComponentLabel>
        </MyComponentRoot>
    );
});

type MyComponentFieldProps = MyComponentProps & {
    source: string
};

export const MyComponentField = ({ source, ...props }: MyComponentFieldProps ) => {
    const record = useRecordContext();
    const value = record[source];

    return <MyComponent {...props}>{value}</MyComponent>;
};
