import { useRouter } from "next/router";

export default function ShowNews() {
  const router = useRouter();
  
  return (<>Welcome to news {router.query.id}</>);
}