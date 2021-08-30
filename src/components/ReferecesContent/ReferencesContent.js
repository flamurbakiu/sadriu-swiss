import React, { useState } from 'react';
import PhotoGallery from '../PhotoGallery/PhotoGallery';
import { FormattedMessage } from 'react-intl';
import { imgs, categories } from '../../utils/exportReferenceImages';
import LazyLoad from 'react-lazyload';

import './styles.css';

const filters = [
  { name: categories.bitumen, status: false },
  { name: categories.epdm, status: false },
  { name: categories.flüssigkunststoffe, status: false },
  { name: categories.naturteichePools, status: false },
  { name: categories.sarnafilResitrix, status: false },
  { name: categories.spenglerei, status: false },
  { name: categories.service, status: false },
];

const Filters = ({ onClickAll, all, onClick, filters }) => (
  <form className='filters'>
    <ul className='listOfFilters'>
      <li onClick={onClickAll}>
        <input
          className='inputStyle'
          type='radio'
          name='filter'
          checked={all}
          onChange={() => {}}
        />
        <label className='labelFilters' htmlFor='alle'>
          <FormattedMessage id='all' defaultMessage='Alle' />
        </label>
      </li>
      {filters.map((filter, i) => (
        <li key={i} data-index={i} onClick={onClick}>
          <input
            id={filter.name}
            type='radio'
            name='filter'
            checked={filter.status}
            className='inputStyle'
            onChange={() => {}}
          />
          <label className='labelFilters' htmlFor={filter.name}>
            {filter.name}
          </label>
        </li>
      ))}
    </ul>
  </form>
);

function ReferencesContent() {
  const [images, setImages] = useState(imgs);
  const [allFilters, setAllFilters] = useState(filters);
  const [all, setAll] = useState(true);

  const setFilter = (e) => {
    e.preventDefault();
    const { index } = e.currentTarget.dataset;

    allFilters[index].status = true;
    allFilters.forEach((filter) => {
      if (filter.name !== allFilters[index].name) {
        filter.status = false;
      }
    });
    setAllFilters(allFilters);
    setAll(false);

    updateImgs();
  };

  const setAllFiltr = () => {
    allFilters.forEach((filter) => {
      filter.status = false;
    });

    setAllFilters(allFilters);
    setAll(true);
  };

  const updateImgs = () => {
    let newImgs = [];
    let a = 0;

    imgs.forEach((img, imgKey) => {
      allFilters.forEach((filter, filterKey) => {
        if (img.tag === filter.name && filter.status === true) {
          newImgs[a] = img;
          a++;
        }
      });
    });

    setImages(newImgs);
  };

  return (
    <div className='referencesContainer'>
      <Filters
        onClickAll={setAllFiltr}
        all={all}
        onClick={setFilter}
        filters={allFilters}
      />
      {all ? (
        <LazyLoad height={200}>
          <PhotoGallery photos={imgs} />
        </LazyLoad>
      ) : (
        <LazyLoad height={200}>
          <PhotoGallery photos={images} />
        </LazyLoad>
      )}
    </div>
  );
}

export default ReferencesContent;
