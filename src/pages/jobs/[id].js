import { useRouter } from "next/router"


const JobListingPage = (props) => {
  console.log(props)
  const router = useRouter
  

  return(
    <div>JobListingPage</div>
  )
}

export async function getServerSideProps(context) {
  console.log(context.params.id)
  console.log(context)
  return {
    props: {
      job: {
        id: '123',
        title: 'Amazing galaxies',
      },
    },
  };
}

export default JobListingPage