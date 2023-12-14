import React, { useState } from 'react';
import Select from 'react-select';

export const TranslateCard = ({ changeBtn, actionBtn, border, textarea }) => {

    const [isClearable, setIsClearable] = useState(true);
    const [isSearchable, setIsSearchable] = useState(true);
    const [isChange, setIsChange] = useState(false)


    const customStyles = {
        control: (provided, state) => ({
          ...provided,
            boxShadow: state.isFocused ? 'none' : 'none', // Focus olduğunda box-shadow
            background: state.isFocused ? '#303030' : '#303030',
            color: '#fff',
        }),
        option: (provided, state) => ({
          ...provided,
          background: state.isSelected ? '#5f5fcd' : '#303030', // Seçili veya seçilmemiş durumda opsiyon rengi
          color: '#fff',
          boxShadow: 'none'
        }),
        menu: (provided) => ({
          ...provided,
          padding: 0, // Açılan menüdeki padding'i sıfıra ayarla
        }),
      }

    const colourOptions = [
        { value: 'ocean', label: 'Ocean', isFixed: true },
        { value: 'blue', label: 'Blue' },
        { value: 'purple', label: 'Purple' },
        { value: 'red', label: 'Red' },
        { value: 'orange', label: 'Orange' },
        { value: 'yellow', label: 'Yellow' },
        { value: 'green', label: 'Green' },
        { value: 'forest', label: 'Forest' },
        { value: 'slate', label: 'Slate' },
        { value: 'silver', label: 'Silver' },
      ];

      const changeLanguage = () => {

        // çeviri işlemi yapılacak
        setIsChange(true);
        setTimeout(() => {
            setIsChange(false) 
        }, 1300);
      }

    return (
        <div className="translate__card">
            <div className="translate__card-head">
            <Select
                className="basic-single translate__card-select"
                classNamePrefix="select"
                isClearable={isClearable}
                isSearchable={isSearchable}
                name="color"
                options={colourOptions}
                styles={customStyles}
            />
                {
                    changeBtn && (
                        <button>
                            <i class="fa-solid fa-right-left"></i>
                        </button>
                    )
                }
                
            </div>
            
            <div className={`translate__card-body ${border && 'translate__card-body--border'}`}>
                {
                    textarea ? (
                        <textarea className="translate__card-text" placeholder="Çevirmek için Yaz"></textarea>
                    ) 
                    :
                    (
                        <div className="translate__card-text"></div>
                    )
                }
                
                {
                    actionBtn && (
                        <button className={`translate__card-btn ${isChange ? 'animation' : ''}`} onClick={changeLanguage}>
                            <i class="fa-brands fa-react"></i>
                        </button>
                    )
                }
                
            </div>
        </div>
    )
}
