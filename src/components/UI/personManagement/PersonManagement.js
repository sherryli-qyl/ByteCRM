import React from 'react';
import debounce from 'debounce';
import { Button, Dropdown, Message, Tab } from 'semantic-ui-react';

import DisappearingMessage from '../../UI/disappearingMessage/DisapperingMessage';

const PersonManagement = ({
    error,
    handleAdd,
    handlePersonToAddChange,
    handlePersonToRemoveChange,
    handleRemove,
    handleSearchChange,
    isActionSuccessful,
    isAddingOrRemoving,
    isSearching,
    personsToAdd = [],
    personToAdd,
    personsToRemove = [],
    personToRemove,
}) => {
    const renderMessage = () => (
        <>
            {!!error && <Message negative>{error.message}</Message>}
            {isActionSuccessful && <DisappearingMessage positive>Action Succeeded</DisappearingMessage>}
        </>
    );

    const onSearchChange = debounce((event, { searchQuery }) => {
        if (!isSearching && searchQuery && searchQuery.length > 2) {
            handleSearchChange(searchQuery);
        }
    }, 500);

    const makeOptions = personsToAct => personsToAct.map(person => ({
        key: person._id,
        text: person.fullName,
        value: person._id,
    }));

    const renderAddTabContent = () => {
        const options = makeOptions(personsToAdd);

        return (
            <>
                <Dropdown
                    disabled={isSearching}
                    loading={isSearching}
                    onSearchChange={onSearchChange}
                    onChange={(event, data) => handlePersonToAddChange(data.value)}
                    selection
                    placeholder="search name"
                    search
                    options={options}
                    value={personToAdd}
                />
                <Button loading={isAddingOrRemoving} onClick={handleAdd}>Add</Button>
                {renderMessage()}
            </>
        )
    };

    const renderRemoveTabContent = () => {
        const options = makeOptions(personsToRemove);

        return (
            <>
                <Dropdown
                    onChange={(event, data) => handlePersonToRemoveChange(data.value)}
                    selection
                    placeholder="search name"
                    search
                    options={options}
                    value={personToRemove}
                />
                <Button loading={isAddingOrRemoving} onClick={handleRemove}>Remove</Button>
                {renderMessage()}
            </>
        )
    };

    const panes = [
        { menuItem: 'Add', render: () => <Tab.Pane>{renderAddTabContent()}</Tab.Pane> },
        { menuItem: 'Remove', render: () => <Tab.Pane>{renderRemoveTabContent()}</Tab.Pane> },
    ];

    return <Tab panes={panes} />
};

export default PersonManagement;
