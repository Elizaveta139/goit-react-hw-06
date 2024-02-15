import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/selectors';
import { changeFilter } from '../../redux/filtersSlice';

import css from './SearchBox.module.css';
import { IoIosSearch } from 'react-icons/io';

export default function SearchBox() {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);

  function handleChangeFilter(evt) {
    dispatch(changeFilter(evt.target.value));
    console.log(changeFilter(evt.target.value));
  }

  console.log('value', value);

  return (
    <div className={css.inputWrap}>
      <label className={css.label}>
        <IoIosSearch size="24" />
        Find contacts by name
      </label>
      <input
        className={css.input}
        type="name"
        value={value.name}
        onChange={handleChangeFilter}
        placeholder="Please enter a name to search"
      />
    </div>
  );
}
