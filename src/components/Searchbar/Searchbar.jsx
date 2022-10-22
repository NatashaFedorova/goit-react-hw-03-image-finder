import { Formik } from 'formik';
import * as yup from 'yup';

import { SearchForm, Input, Icon, Btn } from './Searchbar.styled';

const schema = yup.object().shape({
  value: yup.string().trim().required(),
});

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = ({ value }, { resetForm }) => {
    onSubmit(value.trim());
    resetForm();
  };
  return (
    <Formik
      initialValues={{ value: '' }}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <SearchForm>
        <Input
          name="value"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <Btn type="submit">
          <Icon />
        </Btn>
      </SearchForm>
    </Formik>
  );
};

export default SearchBar;
