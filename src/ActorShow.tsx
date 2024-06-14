import { Show, SimpleShowLayout, TextField, SimpleList, ArrayField } from 'react-admin';

export const ActorShow = () => {
    return (
        <Show queryOptions={{ meta: { columns: ["first_name", "last_name", "films:film(title, release_year)"] } }}>
            <SimpleShowLayout>
                <TextField source="first_name" />
                <TextField source="last_name" />
                <ArrayField source="films">
                    <SimpleList
                        primaryText={film => film.title}
                        secondaryText={film => film.release_year}
                    />
                </ArrayField>
            </SimpleShowLayout>
        </Show>
    );
};
