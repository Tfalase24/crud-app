import React from 'react';
import './App.css';
import { ClickButton } from './components/ClickButton';
import { Form } from './components/Form';
import { ListComponent } from './components/listComponent';
import StaffInputFields from './components/StaffInputFields';
import Welcome from './components/Welcome';
import User from './interfaces/User';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AlternateHomePage from './components/AlternateHomePage';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path={'/'}>
            <Welcome firstName={user.firstName} lastName={user.lastName} />
            <h1> Hello {printName(user)}</h1>
            <h2> This is my react app which I am using to learn react</h2>
            <img src={user.urlOfPicture} width={200} alt="Island Boys"></img>
            <h3>{user.descriptionOfPicture}</h3>
            <h4>{button}</h4>
            <ClickButton />
            <Form />
            <ListComponent />
            <StaffInputFields />
          </Route>
          <Route exact path={'/Alternate'}>
            <AlternateHomePage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

function printName(user: User): string {
  return user.firstName + ' ' + user.lastName;
}

function screamFunction(e: React.MouseEvent<HTMLButtonElement>): void {
  e.preventDefault();
  console.log('Reeeeeeeeek!!!!');
}

const user: User = {
  firstName: 'Adetito',
  lastName: 'Falase',
  urlOfPicture:
    'https://media.euobserver.com/75ba88da8a99cadb376a759df8710279.jpg',
  descriptionOfPicture: "Queen Lizzie and I sipping Cherry B's... Four minimum",
};

const button: JSX.Element = (
  <div>
    <button onClick={screamFunction}> Click here</button>
  </div>
);
