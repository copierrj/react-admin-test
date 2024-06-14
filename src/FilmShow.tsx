import { NumberField, ReferenceField, Show, SimpleShowLayout, TextField } from 'react-admin';
import ChipArrayField from './ChipArrayField';

export const FilmShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="title" />
            <TextField source="description" />
            <NumberField source="release_year" options={{useGrouping: false}}/>
            <ReferenceField source="language_id" reference="language" >
                <TextField source="name"/>
            </ReferenceField>
            <NumberField source="length" />
            <TextField source="rating" />
            <ChipArrayField source="special_features"/>
        </SimpleShowLayout>
    </Show>
);
