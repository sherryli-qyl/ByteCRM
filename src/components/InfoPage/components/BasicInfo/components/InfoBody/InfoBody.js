import React from 'react';
import Loading from '../../../../../Loading';
import Avatar from '../../../../../Avatar';
import './InfoBody.scss';

class InfoBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { dataPack } = this.props;
    let loading = true;
    if (dataPack.data && !dataPack.data.errors) {
      loading = false;
    }

    let companyName = '';
    if (dataPack.data.company) {
      companyName = `at ${dataPack.data.company.name}`;
    }
    return (
      <div className="infoBody">
        {dataPack.key === 'contact'
          ? (
            <>
              {loading
                ? <Loading variant="block" />
                : (
                  <>
                    <div className="infoBody__contactsAvatar--init">
                      <Avatar variant="large">
                        {`${dataPack.data.firstName[0]}${dataPack.data.lastName[0]}`}
                      </Avatar>
                    </div>
                    <div className="infoBody__name">
                      {' '}
                      {`${dataPack.data.firstName} ${dataPack.data.lastName}`}
                      {' '}
                    </div>
                    <div className="infoBody__jobTitle">
                      {' '}
                      {`${dataPack.data.jobTitle} ${companyName}`}
                      {' '}
                    </div>
                  </>
                )}
            </>
          )
          : (
            <>
              <div className="infoBody__contactsAvatar--init">
                <Avatar variant="large">
                  {dataPack.data.name[0]}
                </Avatar>
              </div>
              <div className="infoBody__name">
                {' '}
                {dataPack.data.name}
                {' '}
              </div>
              <div className="infoBody__jobTitle">
                {' '}
                {dataPack.data.companyDomainName}
                {' '}
              </div>
            </>
          )}
      </div>
    );
  }
}

export default InfoBody;
