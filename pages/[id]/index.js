import { useRouter } from 'next/router'
 
export default function PageSlug() {
  const router = useRouter()
  return <p>Not About: {router.query.id}</p>
}