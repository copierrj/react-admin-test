import { Datagrid, List, NumberField, TextField, ShowButton, EditButton } from 'react-admin';

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
            <Datagrid rowClick={false}>
                <TextField source="title" />
                <TextField source="description" />
                <NumberField source="release_year" options={{useGrouping: false}}/>
                <TextField source="language_name"/>
                <NumberField source="length" />
                <TextField source="rating" />
                <ShowButton />
                <EditButton />
            </Datagrid>
        </List>
    );
};
