const UserProfilePage = (props) => {
  return(
    <div>
    <h2>UserProfilePage</h2>
    {!props.error && (
    <div>
    <div>{props.user.id}</div>
    <div>{props.user.name}</div>
    <div>{props.user.username}</div>
    <div>{props.user.email}</div>
    </div>
    )}
    </div>
  )
}

export async function getServerSideProps(context) {
  const { userId } = context.params
  try{
  const user = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`
  ).then((res) => res.json())
  return {
    props: { user }}
  } catch (error) {
    console.log(error)
    return { props: { error }
    }
  }
  }

export default UserProfilePage