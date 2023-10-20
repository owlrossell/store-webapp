'use client';
import {Autocomplete, Box, Container, TextField} from "@mui/material";
import {useContext} from "react";
import {GlobalContext} from "@/context/GlobalContext";
import {Value} from "classnames";

interface OptionInterface {
    id: number,
    label: string,
    type: string,
}

const Search = () => {
    const {categories, products} = useContext(GlobalContext);
    console.log(products);

    const options = categories?.map((category): OptionInterface => ({
        id: category.id,
        label: category.name,
        type: 'category',
    }));

    const onChange = (_: React.SyntheticEvent, value: OptionInterface | OptionInterface[] | null, __: string) => {
        console.log(value);
    }
    return (
        <Box marginTop={'1rem'}>
            <Container maxWidth={'sm'}>
                <Autocomplete
                    disablePortal
                    options={options || []}
                    renderInput={(params) => <TextField {...params} label="Buscar aquí" variant="outlined"/>}
                    noOptionsText={'Intenta con otra búsqueda'}
                    onChange={onChange}
                />
            </Container>
        </Box>
    )
}
export default Search;