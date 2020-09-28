import React from 'react';
import Header from './components/Header';
import RelationCard from './components/RelationCard'
import './RelationPage.scss';

const RelationPage = () => (
  <div className="layout">
    <Header>Contacts</Header>
    <RelationCard />
  </div>
)

export default RelationPage;