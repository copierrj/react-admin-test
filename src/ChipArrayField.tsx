import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import get from 'lodash/get';
import { useRecordContext } from "react-admin";

type ChipArrayFieldProps = {
    source: string
}

export default function ChipArrayField({ source }: ChipArrayFieldProps) {
    const record = useRecordContext();
    const field: string[] = get(record, source);
    return (
        <Stack direction="row" spacing={1}>
            {field.map(item => <Chip label={item}/>)}
        </Stack>
    );
};
