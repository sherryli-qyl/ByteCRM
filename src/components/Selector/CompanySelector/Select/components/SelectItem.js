import React from 'react';
import './SelectItem.scss';

class SelectItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const {
            company,
            handleAddCompany,
            selected,
            onChangeSelectItem,
            index,
        } = this.props;

        let className = 'companySelectItem ';
        if (selected) {
            className += 'companySelectItem--selected';
        }

        return (
          <div className={className} onMouseEnter={() => onChangeSelectItem(index)}>
            <button
              className="companySelectItem__btn"
              onClick={(event) => {
                        event.preventDefault();
                        handleAddCompany(company);
                    }}
            >
              {`${company.name} (${company.companyDomain})`}
            </button>
          </div>
        );
    }
}

export default SelectItem;
