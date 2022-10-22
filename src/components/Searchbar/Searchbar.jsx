import { Formik } from 'formik';
import * as yup from 'yup';

import { SearchForm, Input, Icon, Btn } from './Searchbar.styled';

const schema = yup.object().shape({
  value: yup.string().trim().required(),
});

const SearchBar = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values.value.trim());
    resetForm();
  };
  return (
    <Formik
      initialValues={{ value: '' }}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <SearchForm>
        <Btn type="submit">
          <Icon />
        </Btn>
        <Input
          name="value"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </Formik>
  );
};

export default SearchBar;
