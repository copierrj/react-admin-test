import { Datagrid, List, NumberField, TextField } from 'react-admin';

export const FilmList = () => {
    const meta = {
        columns: [
            "film_id",
            "title",
            "description",
            "release_year",
            "...language!film_language_id_fkey(language_name:name)",
            "length",
            "rating"
        ]
    };

    return (
        <List queryOptions={{ meta }}>
            <Datagrid rowClick="show">
                <TextField source="title" />
                <TextField source="description" />
                <NumberField source="release_year" options={{useGrouping: false}}/>
                <TextField source="language_name"/>
                <NumberField source="length" />
                <TextField source="rating" />
            </Datagrid>
        </List>
    );
};
