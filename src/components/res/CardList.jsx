import React from 'react';
import { Card } from './Card';

const CardList = ( { people } ) => {
  return (
    <div>
      {people ? people.map((c,i) => {
        return (
        <Card key={people[i].id}
        id={people[i].id}
        name={people[i].name}
        email={people[i].email}/>
      )
      }) : null}
    </div>
  );
}

export default CardList;