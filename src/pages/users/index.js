const UserPage = (props) => {
  console.log(props)
  return(
    <div>
    <h1>UsersPage</h1>
    <div>
      {props.users.map((user) => (
        <div key={user.id}>{user.name}</div>
        ))}
    </div>
    </div>    
  )
}

export async function getServerSideProps(){
  try{
  const users = await fetch('https://jsonplaceholder.typicode.com/users').then(
    (res) => res.json()
    )

  return {
    props: {
      users,
    },
  };
} catch (error) {
  console.log(error)
  return{
    props:{
      users: [],
      error,
    }
  }
}
}

export default UserPage