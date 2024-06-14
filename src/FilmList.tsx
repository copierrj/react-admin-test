import { Datagrid, List, NumberField, ReferenceField, TextField } from 'react-admin';

export const FilmList = () => (
    <List>
        <Datagrid rowClick="show">
            <TextField source="title" />
            <TextField source="description" />
            <NumberField source="release_year" options={{useGrouping: false}}/>
            <ReferenceField source="language_id" reference="language" >
                <TextField source="name"/>
            </ReferenceField>
            <NumberField source="length" />
            <TextField source="rating" />
        </Datagrid>
    </List>
);
