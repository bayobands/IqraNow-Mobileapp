import { Create, required, SimpleForm, TextField, TextInput } from "react-admin"

export const CourseCreate = () => {
    return(
        <Create redirect="list">
            <SimpleForm>
                <TextInput 
                source="title"  
                validate={[required()]} 
                label="Title"/>
                <TextInput 
                source="imageSrc" 
                validate={[required()]} 
                label="Image"/>
            </SimpleForm>
        </Create>
    );
};