import { Header } from "../../components/Header";
import bgImage from '../../assets/github.png'
import './style.css'
import SearchBar from "../../components/SearchBar";
import UserInfo from "../../components/UserInfo";
import RepoList from "../../components/RepoList";

import { useState } from "react";

function App() {
  const [user, setUser] = useState('')
  const [currentUser, setCurrentUser] = useState(null)
  const [repos, setRepos] = useState(null)

  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`)
    const newUser = await userData.json()
    console.log(newUser)
    
    if(newUser.name){
      const {avatar_url, name, bio, public_repos, login} = newUser
      setCurrentUser({avatar_url, name, bio, public_repos, login} )
    }

    const reposData = await fetch(`https://api.github.com/users/${user}/repos`)
    const newRepos = await reposData.json()

    if(newRepos.length){
      setRepos(newRepos);
    }
  }

  
  return (
    <div className="App">
      <Header />
      <div className="wrap">
        <img src={bgImage} alt="github logo" className="git-image"/>
        <div className="content">
          <SearchBar inputLabel={'@username'} buttonLabel={'Search'}
            user={user} onChangeUser={setUser}
            buttonFunction={handleGetData}
          />
          {currentUser?.name ? (<>
            <UserInfo profilePic={currentUser.avatar_url}
              profileName={currentUser.name}
              profileDesc={currentUser.bio}
              profileLogin={currentUser.login}
            />
            <hr/>
            {repos?.length ? (<>
              <h1 className="list-title">Repositories<span>{currentUser.public_repos}</span></h1>
              {repos.map(repo => (
                <RepoList user={currentUser.login} title={repo.name} 
                description={repo.description} topics={repo.topics}
                stars={repo.stargazers_count} forks={repo.forks_count}
                watchers={repo.watchers_count} language={repo.language}
                />
              ))}
            </>) : (<h1 className="list-title">User has no repositories.</h1>)}   
          </>) : null}
          
        </div>
      </div>
    </div>
  );
}

export default App;
