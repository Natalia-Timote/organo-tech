import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Footer from './components/Footer';
import Team from './components/Team';

function App() {

  const teams = [
    {
      name: 'Programação',
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9'
    },
    {
      name: 'Front-End',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF'
    },
    {
      name: 'Data Science',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2'
    },
    {
      name: 'Devops',
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8'
    },
    {
      name: 'UX & Design',
      primaryColor: '#D86EBF',
      secondaryColor: '#FAE5F5'
    },
    {
      name: 'Mobile',
      primaryColor: '#FEBA05',
      secondaryColor: '#FFF5D9'
    },
    {
      name: 'Inovação e gestão',
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF'
    },
  ];

  const [collaborators, setCollaborators] = useState([]);

  const toTheAddedCollaborator = (collaborator) => {
    setCollaborators([...collaborators, collaborator]);
  }

  return (
    <div className="App">
      <Banner />
      <Form teams={teams.map(team => team.name)} whenRegisteringCollaborator={collaborator => toTheAddedCollaborator(collaborator)}/>

      {teams.map(team => <Team 
        key={team.name} 
        name={team.name} 
        primaryColor={team.primaryColor} 
        secondaryColor={team.secondaryColor}
        collaborators={collaborators.filter(collaborator => collaborator.team === team.name)}
      />)}

      <Footer />
    </div>
  );
}

export default App;
