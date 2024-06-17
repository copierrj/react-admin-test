import { NumberField, Show, SimpleShowLayout, TextField } from 'react-admin';
import ChipArrayField from './ChipArrayField';

export const FilmShow = () => {
    const meta = {
        columns: [
            "title",
            "description",
            "release_year",
            "...language!film_language_id_fkey(language_name:name)",
            "length",
            "rating",
            "special_features"
        ]
    }

    return (
        <Show queryOptions={{ meta }}>
            <SimpleShowLayout>
                <TextField source="title" />
                <TextField source="description" />
                <NumberField source="release_year" options={{useGrouping: false}}/>
                <TextField source="language_name"/>
                <NumberField source="length" />
                <TextField source="rating" />
                <ChipArrayField source="special_features"/>
            </SimpleShowLayout>
        </Show>
    );
}
