import React from 'react';
import './App.css';
import data from './CollegeBasketballTeams.json';

//create variable to reference down in our 'for loop'
const teamList = data.teams;

interface TeamProps {
  school: string;
  name: string;
  city: string;
  state: string;
}

function Welcome() {
  return (
    <div>
      <h1>NCAA Basketball</h1>
      <h2>
        With March upon us, let's take a look at all of the colleges in NCAA
        Basketball!
      </h2>
      <br />
    </div>
  );
}

class Team extends React.Component<TeamProps> {
  render() {
    const oneTeam = this.props;

    return (
      <div className="team-card">
        <h2>{oneTeam.school}</h2>
        <h4>Mascot Name: {oneTeam.name}</h4>
        <h4>
          Location: {oneTeam.city}, {oneTeam.state}
        </h4>
        <br />
      </div>
    );
  }
}

export { Team };

function TeamList() {
  return (
    //this is like a for loop to iterate through the Json objects
    <div className="team-list">
      {teamList.map((oneTeam) => (
        <Team {...oneTeam} />
      ))}
    </div>
  );
}

function App() {
  //const blah = "hi";
  //we need to install something called eslint which will enforce rule that unused variables aren't cool

  return (
    <div className="App">
      <Welcome />
      <TeamList />
    </div>
  );
}

export default App;
